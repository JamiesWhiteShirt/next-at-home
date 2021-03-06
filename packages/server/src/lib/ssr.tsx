import React from "react";
import path from "path";
import { RequestHandler } from "express";
import { renderToNodeStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheet } from "styled-components";
import { endingRawHTMLFragment, startingRawHTMLFragment } from "./client";
import through, { ThroughStream } from "through";

const handler: RequestHandler = (req, res) => {
  try {
    const context: { url?: string } = {};

    const { default: App } = require(path.join(process.cwd(), "src", "App.tsx"));

    const app = (
      <StaticRouter
        location={req.originalUrl}
        context={context}
      >
        <App />
      </StaticRouter>
    );
    const sheet = new ServerStyleSheet();
    const stream = sheet.interleaveWithNodeStream(
      renderToNodeStream(sheet.collectStyles(app))
    );

    if (context.url) {
      res.redirect(301, context.url);
    } else {
      res.status(200);
      res.write(startingRawHTMLFragment);
      stream
        .pipe(through(
          function write(this: ThroughStream, data) {
            this.queue(data);
          },
          function end(this: ThroughStream) {
            this.queue(endingRawHTMLFragment);
            this.queue(null);
          }
        ))
        .pipe(res);
    }
  } catch (e) {
    console.error(e);
    res.status(500);
    res.end();
  }
};

export default handler;

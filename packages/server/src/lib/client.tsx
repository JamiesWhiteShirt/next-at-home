import React from "react";
import { renderToString } from "react-dom/server";
import Document from "./document";

const headToken = "";
const appToken = "###APP###";
export const rawHTML = "<!DOCTYPE html>" + renderToString(
  <Document
    entrypoint="/assets/client.js"
    headToken={headToken}
    appToken={appToken}
  />
);

export const [
  startingRawHTMLFragment,
  endingRawHTMLFragment,
] = rawHTML
  .split(appToken);

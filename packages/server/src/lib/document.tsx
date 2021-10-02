import React, { ReactNode } from "react";

const Document = ({
  entrypoint,
  appToken,
  headToken,
}: {
  entrypoint: string,
  appToken: string,
  headToken: string,
}): JSX.Element => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta content="text/html;charset=utf-8" httpEquiv="Content-Type" />
      <meta content="utf-8" httpEquiv="encoding" />
      <meta name="viewport" content="width=device-width, intial-scale=1 shrink-to-fit=no" />
      {headToken}
    </head>
    <body>
      <div id="app">{appToken}</div>
       <script src={entrypoint} />
    </body>
  </html>
);
export default Document;

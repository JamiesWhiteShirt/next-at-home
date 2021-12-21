/// <reference types="react/next" />
/// <reference types="react-dom/next" />

import React, { ComponentType } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

export default function client(App: ComponentType) {
  const element = document.getElementById("app");

  if (element === null) {
    throw Error("app element not found");
  }

  const app = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const root = ReactDOM.hydrateRoot(element);
  root.render(app);

  /* if (module.hot) {
    module.hot.accept();
  } */
}

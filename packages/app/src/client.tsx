import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const element = document.getElementById("app");
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.hydrate(app, element);

/* if (module.hot) {
  module.hot.accept();
} */

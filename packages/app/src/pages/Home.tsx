import React from "react";
import Page from "../components/Page";

const Home = () => (
  <Page>
    <p>
      Welcome to my home page
    </p>

    <button
      onClick={() => alert("Thanks")}
    >
      Click me!
    </button>
  </Page>
);

export default Home;

import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { GlobalStyles } from "./styles";
import LoadingComponent from "./pages/Loading";
import ErrorComponent from "./pages/Error";
import Page404 from "./pages/404";
import Header from "./components/Header";

const About = React.lazy(() => import("./pages/About"));

const App = () => (
  <>
    <GlobalStyles />
    <Header />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" render={() => (
				<Suspense fallback={<LoadingComponent />}>
					<About />
				</Suspense>
			)} />
      <Route component={Page404} />
    </Switch>
  </>
);

export default App;

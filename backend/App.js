import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-dom-container";

import "./App.css";
import "./fontawesome.css";

const Home = React.lazy(() => import("./components/Home/Home"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<h1> Horneando.. </h1>}>
        {" "}
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>{" "}
      </Suspense>{" "}
    </Router>
  );
};

export default App;

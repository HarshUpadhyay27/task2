import React from "react";
import Blog from "./Blog";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Blog} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

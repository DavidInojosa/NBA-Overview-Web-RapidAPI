import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Main from "./pages/Main";
function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing}></Route>
      <Route path="/main" component={Main}></Route>
    </BrowserRouter>
  );
}

export default Routes;

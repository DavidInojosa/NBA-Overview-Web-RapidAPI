import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Players from "./pages/Players";
function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing}></Route>
      <Route path="/players" component={Players}></Route>
    </BrowserRouter>
  );
}

export default Routes;

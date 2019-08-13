import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/dev/:id" component={Main} />
      {/* <Redirect path="*" to="/" /> */}
    </BrowserRouter>
  );
}
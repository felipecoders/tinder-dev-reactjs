import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dev/:id" component={Main} />
      {/* <Redirect path="*" to="/" /> */}
    </BrowserRouter>
  );
}

import React from "react";
import { Route, Switch } from "react-router";

import HomeComponent      from "./components/HomeComponent";
import LoginComponent     from "./components/LoginComponent";
import NotFoundComponent  from "./components/NotFoundComponent";
import FormComponent      from "./components/FormComponent";

const AppRouter: React.FC = () => (
  <Switch>
    <Route exact path="/"><HomeComponent /></Route>
    <Route exact path="/login"><LoginComponent/></Route>
    <Route exact path="/charlie"><FormComponent/></Route>
    <Route><NotFoundComponent/></Route>
  </Switch>
)

export default AppRouter;
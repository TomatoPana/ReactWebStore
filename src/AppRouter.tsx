import React from "react";
import { Route, Switch } from "react-router";

import HomeComponent      from "./components/HomeComponent";
import LoginComponent     from "./components/LoginComponent";
import NotFoundComponent  from "./components/NotFoundComponent";
import FormComponent      from "./components/FormComponent";
import EnhancedTable from "./components/adminPanel/ProductListComponent";

const AppRouter: React.FC = () => (
  <Switch>
    <Route exact path="/"><HomeComponent /></Route>
    <Route exact path="/login"><LoginComponent/></Route>
    <Route exact path="/charlie"><FormComponent/></Route>
    <Route exact path="/admin"><EnhancedTable/></Route>
    <Route><NotFoundComponent/></Route>
  </Switch>
)

export default AppRouter;
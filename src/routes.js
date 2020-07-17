import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ListUsers from "./pages/ListUsers";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ListUsers} />
        <Route path="/create" component={CreateUser} />
        <Route path="/edit" component={EditUser} />
      </Switch>
    </BrowserRouter>
  );
}

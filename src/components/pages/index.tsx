import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import routes from "../../core/routing";

const BaseRoutes = () => (
  <BrowserRouter>
    <Switch>
      {routes.default.map(({ exact, path, component }, index) => (
        <Route key={index} exact={exact} path={path} component={component} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default BaseRoutes;

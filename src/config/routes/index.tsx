import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import PromoterPage from "../../domains/promoter";

function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/promoter" exact>
          <PromoterPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

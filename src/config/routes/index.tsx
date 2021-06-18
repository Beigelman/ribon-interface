import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import PromoterPage from "../../domains/promoter";
import UserWelcomePage from "../../domains/user/WelcomePage";
import UserCausesPage from "../../domains/user/CausesPage";

function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/promoter" exact>
          <PromoterPage />
        </Route>

        <Route path="/user/welcome" exact>
          <UserWelcomePage />
        </Route>

        <Route path="/user/causes" exact>
          <UserCausesPage />
        </Route>

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

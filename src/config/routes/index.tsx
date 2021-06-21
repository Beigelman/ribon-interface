import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import PromoterPage from "../../domains/promoter";
import IntegrationCouncilPage from "../../domains/integrationCouncil";
import IntegrationPage from "../../domains/integration";
import UserWelcomePage from "../../domains/user/WelcomePage";
import UserCausesPage from "../../domains/user/CausesPage";
import UserWillDonatePage from "../../domains/user/WillDonatePage";
import UserDonationConfirmPage from "../../domains/user/DonationConfirmPage";
import UserDonationDone from "../../domains/user/DonationDonePage";

function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/promoter" exact>
          <PromoterPage />
        </Route>

        <Route path="/integration-council" exact>
          <IntegrationCouncilPage />
        </Route>

        <Route path="/integration" exact>
          <IntegrationPage />
        </Route>

        <Route path="/user/welcome" exact>
          <UserWelcomePage />
        </Route>

        <Route path="/user/causes" exact>
          <UserCausesPage />
        </Route>

        <Route path="/user/will-donate/:id" exact>
          <UserWillDonatePage />
        </Route>

        <Route path="/user/donation-confirm/:id" exact>
          <UserDonationConfirmPage />
        </Route>

        <Route path="/user/donation-done" exact>
          <UserDonationDone />
        </Route>

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

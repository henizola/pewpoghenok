import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithLayout from './components/routeWithLayout/RouteWithLayout';
import MainView from './layout/main/MainView'; //With navbar and footer

import SignIn from './views/SignIn/SignIn';
import SignUp from './views/SignUp/SignUp';
import Currency from './views/Currency/Currency';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        exact
        path="/sign-up"
        component={SignUp}
        layout={MainView}
      />
      <RouteWithLayout
        exact
        path="/sign-in"
        component={SignIn}
        layout={MainView}
      />
      <RouteWithLayout
        exact
        path="/currency-store"
        component={Currency}
        layout={MainView}
      />
    </Switch>
  );
};
export default Routes;

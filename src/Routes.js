import React from "react";
import { Switch } from "react-router-dom";
import RouteWithLayout from "./components/routeWithLayout/RouteWithLayout";
import MainView from "./layout/main/MainView"; //With navbar and footer
import MMinimalView from "./layout/minimal/MinimalView"; //With navbar and footer
import Home from "./views/Home/Home.page";
import Settings from "./views/Settings/Settings.page";

import SignIn from "./views/SignIn/SignIn";
import SignUp from "./views/SignUp/SignUp";
import Currency from "./views/Currency/Currency";
import MinimalView from "./layout/minimal/MinimalView";

const Routes = () => {
	return (
		<Switch>
			<RouteWithLayout exact path='/' component={Home} layout={MinimalView} />
			<RouteWithLayout
				exact
				path='/sign-up'
				component={SignUp}
				layout={MainView}
			/>
			<RouteWithLayout
				exact
				path='/sign-in'
				component={SignIn}
				layout={MainView}
			/>
			<RouteWithLayout
				exact
				path='/setting'
				component={Settings}
				layout={MainView}
			/>
			<RouteWithLayout
				exact
				path='/currency-store'
				component={Currency}
				layout={MainView}
			/>
		</Switch>
	);
};
export default Routes;

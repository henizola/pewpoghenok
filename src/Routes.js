import React from "react";
import { Switch } from "react-router-dom";
import RouteWithLayout from "./components/routeWithLayout/RouteWithLayout";
import MainView from "./layout/main/MainView"; //With navbar and footer
import Home from "./views/Home/Home.page";
import Settings from "./views/Settings/Settings.page";

import MinimalView from "./layout/minimal/MinimalView";
import Currency from "./views/Currency/Currency";
import SignIn from "./views/SignIn/SignIn";
import SignUp from "./views/SignUp/SignUp";

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
				layout={MinimalView}
			/>
			<RouteWithLayout
				exact
				path='/currency-store'
				component={Currency}
				layout={MinimalView}
			/>
		</Switch>
	);
};
export default Routes;

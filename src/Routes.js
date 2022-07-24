import React from "react";
import { Switch } from "react-router-dom";
import RouteWithLayout from "./components/routeWithLayout/RouteWithLayout";
import MainView from "./layout/main/MainView"; //With navbar and footer
import Home from "./views/Home/Home.page";
import Settings from "./views/Settings/Settings.page";

import SignIn from "./views/SignIn/SignIn";
import SignUp from "./views/SignUp/SignUp";

const Routes = () => {
	return (
		<Switch>
			<RouteWithLayout exact path='/' component={Home} layout={MainView} />
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
		</Switch>
	);
};
export default Routes;

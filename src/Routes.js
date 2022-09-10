import React from "react";
import { Redirect, Switch } from "react-router-dom";
import RouteWithLayout from "./components/routeWithLayout/RouteWithLayout";
import MainView from "./layout/main/MainView"; //With navbar and footer
import Home from "./views/Home/Home.page";
import Settings from "./views/Settings/Settings.page";

import MinimalView from "./layout/minimal/MinimalView";
import Currency from "./views/Currency/Currency";
import SignIn from "./views/SignIn/SignIn";
import SignUp from "./views/SignUp/SignUp";
import MatchPage from "./views/match-page/match";
import ForgetPassword from "./views/forgetpassword/forget-password";
const Routes = () => {
	return (
		<Switch>
			<RouteWithLayout exact path='/' component={Home} layout={MinimalView} />
			{/* {!sessionStorage.getItem("token") && <Redirect to='/sign-in' />} */}
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
				path='/forget-password'
				component={ForgetPassword}
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
			<RouteWithLayout
				exact
				path='/match'
				component={MatchPage}
				layout={MinimalView}
			/>
		</Switch>
	);
};
export default Routes;

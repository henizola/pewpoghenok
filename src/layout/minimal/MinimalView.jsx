import React from "react";
import LoggedInNav from "../../components/templates/Logged-in-Nav/LoggedInNavbar";
import MobileNav from "../../components/templates/MobileNav/MobileNav";
import "./MinimalView.css";

const MinimalView = (props) => {
	const { children } = props;

	return (
		<main>
			<LoggedInNav />
			<MobileNav />

			<div className='main_body'>{children}</div>
		</main>
	);
};

export default MinimalView;

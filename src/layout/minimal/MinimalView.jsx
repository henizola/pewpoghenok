import React from "react";
import LoggedInNav from "../../components/templates/Logged-in-Nav/LoggedInNavbar";
import "./MinimalView.css";

const MinimalView = (props) => {
	const { children } = props;

	return (
		<main>
			<LoggedInNav />
			<div className='main_body'>{children}</div>
		</main>
	);
};

export default MinimalView;

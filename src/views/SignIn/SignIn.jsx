import React from "react";
import SignInForm from "../../components/SignIn/SignIn.component";

import { Container } from "./SignIn.styles";

const SignIn = (props) => {
	const sucess = () => {
		props.history.push("/");
	};
	return (
		<Container>
			<h1 className='title'>Welcome Pewpogger!</h1>
			<div className='forms'>
				<SignInForm sucess={sucess} />
			</div>
		</Container>
	);
};

export default SignIn;

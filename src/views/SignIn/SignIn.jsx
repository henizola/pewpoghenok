import React, { Component } from "react";
import SignInForm from "../../components/SignIn/SignIn.component";

import { Container } from "./SignIn.styles";

class SignIn extends Component {
	render() {
		return (
			<Container>
				<h1 className='title'>Welcome Pewpogger!</h1>
				<div className='forms'>
					<SignInForm />
				</div>
			</Container>
		);
	}
}

export default SignIn;

import React, { Component } from "react";
import SignUpOne from "../../components/SignUp1/SignUp1.component";

import { Container } from "./SignUp.styles";

class SignUp extends Component {
	render() {
		return (
			<Container>
				<h1 className='title'>Welcome Pewpogger!</h1>
				<div className='forms'>
					<SignUpOne />
					{/* <SignUpTwo /> */}
				</div>
			</Container>
		);
	}
}

export default SignUp;

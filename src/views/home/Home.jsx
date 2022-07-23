import React, { Component } from "react";
import SignUpOne from "../../components/SignUp1/SignUp1.component";

import SignUpTwo from "../../components/SignUp2/SignUp2.component";

import { Container, CustButton } from "./daric.styles";

class Home extends Component {
	render() {
		return (
			<Container>
				<CustButton className='title'>Welcome Pewpogger!</CustButton>
				<div className='forms'>
					<SignUpOne />
					<SignUpTwo />
				</div>
			</Container>
		);
	}
}

export default Home;

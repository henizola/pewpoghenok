import React, { Component } from "react";
import SignUpOne from "../../components/SignUp1/SignUp1.component";

import SignUpTwo from "../../components/SignUp2/SignUp2.component";
import { Container } from "./Home.styles";

class Home extends Component {
	render() {
		return (
			<Container>
				<h1 className='title'>Welcome Pewpogger!</h1>
				<div className='forms'>
					<SignUpOne />
					<SignUpTwo />
				</div>
			</Container>
		);
	}
}

export default Home;

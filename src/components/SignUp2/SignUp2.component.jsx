import { Container, InputContainer, Button } from "./SignUp2.styles";
import React from "react";
const SignUpTwo = () => {
	return (
		<Container>
			<h4>Signup</h4>
			<p>Already a user? Login</p>
			<InputContainer>
				<p className='input-title'>Date of birth *</p>
				<input type='text' className='input' />
			</InputContainer>
			<InputContainer>
				<p className='input-title'>Riot ID *</p>
				<input type='text' className='input' />
			</InputContainer>
			<InputContainer></InputContainer>
			<InputContainer></InputContainer>

			<p style={{ marginTop: "180px" }}>Step 1 of 2</p>
			<Button>Sign up</Button>
		</Container>
	);
};

export default SignUpTwo;

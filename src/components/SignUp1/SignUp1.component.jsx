import { Container, InputContainer, Button } from "./SignUp1";
import React from "react";
const SignUpOne = () => {
	return (
		<Container>
			<h4>Signup</h4>
			<p>Already a user? Login</p>
			<InputContainer>
				<p className='input-title'>Email *</p>
				<input type='text' className='input' />
			</InputContainer>
			<InputContainer>
				<p className='input-title'>Username *</p>
				<input type='text' className='input' />
			</InputContainer>
			<InputContainer>
				<p className='input-title'>Password *</p>
				<input type='text' className='input' />
			</InputContainer>
			<InputContainer>
				<p className='input-title'>Confirm Password *</p>
				<input type='text' className='input' />
			</InputContainer>
			<p style={{ marginTop: "20px" }}>Step 1 of 2</p>
			<Button>Sign up</Button>
		</Container>
	);
};

export default SignUpOne;

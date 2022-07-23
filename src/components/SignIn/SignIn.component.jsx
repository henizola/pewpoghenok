import { Container, InputContainer, Button } from "./SignIn";
import React from "react";
const SignInForm = () => {
	return (
		<Container>
			<h4>Login</h4>
			<p className='sub-title'>New user? Create an account</p>
			<InputContainer>
				<p className='input-title'>Username</p>
				<input type='text' className='input' />
			</InputContainer>
			<InputContainer>
				<p className='input-title'>Password</p>
				<input type='text' className='input' />
			</InputContainer>

			<p
				style={{
					margin: "20px 0",
					textAlign: "left",
					textDecoration: "underline",
				}}
			>
				Forgot password
			</p>
			<Button>Login</Button>
		</Container>
	);
};

export default SignInForm;

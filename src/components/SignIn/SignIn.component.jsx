import { Container, InputContainer, Button } from "./SignIn";
import React from "react";
import { Link } from "react-router-dom";
const SignInForm = () => {
	return (
		<Container>
			<h4>Login</h4>
			<p className='sub-title'>
				New user ?{" "}
				<Link to='sign-up' className='red'>
					Create an account
				</Link>
			</p>
			<div className='top'>
				<div>
					<InputContainer>
						<p className='input-title'>Username</p>
						<input type='text' className='input' />
					</InputContainer>
					<InputContainer>
						<p className='input-title'>Password</p>
						<input type='text' className='input' />
					</InputContainer>

					<p className='red' style={{ marginTop: "10px", cursor: "pointer" }}>
						Forgot password
					</p>
				</div>
				<div>
					<Button>Login</Button>
				</div>
			</div>
		</Container>
	);
};

export default SignInForm;

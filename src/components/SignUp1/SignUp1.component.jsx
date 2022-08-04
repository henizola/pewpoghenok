import { Container, InputContainer, Button } from "./SignUp1";
import React from "react";
import { Link } from "react-router-dom";
const SignUpOne = ({ setStep }) => {
	return (
		<Container>
			<h4>Signup</h4>
			<p className='sub-title'>
				Already a user ?{" "}
				<Link to='sign-in' className='red'>
					Login
				</Link>
			</p>
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
			<Button style={{ marginTop: "31px" }} onClick={() => setStep(1)}>
				Next
			</Button>
			<p style={{ marginTop: "20px" }}>Step 1 of 2</p>
		</Container>
	);
};

export default SignUpOne;

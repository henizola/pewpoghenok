import React, { useState } from "react";
import SignUpOne from "../../components/SignUp1/SignUp1.component";
import SignUpTwo from "../../components/SignUp2/SignUp2.component";

import { Container } from "./SignUp.styles";

const SignUp = () => {
	const [step, setStep] = useState(0);
	return (
		<Container>
			<h1 className='title'>Welcome Pewpogger!</h1>
			<div className='forms'>
				{step === 0 ? <SignUpOne setStep={setStep} /> : <SignUpTwo />}
			</div>
		</Container>
	);
};

export default SignUp;

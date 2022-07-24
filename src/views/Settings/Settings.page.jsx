import React, { useState } from "react";
import Stepper from "../../components/stepper/Steper.component";
import { Container } from "./Settings.styles";

const Settings = () => {
	const [currentStep, setCurrentStep] = useState(0);

	const setStep = (step) => {
		setCurrentStep(step);
	};

	return (
		<Container>
			<Stepper currentStep={currentStep} setStep={setStep}>
				<h1>Henok</h1>
			</Stepper>
		</Container>
	);
};

export default Settings;

import React, { useState } from "react";
import LeagueofLegends from "../../components/Games/LeagueofLegends";
import TeamFightTacticsMatches from "../../components/Games/TeamFightTacticsMatches";
import LegendsofRuneterraMatches from "../../components/Games/TeamFightTacticsMatches copy";
import Valorant from "../../components/Games/valorant.component";
import HorizontalStepper from "../../components/horizontal-stepper/horizontalStepper.component";
import { Container } from "./Home.styles";
const Home = () => {
	const [currentStep, setCurrentStep] = useState(0);

	return (
		<Container>
			<HorizontalStepper currentStep={currentStep} setStep={setCurrentStep}>
				<Valorant />
				<LeagueofLegends />
				<TeamFightTacticsMatches />

				<LegendsofRuneterraMatches />
			</HorizontalStepper>
		</Container>
	);
};

export default Home;

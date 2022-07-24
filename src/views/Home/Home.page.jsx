import { Container, Matches, FilterButtonsContainer } from "./Home.styles";
import React, { useState } from "react";
import heroImage from "../../assets/home-hero.png";
import Match from "../../components/Match/Match.component";
import JoinMatch from "../../components/JoinMatch/JoinMatch.component";
const Home = () => {
	const [selected, setSelected] = useState("public");
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Container>
			<div id='scroll-container'>
				<p className='header' id='scroll-text'>
					<span className='red'>Valorant </span>
					League of Legends Team Fight Tactics Legends of Runeterra
				</p>
			</div>
			<img src={heroImage} alt='homeHero' className='hero' />
			<Matches>
				<div className='match-head'>
					<p className='title'>Valorant Matches</p>
					<p className='filter'>Filter by:</p>
					<FilterButtonsContainer>
						<button
							className={selected === "public" && "selected"}
							onClick={() => setSelected("public")}
						>
							Public
						</button>
						<button
							className={selected === "private" && "selected"}
							onClick={() => setSelected("private")}
						>
							Private
						</button>
					</FilterButtonsContainer>
				</div>
				<div className='match-list'>
					<Match handleOpen={handleOpen} />
					<Match handleOpen={handleOpen} />
					<Match handleOpen={handleOpen} />
				</div>
			</Matches>
			<JoinMatch open={open} onClose={handleClose} />
		</Container>
	);
};

export default Home;

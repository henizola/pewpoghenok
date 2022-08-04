import { useState } from "react";
import { Container, FilterButtonsContainer, Matches } from "./games.styles";
import Match from "../../components/Match/Match.component";

import React from "react";
import heroImage from "../../assets/hero1.png";
import JoinMatch from "../../components/JoinMatch/JoinMatch.component";

const Valorant = () => {
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
					<Match handleOpen={handleOpen} />
					<Match handleOpen={handleOpen} />
					<Match handleOpen={handleOpen} />
				</div>
			</Matches>
			<JoinMatch open={open} onClose={handleClose} />
		</Container>
	);
};

export default Valorant;

import { Container } from "./Match.styles";
import React from "react";
import avatar from "../../assets/person.png";
const Match = () => {
	return (
		<Container>
			<div className='space'>
				<p className='date'>07.01.22</p>
				<p className='bold'>Loot: 3,000 pogs</p>
			</div>
			<div className='space'>
				<p className='date'></p>
				<p className='bold'>Pledge: 100 pogs</p>
			</div>
			<p>
				Tournament name. User defined. <br />
				Max 45 characters.
			</p>
			<div className='space'>
				<div className='user'>
					<img src={avatar} alt='' className='avatar' />
					<p>Username</p>
				</div>
				<button className='red'>Join</button>
			</div>
		</Container>
	);
};

export default Match;

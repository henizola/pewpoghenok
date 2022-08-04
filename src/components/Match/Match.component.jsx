import { Container } from "./Match.styles";
import React from "react";
import avatar from "../../assets/person.png";
import { Link } from "react-router-dom";
const Match = ({ handleOpen }) => {
	return (
		<Container>
			<div className='space'>
				<p className='date'>07.01.22</p>
				<p className='bold'>Loot: 3,000 pogs</p>
			</div>
			<div className='space'>
				<p className='date'></p>
			</div>
			<Link to='/match' className='name'>
				Tournament name. User defined. <br />
				Max 45 characters.
			</Link>
			<p className='bold'>Pledge: 100 pogs</p>
			<div className='space'>
				<button className='red' onClick={handleOpen}>
					Join
				</button>
				<div className='user'>
					<img src={avatar} alt='' className='avatar' />
					<p>Username</p>
				</div>
			</div>
		</Container>
	);
};

export default Match;

import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import ModalContainer from "../Modal/Modal.component";
import { Button, Container, InputContainer } from "./JoinMatch.styles";

const JoinMatch = ({ open, setOpen, onClose }) => {
	const handleOpen = () => {
		setOpen(true);
	};
	return (
		<ModalContainer open={open} handleOpen={handleOpen} handleClose={onClose}>
			<Container>
				<div>
					<h4 className='title'>Join Team Match</h4>
					<p className='sub-title'>Add your team members</p>
					<p className='sub-title'>0 of 5</p>
					<InputContainer>
						<input
							type='text'
							className='input'
							placeholder='Add your team members…'
						/>
						<BiSearchAlt2 className='icon' />
					</InputContainer>
				</div>

				<div>
					<Button onClick={onClose}>Submit</Button>
				</div>
			</Container>
		</ModalContainer>
	);
};

export default JoinMatch;

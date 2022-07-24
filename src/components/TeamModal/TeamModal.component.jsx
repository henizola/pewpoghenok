import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import ModalContainer from "../Modal/Modal.component";
import { Button, Container, InputContainer } from "./TeamModal.styles";

const TeamModal = ({ open, setOpen, onClose }) => {
	const handleOpen = () => {
		setOpen(true);
	};

	const [info, setInfo] = useState(false);
	return (
		<ModalContainer open={open} handleOpen={handleOpen} handleClose={onClose}>
			<Container>
				<h4 className='title'>Ola</h4>
				<p className='sub-title'>
					Fill out the form to create a new solo match.
				</p>
				<InputContainer>
					<p className='input-title'>Match name *</p>
					<input type='text' className='input' />
				</InputContainer>
				<InputContainer>
					<p className='input-title'>Game *</p>
					<select className='input'>
						<option>Select</option>
					</select>
				</InputContainer>
				<InputContainer>
					<p className='input-title'>Match date *</p>
					<input type='date' className='input' />
				</InputContainer>
				<InputContainer>
					<p className='input-title info'>
						Loot amount * <FaInfoCircle onClick={() => setInfo(!info)} />
						{info && (
							<div className='menu'>
								<p>
									Pool in Money per team from P0 to P2000. Winnings split
									evenly.
								</p>
							</div>
						)}
					</p>
					<select className='input select'>
						<option>Select</option>
					</select>
				</InputContainer>
				<InputContainer>
					<p className='input-title'>Match Details </p>
					<textarea
						name=''
						className='input'
						id=''
						cols='30'
						rows='20'
						style={{ minHeight: "70px" }}
					></textarea>
				</InputContainer>

				<Button onClick={onClose}>Submit</Button>
			</Container>
		</ModalContainer>
	);
};

export default TeamModal;

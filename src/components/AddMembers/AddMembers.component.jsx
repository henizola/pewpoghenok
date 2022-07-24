import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import ModalContainer from "../Modal/Modal.component";
import { Button, Container, InputContainer } from "./AddMembers.styles";

const AddMembers = ({ open, setOpen, onClose }) => {
	const handleOpen = () => {
		setOpen(true);
	};
	return (
		<ModalContainer open={open} handleOpen={handleOpen} handleClose={onClose}>
			<Container>
				<div>
					<h4 className='title'>Create Team Match</h4>
					<p className='sub-title'>
						Fill out the form to create a new team match.
					</p>
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
					<p style={{ marginTop: "10px" }}>Step 2 of 2</p>
				</div>
			</Container>
		</ModalContainer>
	);
};

export default AddMembers;

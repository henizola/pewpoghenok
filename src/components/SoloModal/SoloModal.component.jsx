import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import ModalContainer from "../Modal/Modal.component";
import { Button, Container, InputContainer } from "./SoloModal.styles";

const style = {
	position: "absolute",
	top: "55%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "425px",
	outline: "none",
	padding: "39px 49px",
	background: "#FFFFFF 0% 0% no-repeat padding-box",
	boxShadow: " 0px 3px 10px #0000001F",
	borderRadius: "15px",
};

const SoloModal = ({ open, setOpen, onClose }) => {
	const handleOpen = () => {
		setOpen(true);
	};

	const [info, setInfo] = useState(false);
	return (
		<div>
			<Modal
				open={open}
				onClose={onClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<ModalContainer
						open={open}
						handleOpen={handleOpen}
						handleClose={onClose}
					>
						<Container>
							<h4 className='title'>Create Solo Match</h4>
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
				</Box>
			</Modal>
		</div>
	);
};

export default SoloModal;

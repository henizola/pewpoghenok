import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Button, Container } from "./SoloModal.styles";
import placeHolder from "../../assets/1.png";

const style = {
	position: "absolute",
	top: "55%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "368px",
	outline: "none",
	padding: "32px 24px",
	background: "#FFFFFF 0% 0% no-repeat padding-box",
	boxShadow: " 0px 3px 10px #0000001F",
	borderRadius: "15px",
};
const AvatarModal = ({ open, setOpen, onClose }) => {
	return (
		<Modal
			open={open}
			onClose={onClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={style}>
				<Container>
					<div className='colu'>
						<div>
							<h4 className='title'>Change Avatar</h4>

							<button className='close' onClick={onClose}>
								X
							</button>

							<input
								type='file'
								className='input__second'
								style={{ marginTop: "30px" }}
							/>
						</div>
						<img src={placeHolder} alt='' />
						<div>
							<Button onClick={onClose}>Save</Button>
						</div>
					</div>
				</Container>
			</Box>
		</Modal>
	);
};

export default AvatarModal;
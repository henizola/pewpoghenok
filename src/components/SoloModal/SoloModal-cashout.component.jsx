import React from "react";
import { BsForwardFill } from "react-icons/bs";
import ModalContainer from "../Modal/Modal.component";
import { Button, Container, InputContainer } from "./SoloModal.styles";

const CashOut = ({ open, setOpen, onClose }) => {
	const handleOpen = () => {
		setOpen(true);
	};
	return (
		<ModalContainer open={open} handleOpen={handleOpen} onClose={onClose}>
			<Container>
				<div className='colu'>
					<div>
						<h4 className='title'>Cash out</h4>
						<p className='sub-title' style={{ textAlign: "left" }}>
							Wallet: 5000 pogs
						</p>
						<button className='close' onClick={onClose}>
							X
						</button>
						<InputContainer>
							<p className='input-title'>Enter amount*</p>{" "}
							<div className='short-field-container'>
								<input type='text' className='input' />{" "}
								<span>
									<BsForwardFill />
								</span>
								<input type='text' className='input' disabled />
							</div>
						</InputContainer>
						<InputContainer>
							<p className='input-title'>Send to account*</p>
							<select className='input'>
								<option>Select</option>
							</select>
						</InputContainer>
					</div>

					<div>
						<Button onClick={onClose}>Submit</Button>
					</div>
				</div>
			</Container>
		</ModalContainer>
	);
};

export default CashOut;

// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import React, { useState } from "react";
// import { BsForwardFill } from "react-icons/bs";
// import ModalContainer from "../Modal/Modal.component";
// import { Button, Container, InputContainer } from "./SoloModal.styles";
// import { IoArrowForward } from "react-icons/io5";
// const style = {
// 	position: "absolute",
// 	top: "55%",
// 	left: "50%",
// 	transform: "translate(-50%, -50%)",
// 	width: "425px",
// 	outline: "none",
// 	padding: "39px 49px",
// 	background: "#FFFFFF 0% 0% no-repeat padding-box",
// 	boxShadow: " 0px 3px 10px #0000001F",
// 	borderRadius: "15px",
// };

// const SoloModalCashOut = ({ open, setOpen, onClose }) => {
// 	const handleOpen = () => {
// 		setOpen(true);
// 	};

// 	const [info, setInfo] = useState(false);
// 	return (
// 		<div>
// 			<Modal
// 				open={open}
// 				onClose={onClose}
// 				aria-labelledby='modal-modal-title'
// 				aria-describedby='modal-modal-description'
// 			>
// 				<Box sx={style}>
// 					<ModalContainer
// 						open={open}
// 						handleOpen={handleOpen}
// 						handleClose={onClose}
// 					>
// 						<Container>
// 							<h4 className='title'>Cash out</h4>
// 							 <p className="wallet">Wallet: 5000 pogs</p>
// 							<InputContainer>
// 								<p className='input-title'>Enter amount*</p>
// 							<div className="short-field-container">
// 								<input type='text' className='input' />
// 								 <span><BsForwardFill/></span>
// 								<input type='text' className='input' disabled />
// 							</div>

// 							</InputContainer>
// 							<InputContainer>
// 								<p className='input-title'>Send to account*</p>
// 								<select className='input'>
// 									<option>Select</option>
// 								</select>
// 							</InputContainer>

// 							<Button onClick={onClose}>Submit</Button>
// 						</Container>
// 					</ModalContainer>
// 				</Box>
// 			</Modal>
// 		</div>
// 	);
// };

// export default SoloModalCashOut;

// <Container>
// 							<h4 className='title'>Cash out</h4>
// 							 <p className="wallet">Wallet: 5000 pogs</p>
// 							<InputContainer>
// 								<p className='input-title'>Enter amount*</p>
// 							<div className="short-field-container">
// 								<input type='text' className='input' />
// 								 <span><BsForwardFill/></span>
// 								<input type='text' className='input' disabled />
// 							</div>

// 							</InputContainer>
// 							<InputContainer>
// 								<p className='input-title'>Send to account*</p>
// 								<select className='input'>
// 									<option>Select</option>
// 								</select>
// 							</InputContainer>

// 							<Button onClick={onClose}>Submit</Button>
// 						</Container>

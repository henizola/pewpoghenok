import React, { useState } from "react";
import placeHolder from "../../../assets/1.png";
import AvatarModal from "../../../components/GeneralModals/Avatar.modal";
import DOBModal from "../../../components/GeneralModals/DOB.modal";
import EmailModal from "../../../components/GeneralModals/Email.modal";
import PasswordModal from "../../../components/GeneralModals/Password.modal";
import UserNameModal from "../../../components/GeneralModals/Username.modal";
const General = () => {
	const [avatar, setAvatar] = useState(false);
	const [name, setName] = useState(false);
	const [email, setEmail] = useState(false);
	const [password, setPassword] = useState(false);
	const [dateOfBirth, setDateOfBirth] = useState(false);
	const openMail = () => {
		setEmail(true);
		setName(false);
		setAvatar(false);
		setPassword(false);
		setDateOfBirth(false);
	};
	const openAvatar = () => {
		setEmail(false);
		setName(false);
		setAvatar(true);
		setPassword(false);
		setDateOfBirth(false);
	};
	const openUserName = () => {
		setEmail(false);
		setName(true);
		setAvatar(false);
		setPassword(false);
		setDateOfBirth(false);
	};
	const openPassword = () => {
		setEmail(false);
		setName(false);
		setAvatar(false);
		setPassword(true);
		setDateOfBirth(false);
	};
	const openDateOfBirth = () => {
		setEmail(false);
		setName(false);
		setAvatar(false);
		setPassword(false);
		setDateOfBirth(true);
	};
	const onClose = () => {
		setEmail(false);
		setName(false);
		setAvatar(false);
		setPassword(false);
		setDateOfBirth(false);
	};

	return (
		<>
			<AvatarModal open={avatar} setOpen={openAvatar} onClose={onClose} />
			<UserNameModal open={name} setOpen={openUserName} onClose={onClose} />
			<EmailModal open={email} setOpen={openMail} onClose={onClose} />
			<PasswordModal open={password} setOpen={openPassword} onClose={onClose} />
			<DOBModal
				open={dateOfBirth}
				setOpen={openDateOfBirth}
				onClose={onClose}
			/>
			<h1>General</h1>
			<div className='flex' style={{ display: "flex" }}>
				<div className='profile-container'>
					<div className='general-icon'>
						<img src={placeHolder} alt='' className='profile-image' />
					</div>
				</div>
				<span
					className='edit__link'
					style={{ marginTop: "50px", marginLeft: "50px" }}
					onClick={openAvatar}
				>
					Edit
				</span>
			</div>

			<div className='row-user'>
				<span className='field-name'>Username</span>
				<span className='field-value'>Sniperkid123</span>
				<span className='edit-link' onClick={openUserName}>
					Edit
				</span>
			</div>
			<div className='row-user'>
				<span className='field-name'>Email</span>
				<span className='field-value'>Sniperkid123@email.com</span>
				<span className='edit-link' onClick={openMail}>
					Edit
				</span>
			</div>
			<div className='row-user'>
				<span className='field-name'>Password</span>
				<span className='field-value'>*************</span>
				<span className='edit-link' onClick={openPassword}>
					Edit
				</span>
			</div>
			<div className='row-user'>
				<span className='field-name'>DOB</span>
				<span className='field-value'>January 12 2002</span>
				<span className='edit-link' onClick={openDateOfBirth}>
					Edit
				</span>
			</div>
		</>
	);
};
export default General;

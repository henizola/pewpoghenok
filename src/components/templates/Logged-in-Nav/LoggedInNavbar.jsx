import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { BiSearchAlt2, BiLogOut } from "react-icons/bi";
import { BsFillGearFill } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import TeamModalOne from "../../../components/TeamModal/TeamModalOne.component";
import AddMembers from "../../AddMembers/AddMembers.component.jsx";
import SoloModal from "../../SoloModal/SoloModal.component.jsx";
import { Container } from "./LoggedInNavbar.styles.jsx";

import avatar from "../../../assets/avatar1.png";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	background: "#F0F0F0",
	borderRadius: "8px",
	height: "31px",
	maxWidth: "376px!important",
	padding: "5px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	fontSize: "22px",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	right: "20px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	fontSize: "22px",
	width: "100%",
	"& .MuiInputBase-input": {
		padding: "0",
		fontSize: "14px",
		paddingLeft: "10px",
		transition: theme.transitions.create("width"),
		width: "100%",
	},
}));

const LoggedInNav = (props) => {
	const [open, setOpen] = useState(false);
	const [solo, setSolo] = useState(false);
	const [team, setTeam] = useState(false);
	const [addMembers, setAddMembers] = useState(false);
	const openSolo = () => {
		setSolo(true);
		setTeam(false);
		setAddMembers(false);
	};
	const openMembers = () => {
		setSolo(false);
		setTeam(false);
		setAddMembers(true);
	};
	const openTeam = () => {
		setTeam(true);
		setSolo(false);
		setAddMembers(false);
	};
	const onClose = () => {
		setTeam(false);
		setSolo(false);
		setAddMembers(false);
	};
	const onNext = () => {
		setTeam(false);
		setSolo(false);
		setAddMembers(true);
	};
	return (
		<Container>
			<Link to='/'>
				<h1>PEWPOG</h1>
			</Link>
			<Search>
				<SearchIconWrapper>
					<BiSearchAlt2 />
				</SearchIconWrapper>
				<StyledInputBase
					placeholder='Search…'
					inputProps={{ "aria-label": "search" }}
				/>
			</Search>
			<div className='right'>
				<button className='red-link' onClick={openSolo}>
					Solo Match
				</button>
				<button className='red-link' onClick={openTeam}>
					Team Match
				</button>
				<p className='info'>
					<p>2,123 pogs</p>
				</p>
				{open && (
					<div className='menu'>
						<Link
							to='/currency-store'
							onClick={() => {
								setOpen(!open);
							}}
						>
							<FaCoins style={{ marginRight: "10px" }} /> Buy pogs
						</Link>
						<Link
							to='/setting'
							onClick={() => {
								setOpen(!open);
							}}
						>
							<BsFillGearFill style={{ marginRight: "10px" }} /> Account
							settings
						</Link>
						<Link
							to='/sign-in'
							onClick={() => {
								sessionStorage.removeItem("uid");
								sessionStorage.removeItem("token");
								sessionStorage.removeItem("refresh");
							}}
						>
							<BiLogOut style={{ marginRight: "10px" }} /> Logout
						</Link>
					</div>
				)}
			</div>
			<button className='person' onClick={() => setOpen(!open)}>
				<img src={avatar} alt='avatar' />
			</button>
			<SoloModal open={solo} setOpen={openSolo} onClose={onClose} />
			<TeamModalOne
				open={team}
				setOpen={openTeam}
				onClose={onClose}
				onNext={onNext}
			/>
			<AddMembers open={addMembers} setOpen={openMembers} onClose={onClose} />
		</Container>
	);
};
export default LoggedInNav;

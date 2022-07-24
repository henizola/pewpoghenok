import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillGearFill, BsFillPersonPlusFill } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { Link } from "react-router-dom";
import SoloModal from "../../SoloModal/SoloModal.component.jsx";
import TeamModal from "../../TeamModal/TeamModal.component.jsx";
import { Container } from "./LoggedInNavbar.styles.jsx";
const Search = styled("div")(({ theme }) => ({
	position: "relative",
	background: "#F0F0F0",
	borderRadius: "10px",
	height: "40px",
	maxWidth: "393px!important",
	padding: "10px",
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
	const openSolo = () => {
		setSolo(true);
		setTeam(false);
	};
	const openTeam = () => {
		setTeam(true);
		setSolo(false);
	};
	const onClose = () => {
		setTeam(false);
		setSolo(false);
	};
	return (
		<Container>
			<Link to='/'>
				<h1>Logo</h1>
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
				<button className='outline-red' onClick={openSolo}>
					Solo Match
					<BsFillPersonPlusFill
						style={{ fontSize: "23px", marginLeft: "7px" }}
					/>
				</button>
				<button className='fill-red' onClick={openTeam}>
					Team Match{" "}
					<MdGroups style={{ fontSize: "32px", marginLeft: "7px" }} />
				</button>
				<div className='info'>
					<p>sniperkid123</p>
					<p>2,000,123 pogs</p>
				</div>
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
					</div>
				)}
			</div>
			<button className='person' onClick={() => setOpen(!open)}>
				<IoPersonCircleSharp />
			</button>
			<SoloModal open={solo} setOpen={openSolo} onClose={onClose} />
			<TeamModal open={team} setOpen={openTeam} onClose={onClose} />
		</Container>
	);
};
export default LoggedInNav;

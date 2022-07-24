import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsFillPersonPlusFill, BsFillGearFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { Container } from "./LoggedInNavbar.styles.jsx";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaCoins } from "react-icons/fa";
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
	const [open, setOpen] = useState(true);

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
				<Link to='/sign-in' className='outline-red'>
					Solo Match{" "}
					<BsFillPersonPlusFill
						style={{ fontSize: "23px", marginLeft: "7px" }}
					/>
				</Link>
				<Link to='/sign-up' className='fill-red'>
					Team Match{" "}
					<MdGroups style={{ fontSize: "32px", marginLeft: "7px" }} />
				</Link>
				<div className='info'>
					<p>sniperkid123</p>
					<p>2,000,123 pogs</p>
				</div>
				{open && (
					<div className='menu'>
						<button
							onClick={() => {
								setOpen(!open);
							}}
						>
							<FaCoins style={{ marginRight: "10px" }} /> Buy pogs
						</button>
						<button
							onClick={() => {
								setOpen(!open);
							}}
						>
							<BsFillGearFill style={{ marginRight: "10px" }} /> Account
							settings
						</button>
					</div>
				)}
			</div>
			<button className='person' onClick={() => setOpen(!open)}>
				<IoPersonCircleSharp />
			</button>
		</Container>
	);
};
export default LoggedInNav;

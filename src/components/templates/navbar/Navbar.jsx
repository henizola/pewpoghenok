import { styled, alpha } from "@mui/material/styles";
import { BiSearchAlt2 } from "react-icons/bi";
import { InputBase } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./NavbarStyle";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	background: "#F0F0F0",
	borderRadius: "10px",
	height: "40px",
	maxWidth: "400px!important",
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

const Navbar = () => {
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
					Log In
				</Link>
				<Link to='/sign-up' className='fill-red'>
					Sign up
				</Link>
			</div>
		</Container>
	);
};
export default Navbar;

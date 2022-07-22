import styled from "styled-components";
export const Container = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	display: grid;
	grid-template-columns: 150px 1fr 330px;
	padding: 25px 100px;
	height: 100px;
	width: 100vw;

	h1 {
		color: black;
	}
	.right {
		display: grid;
		grid-template-columns: 140px 140px;
		grid-gap: 50px;
	}
	.outline-red {
		width: 100%;
		height: 40px;
		border: 1px solid #d44244;
		text-align: center;
		padding-top: 6px;
		color: #d44244;
		font-size: 17px;
		font-weight: bold;
		border-radius: 10px;
	}
	.fill-red {
		width: 100%;
		height: 40px;
		background-color: #d44244;
		text-align: center;
		color: #fff;
		border-radius: 10px;
		padding-top: 8px;
		font-weight: bold;
	}
`;

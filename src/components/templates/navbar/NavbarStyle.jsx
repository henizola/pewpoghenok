import styled from "styled-components";
export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	display: grid;
	grid-template-columns: 150px 1fr 330px;
	padding: 25px 140px;
	height: 100px;
	width: 100vw;
	background-color: #fff;
	z-index: 999999999999999999999999999999999999999999999999;
	background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px #00000029;
	opacity: 1;
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
	@media screen and (max-width: 600px) {
		height: fit-content;
		max-height: 15vh;
		padding: 10px;
		grid-template-columns: 100px 1fr;
		max-width: 100vw;

		.right {
			display: flex;
			justify-content: space-between;
			width: 95vw;
			margin-top: 15px;
		}
	}
`;

import styled from "styled-components";
import background from "../../assets/background.png";
export const Container = styled.div`
	width: 100vw;
	min-height: calc(100vh - 100px);
	background-image: url(${background});
	background-size: 100vw calc(100vh - 100px);
	padding: 30px 0;

	.title {
		width: 100%;
		text-align: center;
		color: #fff;
		font-size: 4vw;
		font-weight: medium;
	}
	.forms {
		margin-left: 40%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 25px;
		width: fit-content;
		height: 57vh;

		margin-top: 30px;
	}
`;

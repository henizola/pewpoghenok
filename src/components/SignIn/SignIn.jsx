import styled from "styled-components";

export const Container = styled.div`
	width: 425px;
	height: 100%;
	background-color: #ffffff;
	border-radius: 10px;
	padding: 38px 50px;
	text-align: center;

	.red {
		color: #d44244;
	}
	.input {
		width: 100%;
		border: none;
		background-color: #f0f0f0;
		height: 40px;
		border-radius: 10px;
		padding-left: 10px;
		&:focus {
			outline: none;
		}
	}
	.input-title {
		margin-bottom: 2px;
	}
	.sub-title {
		font-size: 16px;
	}
	@media screen and (max-width: 600px) {
		max-width: 90vw;
	}
`;

export const InputContainer = styled.div`
	width: 100%;
	height: fit-content;
	margin-top: 15px;
	text-align: left;
`;

export const Button = styled.div`
	width: 100%;
	height: 40px;
	background-color: #d44244;
	text-align: center;
	color: #fff;
	border-radius: 10px;
	padding-top: 8px;
	font-weight: bold;
`;

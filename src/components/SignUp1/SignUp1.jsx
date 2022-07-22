import styled from "styled-components";

export const Container = styled.div`
	width: 24vw;
	height: 100%;
	background-color: #ffffff;
	border-radius: 10px;
	padding: 40px;
	text-align: center;
	.input {
		width: 100%;
		border: none;
		background-color: #f0f0f0;
		height: 35px;
		border-radius: 10px;
	}
	.input-title {
		margin-bottom: 2px;
	}
`;

export const InputContainer = styled.div`
	width: 100%;
	height: fit-content;
	margin-top: 20px;
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

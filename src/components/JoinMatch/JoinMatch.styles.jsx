import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 60vh;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 368px;

	text-align: center;
	.close {
		position: absolute;
		top: 0;
		right: -20px;
		color: #fff;
	}
	@media screen and(max-width:600px) {
		.close {
			right: 20px;
			color: black;
			z-index: 999999999999;
		}
	}
	.title {
		text-align: center;
		font: normal normal normal 23px/34px Poppins;
		letter-spacing: 0px;
		color: #000000;
	}
	.sub-title {
		text-align: center;
		font: normal normal normal 16px/22px Source Sans Pro;
		letter-spacing: 0.01px;
		color: #000000;
	}
	.input {
		width: 320px;
		height: 32px;
		border: none;
		background-color: #f0f0f0;
		border-radius: 8px;
		padding-left: 10px;
		padding-right: 20px;
		color: #0000008d;

		&:focus {
			outline: none;
		}
	}
	.user {
		display: grid;
		grid-template-columns: 20px 1fr 1fr;
		margin-top: 24px;
		background: #f4f4f5 0% 0% no-repeat padding-box;
		box-shadow: 0px 1px 1px #00000029;
		border-radius: 8px;
		padding: 10px 14px;
		padding-bottom: 0;
	}
	.remove {
		cursor: pointer;
		text-align: right;
	}
	.select:after {
		color: red !important;
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
	.info {
		position: relative;
	}
	.menu {
		position: absolute;
		top: 0;
		padding: 10px;
		right: 0px;
		background: #ffffff 0% 0% no-repeat padding-box;
		box-shadow: 0px 3px 10px #00000029;
		border-radius: 10px;
		width: 200px;
		height: 72px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	p {
		font-size: 14px;
	}
	.information {
		text-align: left;
		text-decoration: underline;
		font: normal normal bold 17px/24px Source Sans Pro;
		letter-spacing: 0.02px;
		color: #2865b3;
	}
`;

export const InputContainer = styled.div`
	width: 100%;
	height: fit-content;
	margin-top: 15px;
	text-align: left;
	position: relative;
	color: ${(props) =>
		props.error === "invalid"
			? " #DC2626!important"
			: props.error === "valid"
			? " #4F8CE3"
			: "none"};
	.input {
		width: 100%;
		height: 32px;
		background: #f4f4f5 0% 0% no-repeat padding-box;
		border-radius: 5px;
		border: ${(props) =>
			props.error === "invalid"
				? "1px solid #DC2626!important"
				: props.error === "valid"
				? "1px solid #4F8CE3"
				: "none"};

		padding: 5px;
		&:focus {
			outline: none;
		}
	}
	.warning {
		display: ${(props) => (props.error === "invalid" ? "block" : "none")};
	}
	.icon {
		position: absolute;
		right: 10px;
		top: 5px;
		font-size: 25px;
	}
`;

export const Button = styled.div`
	width: 320px;
	height: 31px;
	background: #2865b3 0% 0% no-repeat padding-box;
	border-radius: 8px;
	border: none;
	color: #fff;
	padding-top: 4px;
	margin: 0 auto;
	margin-top: 28px;
	cursor: pointer;
	font: normal normal bold 14px/21px Poppins;
	letter-spacing: 0.02px;
	background: #f2f2f3 0% 0% no-repeat padding-box;
	border-radius: 8px;
	text-align: center;
	font: normal normal bold 14px/21px Poppins;
	letter-spacing: 0.02px;
	color: #a1a1aa;
	opacity: 1;
`;

import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 60vh;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.title {
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-normal) var(--unnamed-font-size-23) /
			var(--unnamed-line-spacing-34) var(--unnamed-font-family-poppins);
		letter-spacing: var(--unnamed-character-spacing-0);
		color: var(--unnamed-color-000000);
		text-align: center;
		font: normal normal normal 23px/34px Poppins;
		letter-spacing: 0px;
		color: #000000;
	}
	.sub-title {
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
			var(--unnamed-line-spacing-22) var(--unnamed-font-family-source-sans-pro);
		letter-spacing: var(--unnamed-character-spacing-0-01);
		color: var(--unnamed-color-000000);
		text-align: center;
		font: normal normal normal 16px/22px Source Sans Pro;
		letter-spacing: 0.01px;
		color: #000000;
	}
	.input {
		width: 100%;
		border: none;
		background-color: #f0f0f0;
		height: 40px;
		border-radius: 10px;
		padding-left: 10px;
		padding-right: 20px;
		color: #0000008d;

		&:focus {
			outline: none;
		}
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
		background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
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
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-bold) var(--unnamed-font-size-17) / 24px
			var(--unnamed-font-family-source-sans-pro);
		letter-spacing: var(--unnamed-character-spacing-0-02);
		color: var(--unnamed-color-2865b3);
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
	.icon {
		position: absolute;
		right: 10px;
		top: 10px;
		font-size: 25px;
	}
`;

export const Button = styled.div`
	width: 140px;
	height: 40px;
	background: var(--unnamed-color-2865b3) 0% 0% no-repeat padding-box;
	background: #2865b3 0% 0% no-repeat padding-box;
	border-radius: 15px;
	border: none;
	color: #fff;
	padding-top: 8px;
	margin: 0 auto;
	margin-top: 28px;
	cursor: pointer;
`;
import styled from "styled-components";
export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	display: grid;
	grid-template-columns: 150px 393px 1fr 50px;
	padding: 12px 140px;
	height: 56px;
	width: 100vw;
	background-color: #fff;
	z-index: 999999999999999999999999999999999999999999999999;
	background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px #00000029;
	opacity: 1;
	h1 {
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-normal) var(--unnamed-font-size-18) /
			var(--unnamed-line-spacing-27) var(--unnamed-font-family-poppins);
		letter-spacing: var(--unnamed-character-spacing-0);
		color: var(--unnamed-color-3f3f46);
		text-align: left;
		font: normal normal normal 18px/27px Poppins;
		letter-spacing: 0px;
		color: #3f3f46;
	}
	.menu {
		position: absolute;
		top: 40px;
		padding: 25px 20px;
		right: -55px;
		background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
		background: #ffffff 0% 0% no-repeat padding-box;
		box-shadow: 0px 3px 10px #00000029;
		border-radius: 10px;
		width: 198px;
		height: 119px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		a {
			font: var(--unnamed-font-style-normal) normal
				var(--unnamed-font-weight-bold) var(--unnamed-font-size-17) / 24px
				var(--unnamed-font-family-source-sans-pro);
			letter-spacing: var(--unnamed-character-spacing-0-02);
			color: var(--unnamed-color-ba3c3d);
			text-align: left;
			font: normal normal bold 17px/24px Source Sans Pro;
			letter-spacing: 0.02px;
			color: #ba3c3d;
			padding: 0;
			margin: 0;
			background-color: transparent;
			border: none;
		}
	}
	.right {
		display: grid;
		grid-template-columns: 130px 144px 72px;
		grid-gap: 22px;
		margin-left: 47px;
		position: relative;
		justify-self: end;
	}
	.info {
		font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300)
			var(--unnamed-font-size-14) / var(--unnamed-line-spacing-21)
			var(--unnamed-font-family-poppins);
		letter-spacing: var(--unnamed-character-spacing-0-17);
		color: var(--unnamed-color-3f3f46);
		text-align: center;
		font: normal normal 300 14px/21px Poppins;
		letter-spacing: 0.17px;
		color: #3f3f46;
		padding-top: 10px;
	}
	.red-link {
		width: 100%;
		height: 20px;
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-medium) var(--unnamed-font-size-14) /
			var(--unnamed-line-spacing-21) var(--unnamed-font-family-poppins);
		color: var(--unnamed-color-ef4444);
		text-align: left;
		font: normal normal medium 14px/21px Poppins;
		letter-spacing: 0.23px;
		color: #ef4444;
		border: none;
		background-color: transparent;
		padding-top: 4px;
	}
	.person {
		border: none;
		background-color: transparent;
		height: fit-content;
		width: fit-content;
		margin: 10px;
		img {
			width: 20px;
			height: 20px;
		}
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

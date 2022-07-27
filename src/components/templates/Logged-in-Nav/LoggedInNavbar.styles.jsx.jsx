import styled from "styled-components";
export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	display: grid;
	grid-template-columns: 150px 393px 1fr 50px;
	padding: 30px 140px;
	height: 100px;
	width: 100vw;
	background-color: #fff;
	z-index: 999999999999999999999999999999999999999999999999;
	background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px #00000029;
	opacity: 1;

	.mobile {
		display: none;
	}
	h1 {
		color: black;
	}
	.right {
		display: grid;
		grid-template-columns: 143px 150px 1fr;
		grid-gap: 22px;
		margin-left: 47px;
		position: relative;
	}
	.outline-red {
		background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
		border: 1px solid var(---d44244);
		background: #ffffff 0% 0% no-repeat padding-box;
		border: 1px solid #d44244;
		border-radius: 15px;
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-bold) var(--unnamed-font-size-17) / 24px
			var(--unnamed-font-family-source-sans-pro);
		letter-spacing: var(--unnamed-character-spacing-0-02);
		color: var(---d44244);

		font: normal normal bold 17px/24px Source Sans Pro;
		letter-spacing: 0.02px;
		color: #d44244;
		text-align: center;
		padding-top: 0px;
		height: 40px;
	}
	.fill-red {
		background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
		border: 1px solid var(---d44244);
		background: #ffffff 0% 0% no-repeat padding-box;
		border: 1px solid #d44244;
		border-radius: 15px;
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-bold) var(--unnamed-font-size-17) / 24px
			var(--unnamed-font-family-source-sans-pro);
		letter-spacing: var(--unnamed-character-spacing-0-02);
		color: var(---d44244);
		text-align: center;
		font: normal normal bold 17px/24px Source Sans Pro;
		letter-spacing: 0.02px;
		color: #d44244;
		padding-top: 0px;
		height: 40px;
	}
	.info {
		p {
			font: var(--unnamed-font-style-normal) normal
				var(--unnamed-font-weight-bold) var(--unnamed-font-size-17) / 24px
				var(--unnamed-font-family-source-sans-pro);
			letter-spacing: var(--unnamed-character-spacing-0-02);
			color: var(--unnamed-color-4a4a4a);
			text-align: right;
			font: normal normal bold 17px/24px Source Sans Pro;
			letter-spacing: 0.02px;
			color: #4a4a4a;
			line-height: 20px;
			margin: 0;
			padding: 0;
		}
	}
	.menu {
		position: absolute;
		top: 50px;
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
	.person {
		width: 70px !important;
		border: none;
		padding: 0;
		margin: 0;
		background: transparent;
		font-size: 50px;
		margin-top: -25px;
		color: #a2a2a2;
	}
	@media screen and (max-width: 600px) {
		height: fit-content;
		max-height: 15vh;

		padding: 10px;
		grid-template-columns: 100px 1fr;
		max-width: 100vw;
		display: none !important;
		.right {
			display: flex;
			justify-content: space-between;
			width: 95vw;
			margin-top: 15px;
		}
		.desktop {
			display: none;
		}
		.mobile {
			display: grid;
			grid-template-columns: 100px 1fr 100px;
			padding: 0;
		}
	}
`;

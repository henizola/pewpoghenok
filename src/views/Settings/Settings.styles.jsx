import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: calc(100vh -100px);
	padding: 20px 140px;
	margin: 0;
	padding-bottom: 100px;
	.header {
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-normal) 40px/60px
			var(--unnamed-font-family-poppins);
		letter-spacing: var(--unnamed-character-spacing-0);
		color: var(--unnamed-color-a2a2a2);
		text-align: left;
		font: normal normal normal 40px/60px Poppins;
		letter-spacing: 0px;
		color: #a2a2a2;
	}
	.red {
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-bold) 40px/60px
			var(--unnamed-font-family-poppins);
		letter-spacing: var(--unnamed-character-spacing-0);
		color: var(---d44244);
		text-align: left;
		text-decoration: underline;
		font: normal normal bold 40px/60px Poppins;
		letter-spacing: 0px;
		color: #d44244;
		margin-right: 20px;
	}

	#scroll-container {
		overflow: hidden;
	}

	#scroll-text {
		/* animation properties */
		-moz-transform: translateX(100%);
		-webkit-transform: translateX(100%);
		transform: translateX(100%);
		width: fit-content !important;
		-moz-animation: my-animation 10s linear infinite;
		-webkit-animation: my-animation 10s linear infinite;
		animation: my-animation 10s linear infinite;
		width: 100vw !important;
	}

	/* for Firefox */
	@-moz-keyframes my-animation {
		from {
			-moz-transform: translateX(100%);
		}
		to {
			-moz-transform: translateX(-100%);
		}
	}

	/* for Chrome */
	@-webkit-keyframes my-animation {
		from {
			-webkit-transform: translateX(100%);
		}
		to {
			-webkit-transform: translateX(-100%);
		}
	}

	@keyframes my-animation {
		from {
			-moz-transform: translateX(100%);
			-webkit-transform: translateX(100%);
			transform: translateX(100%);
		}
		to {
			-moz-transform: translateX(-100%);
			-webkit-transform: translateX(-100%);
			transform: translateX(-100%);
		}
	}
	.hero {
		height: 450px;
		object-fit: cover;
		width: 100%;
	}
	@media screen and (max-width: 600px) {
		padding: 30px;
	}
`;

export const Matches = styled.div`
	width: 100%;
	margin-top: 50px;
	.match-head {
		display: flex;
	}
	.title {
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-bold) var(--unnamed-font-size-30) /
			var(--unnamed-line-spacing-46) var(--unnamed-font-family-poppins);
		letter-spacing: var(--unnamed-character-spacing-0-01);
		color: var(--unnamed-color-000000);

		font: normal normal bold 30px/46px Poppins;

		color: #000000;
	}
	.filter {
		margin: 13px 20px;
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
			var(--unnamed-line-spacing-22) var(--unnamed-font-family-source-sans-pro);
		letter-spacing: var(--unnamed-character-spacing-0-01);
		color: var(--unnamed-color-000000);
		font: normal normal normal 16px/22px Source Sans Pro;
	}

	.match-list {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 17px;
		margin-top: 30px;
	}
`;

export const FilterButtonsContainer = styled.div`
	width: 200px;
	font-display: grid;
	grid-template-columns: 1fr 1fr;

	height: 50px;
	/* UI Properties */
	background: var(--unnamed-color-f0f0f0) 0% 0% no-repeat padding-box;
	background: #f0f0f0 0% 0% no-repeat padding-box;
	border-radius: 10px;
	padding: 10px;
	display: flex;
	justify-content: space-between;
	button {
		border: none;
		color: black;
		width: 78px;
		height: 100%;
		/* UI Properties */
		background-color: transparent;
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-bold) var(--unnamed-font-size-17) / 24px
			var(--unnamed-font-family-source-sans-pro);
		letter-spacing: var(--unnamed-character-spacing-0-02);
		color: var(--unnamed-color-ffffff);
		text-align: center;
		font: normal normal bold 17px/24px Source Sans Pro;
		letter-spacing: 0.02px;
		border-radius: 10px;
	}
	.selected {
		background: var(--unnamed-color-2865b3) 0% 0% no-repeat padding-box;
		background: #2865b3 0% 0% no-repeat padding-box;
		color: #fff;
	}
`;

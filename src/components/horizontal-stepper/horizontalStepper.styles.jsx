import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: calc(100vh -100px);
	margin: 0;
	padding-bottom: 100px;
	.header {
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-bold) var(--unnamed-font-size-28) /
			var(--unnamed-line-spacing-42) var(--unnamed-font-family-poppins);
		letter-spacing: var(--unnamed-character-spacing-0);
		color: var(--unnamed-color-ef4444);
		text-align: left;
		font: normal normal bold 28px/42px Poppins;
		letter-spacing: 0px;
		color: #ef4444;
		padding: 25px 140px;
		width: 100vw;
		margin: 0 !important;
		display: flex;
		justify-content: space-between;
	}

	.hero {
		width: 100vw;
		height: 400px;
		object-fit: cover;
	}
`;

export const Matches = styled.div`
	width: 100%;
	margin-top: 50px;
	padding: 20px 140px;

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
		font: normal normal normal 16px/22px Source Sans Pro;
	}

	.match-list {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 17px;
		margin-top: 30px;
	}
	@media screen and (max-width: 600px) {
		.match-list {
			grid-template-columns: 1fr;
			max-width: 90vw;
		}
	}
`;

export const GameLink = styled.button`
	border: none;
	background-color: transparent;
	text-align: left;
	font: ${(props) =>
		props.active
			? "normal normal bold 28px/42px Poppins"
			: "normal normal 300 28px/42px Poppins"};
	letter-spacing: 0px;
	color: ${(props) => (props.active ? "#ef4444" : "#D4D4D8")};
	opacity: ${(props) => (props.active ? "1" : "0.8")};
`;

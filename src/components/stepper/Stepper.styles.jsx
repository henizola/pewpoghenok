import styled from "styled-components";

export const Contanier = styled.div`
	max-width: 100%;
	width: 100%;
	height: fit-content;
	display: grid;
	grid-template-columns: 321px 1fr;
	grid-gap: 78px;
	margin: 0px auto;
	margin-right: 50px;

	.header {
		height: 100%;
		position: fixed;
		top: 75px;
		border-right: 1px solid #707070;
		padding-right: 50px;
		padding-top: 100px;
		h1 {
			font: var(--unnamed-font-style-normal) normal
				var(--unnamed-font-weight-bold) var(--unnamed-font-size-30) /
				var(--unnamed-line-spacing-46) var(--unnamed-font-family-poppins);
			letter-spacing: var(--unnamed-character-spacing-0);
			color: var(--unnamed-color-4a4a4a);
			text-align: left;
			font: normal normal bold 30px/46px Poppins;
			letter-spacing: 0px;
			color: #4a4a4a;
		}
	}

	.nav {
		display: flex;
		flex-direction: column;
		width: 100%;
		text-align: left;
		margin-top: 50px;
	}
	.tab {
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-normal) var(--unnamed-font-size-23) /
			var(--unnamed-line-spacing-34) var(--unnamed-font-family-poppins);
		letter-spacing: var(--unnamed-character-spacing-0);
		color: var(--unnamed-color-000000);
		text-align: left;
		font: normal normal normal 23px/34px Poppins;
		letter-spacing: 0px;
		color: #000000;
		background-color: transparent;
		border: none;
		margin-bottom: 33px;
	}
	.active {
		color: #2865b3;
		text-decoration: underline;
	}
	.content {
		border: 2px solid red;
	}
`;

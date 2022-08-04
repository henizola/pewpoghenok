import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 50px;
	padding: 80px 140px;
	.title {
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
	.pages {
		display: grid;
		grid-template-columns: repeat(6, 180px);
		grid-gap: 16px;
		margin-top: 71px;
	}

	@media (max-width: 768px) {
		.pages {
			display: grid;
			grid-template-columns: 1fr;
			padding-top: 0px;
			gap: 30px;
		}
		margin: 3rem;
		padding-top: 100px;
		padding-bottom: 0px;
	}
`;

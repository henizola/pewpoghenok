import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 173px 100px;
	gap: 80px;

	.pages {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-gap: 16px;
	}

	@media (max-width: 768px) {
		.pages {
			display: grid;
			grid-template-columns: 1fr;
		}
		margin: 3rem;
	}
`;

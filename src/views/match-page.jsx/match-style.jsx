import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: calc(100vh -100px);
	padding: 20px 140px;
	margin: 0;
	padding-bottom: 100px;

	.red {
		background: var(---d44244) 0% 0% no-repeat padding-box;
		background: #d44244 0% 0% no-repeat padding-box;
		border-radius: 15px;
		border: none;
		padding: 6px !important;
		margin-bottom: 10px;
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-bold) var(--unnamed-font-size-17) / 24px
			var(--unnamed-font-family-source-sans-pro);
		letter-spacing: var(--unnamed-character-spacing-0-02);
		color: var(--unnamed-color-ffffff);
		text-align: left;
		font: normal normal bold 17px/24px Source Sans Pro;
		letter-spacing: 0.02px;
		color: #ffffff;
		width: 140px;
		/* height: 40px; */
		text-align: center;
		text-decoration: none;
	}
	.back {
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-bold) var(--unnamed-font-size-17) / 24px
			var(--unnamed-font-family-source-sans-pro);
		letter-spacing: var(--unnamed-character-spacing-0-02);
		color: var(---d44244);
		text-align: left;
		text-decoration: underline;
		font: normal normal bold 17px/24px Source Sans Pro;
		letter-spacing: 0.02px;
		color: #d44244;
		opacity: 1;
	}
	.match-row {
		display: flex;
		justify-content: space-around;
		align-items: end;
	}
	.sub-row {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	.match-row span {
		flex: 1;
	}
	.match-row div {
		flex: 3;
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
			var(--unnamed-line-spacing-22) var(--unnamed-font-family-source-sans-pro);
		letter-spacing: var(--unnamed-character-spacing-0-01);
		color: var(--unnamed-color-000000);
		text-align: left;
		font: normal normal normal 16px/22px Source Sans Pro;
		letter-spacing: 0.01px;
		color: #000000;
		opacity: 1;
	}
	.sub-row span {
		flex: 1;
	}
	.edit {
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-bold) var(--unnamed-font-size-17) / 24px
			var(--unnamed-font-family-source-sans-pro);
		letter-spacing: var(--unnamed-character-spacing-0-02);
		color: var(---d44244);
		text-align: left;
		text-decoration: underline;
		font: normal normal bold 17px/24px Source Sans Pro;
		letter-spacing: 0.02px;
		color: #d44244;
		opacity: 1;
	}
	.match-name {
		text-align: left;
		font: normal normal bold 30px/46px Poppins;
		letter-spacing: 0px;
		color: #4a4a4a;
		opacity: 1;
	}
	.hero {
		height: 450px;
		object-fit: cover;
		width: 100%;
		border: 1px solid #707070;
		opacity: 1;
	}
	p {
		margin-top: 14px;
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
			var(--unnamed-line-spacing-22) var(--unnamed-font-family-source-sans-pro);
		letter-spacing: var(--unnamed-character-spacing-0-01);
		color: var(--unnamed-color-000000);
		text-align: left;
		font: normal normal normal 16px/22px Source Sans Pro;
		letter-spacing: 0.01px;
		color: #000000;
		opacity: 1;
	}
	@media screen and (max-width: 600px) {
		padding: 30px;
		.match-row {
			display: flex;
			flex-direction: column;
		}
		.match-name {
			text-align: center !important;
			width: 100%;
		}
		.sub-row {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-gap: 10px;
			margin: 20px 0;
		}
	}
`;

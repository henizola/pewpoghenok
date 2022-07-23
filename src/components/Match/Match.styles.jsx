import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: fit-content;
	background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 10px #0000001f;
	border-radius: 10px;
	opacity: 1;
	padding: 28px 40px;
	.space {
		display: flex;
		justify-content: space-between;
	}
	.date {
		font: var(--unnamed-font-style-normal) normal
			var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
			var(--unnamed-line-spacing-22) var(--unnamed-font-family-source-sans-pro);
		letter-spacing: var(--unnamed-character-spacing-0-01);
		color: var(--unnamed-color-000000);
		text-align: left;
		font: normal normal normal 16px/22px Source Sans Pro;
		letter-spacing: 0.01px;
		color: #000000;
	}
	.bold {
		font-size: 17px;
		font-weight: medium;
	}
	.user {
		display: flex;
		p {
			margin: 10px;
		}
	}
	.red {
		background: var(---d44244) 0% 0% no-repeat padding-box;
		background: #d44244 0% 0% no-repeat padding-box;
		border-radius: 15px;
		border: none;
		padding: 0 !important;
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
		text-align: center;
		text-decoration: none;
		float: right;
	}
`;

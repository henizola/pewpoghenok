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
  }

  .content h1 {
	margin-bottom:60px;
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-30) /
      var(--unnamed-line-spacing-46) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0-01);
    color: var(--unnamed-color-000000);
    text-align: left;
    font: normal normal normal 30px/46px Poppins;
    letter-spacing: 0.01px;
    color: #000000;
    opacity: 1;
  }
  .content .profile-container{
	margin-bottom:34px;
  }
  .content .edit-link {
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
  .content .general-icon {
    text-align: center;
     display:block;
    width: 100px;
  }
  .content .row-user{
	display:flex;
	/* justify-content:space-between; */
  }
  .content .row-user .field-name{
	min-width:120px;
	margin-right:20px;
	font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-23)/var(--unnamed-line-spacing-34) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-000000);
text-align: left;
font: normal normal bold 23px/34px Poppins;
letter-spacing: 0px;
color: #000000;
opacity: 1;
  }
  .content .row-user .field-value{
	 
	flex:1;
	font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-23)/var(--unnamed-line-spacing-34) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-000000);
text-align: left;
font: normal normal normal 23px/34px Poppins;
letter-spacing: 0px;
color: #000000;
opacity: 1;
  }
  .content .row-user .edit-link {
     flex:1;
  }

  .content .match-history-content{
	margin-top:72px;
  }
  .content .match-history-content .row{
	display:flex;
	margin-bottom:20px;
  }
  .content .match-history-content .row span{
	flex:1;
	font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-17)/var(--unnamed-line-spacing-26) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-000000);
text-align: left;
font: normal normal normal 17px/26px Poppins;
letter-spacing: 0px;
color: #000000;
opacity: 1;
  }
 .upcoming-matches .match-list {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 17px;
		margin-top: 30px;
	}
button.red{
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
	}
	button.cash{
		margin-top:66px;
		width: 140px;
height: 40px;
		border: none;
		 background: var(---d44244) 0% 0% no-repeat padding-box;
background: #D44244 0% 0% no-repeat padding-box;
border-radius: 15px;
opacity: 1;
font: normal normal bold 17px/24px Source Sans Pro;
letter-spacing: 0.02px;
color: #FFFFFF;
opacity: 1;
	}
	div.cash-text{
		text-align: left;
font: normal normal normal 16px/22px Source Sans Pro;
letter-spacing: 0.01px;
color: #000000;
opacity: 1;
	}
`;

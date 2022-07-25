import React from "react";


const MatchHistory=()=>{
    return(
    <>
    <h1>Match History</h1>
    <div className="match-history-content">
      {
        [1,2,3,4,5,6,7,8,9].map(e=> <div className="row">
        <span>Date: mm/dd/yy</span>
        <span>Name: Match Title</span>
        <span>Game: Valorant</span>
        <span>Payout: 23 pogs</span>
     </div>)
      }
    </div>
    </>)
}
export default MatchHistory;
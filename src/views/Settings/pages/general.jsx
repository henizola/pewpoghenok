import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";

const General = () => {
  return (
    <>
      <h1 style={{marginBottom:'26px'}}>General</h1>
      <div className="profile-container">
        <div className="general-icon">
          <IoPersonCircleSharp style={{ width: "100px", height: "100px" }} />
          <span className="edit-link">Edit</span>
        </div>
      </div>
      
      <div className="row-user">
        <span className="field-name">Username</span>
        <span className="field-value">Sniperkid123</span>
        <span className="edit-link">Edit</span>
      </div>
      <div className="row-user">
        <span className="field-name">Email</span>
        <span className="field-value">Sniperkid123@email.com</span>
        <span className="edit-link">Edit</span>
      </div>
      <div className="row-user">
        <span className="field-name">Password</span>
        <span className="field-value">*************</span>
        <span className="edit-link">Edit</span>
      </div>
      <div className="row-user">
        <span className="field-name">DOB</span>
        <span className="field-value">January 12 2002</span>
        <span className="edit-link">Edit</span>
      </div>
    </>
  );
};
export default General;

import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../../assets/avatar2.png";
const General = () => {
  return (
    <>
      <h1>General</h1>
      <div className="profile-container">
        <div className="general-icon">
          <img src={avatar} alt="" className="profile" />
        </div>
      </div>
      <Link className="edit__link ">Edit</Link>

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

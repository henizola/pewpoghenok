import { Container, InputContainer, Button, DispalyError } from "./SignIn";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { apiCall } from "../../api/ApiCall";
const SignInForm = () => {
  const [user, setUser] = useState({});
  const [err, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handelSubmmit = (e) => {
    e.preventDefault();

    apiCall("post", user, `auth/login`, onSuccess, onFailure);
  };
  const onFailure = (error) => {
    console.log(error);
    if (
      error.response.status == 400 &&
      error.response.data.type == "validation"
    )
      return setErrors({ ...JSON.parse(error.response.data.message) });
    //   console.log(JSON.parse(error.response.data.message));

    //   toast.error(error.response.data);
  };

  const onSuccess = (data) => {
    console.log(data);
    console.log("  successfully loggedin!");
    // toast.success("Registerd  successfully !");
    // setTimeout(() => {
    //   navigate("/");
    // }, 2000);
  };
  return (
    <Container>
      <h4>Login</h4>
      <p className="sub-title">
        New user ?{" "}
        <Link to="sign-up" className="red">
          Create an account
        </Link>
      </p>
      <div className="top">
        <div>
          <InputContainer>
            <p className="input-title">Username *</p>
            <input
              type="text"
              className="input"
              name="username"
              onChange={handleChange}
            />
            <DispalyError>{err["username"]}</DispalyError>
          </InputContainer>

          <InputContainer>
            <p className="input-title">Password *</p>
            <input
              type="text"
              className="input"
              name="password"
              onChange={handleChange}
            />
            <DispalyError>{err["password"]}</DispalyError>
          </InputContainer>

          <p className="red" style={{ marginTop: "10px", cursor: "pointer" }}>
            Forgot password
          </p>
        </div>
        <div>
          <Button onClick={handelSubmmit}>Login</Button>
        </div>
      </div>
    </Container>
  );
};

export default SignInForm;

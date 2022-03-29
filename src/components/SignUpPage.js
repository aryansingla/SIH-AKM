import styled from "styled-components";
import React from "react";
import Button from "./Button";
import Input from "./Input";
import google from "../assets/google.svg";
// import { FaFacebookF, FaInstagram } from "react-icons/fa";
import background from "../assets/background.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ApiService from "../service/apiService";
import { connect } from "react-redux";
import { login as loginAction } from "../redux/action/auth";

const SignUpPage = ({ signIn, loginAction }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await new ApiService().signup(name, username, password);

    if (response.status === "ok") {
      loginAction(response.name, response.username);
    } else {
      setMsg(response.error);
    }
  };

  return (
    <div>
      <MainContainer>
        <WelcomeText>Welcome</WelcomeText>
        <form onSubmit={(e) => handleSubmit(e)}>
          {msg && <>{msg}</>}
          <InputContainer>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          <ButtonContainer>
            <Button content="Sign Up" />
          </ButtonContainer>
        </form>
        <HorizontalRule />
        <LoginWith>OR SIGNUP WITH</LoginWith>
        <Form>
          <Google onClick={() => signIn()}>
            <img src={google} alt="" />
            Sign in with Google
          </Google>
        </Form>
        <AlreadyUser>
          Already a user ? <Link to="/login">Login Here</Link>
        </AlreadyUser>
      </MainContainer>
    </div>
  );
};

const MainContainer = styled.div`
  display: flex;
  margin: 30px auto;
  align-items: center;
  flex-direction: column;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;

    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;

    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
  color: #052132;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;
  align-items: center;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
  color: #052132;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 0.8rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const Form = styled.div`
  margin-top: 30px;
  width: 408px;
  padding-bottom: 30px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

const AlreadyUser = styled.div`
  color: #052132;
  font-weight: 600;
  padding-bottom: 30px;
`;

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (name, username) => dispatch(loginAction(name, username)),
  };
};

export default connect(null, mapDispatchToProps)(SignUpPage);

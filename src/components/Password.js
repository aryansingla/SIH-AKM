import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import { useState, useEffect } from "react";
import ApiService from "../service/apiService";
import { Redirect } from "react-router-dom";

const Password = (props) => {
  const [otpSent, setOtpSent] = useState("");

  const [username, setUsername] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otpSent) {
      const response = await new ApiService().sendOtp(username);

      if (response.status === "ok") {
        setMsg("OTP send to registered email ID");
        setOtpSent(true);
      } else {
        setMsg(response.error);
      }
    } else {
      const response = await new ApiService().resetPassword(
        username,
        otp,
        password
      );

      if (response.status === "ok") {
        <Redirect to="/login" />;
      } else {
        setMsg(response.error);
      }
    }
  };

  return (
    <div>
      <MainContainer>
        <WelcomeText>Forgot Password</WelcomeText>
        <form onSubmit={(e) => handleSubmit(e)}>
          {msg && <>{msg}</>}
          <InputContainer>
            <Input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={otpSent}
            />

            <Input
              type="number"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              disabled={!otpSent}
            />
            <Input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={!otpSent}
            />
          </InputContainer>
          <ButtonContainer>
            <Button content="Send OTP" />
          </ButtonContainer>
        </form>
        <HorizontalRule />
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

const ForgotPassword = styled.h4`
  cursor: pointer;
  padding-bottom: 30px;
  color: #052132;
  margin-top: 30px;
`;

const Form = styled.div`
  margin-top: 30px;
  width: 408px;
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
export default Password;

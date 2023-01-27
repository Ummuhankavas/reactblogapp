import React from "react";
import { useState } from "react";
import { signIn, signUpWithGoogle } from "../../helpers/firebase";
import { useNavigate } from "react-router-dom";
import LoginStyled, { Btn, Input, Signin } from "./LoginStyled";
import GoogleIcons from "../../assets/GoogleIcon";
import { BsFillPersonCheckFill } from "react-icons/bs";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
    console.log(email, password, navigate);
  };
  const handleGoogleProvider = () => {
    signUpWithGoogle(navigate);
  };
  return (
    <LoginStyled>
      <Signin>
        <BsFillPersonCheckFill style={{ fontSize: "6rem", color: "#0C1940" }} />
        <h1>--Login--</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <Btn>login</Btn>
          <br />
          <br />

          <Btn onClick={handleGoogleProvider} style={{ cursor: "pointer" }}>
            <GoogleIcons />
          </Btn>
        </form>
      </Signin>
    </LoginStyled>
  );
};

export default Login;
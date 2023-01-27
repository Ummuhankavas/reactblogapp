import React from "react";
import { useState } from "react";
import { createUser, signUpWithGoogle } from "../../helpers/firebase";
import { useNavigate } from "react-router-dom";
import LoginStyled, { Btn, Input, Signin } from "./RegisterStyled";
import GoogleIcons from "../../assets/GoogleIcon";
import { BsFillPersonPlusFill } from "react-icons/bs";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, navigate, displayName);

    console.log(firstName, lastName);
  };
  const handleGoogleProvider = () => {
    signUpWithGoogle(navigate);
  };
  return (
    <LoginStyled>
      <Signin>
        <BsFillPersonPlusFill style={{ fontSize: "6rem", color: "#0C1940" }} />
        <h1>--Register--</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="first name"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <br />
          <Input
            type="text"
            placeholder="last name"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <br />
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
          <Btn>register</Btn>
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

export default Register;
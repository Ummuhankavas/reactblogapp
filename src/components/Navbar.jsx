import React, { useContext } from "react";
import { logOut } from "../helpers/firebase";
import NavStyled, {
  NavbarLink,
  NavImg,
  MenuDiv,
  RightDiv,
  NavbarLinkp,
} from "./NavStyled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { AuthContext } from "../contexts/AuthContext";
import logo from "../../src/assets/ummulogo.jpg";

function Nav() {
  const { currentUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <NavStyled>
      <NavImg src={logo} alt="logo" onClick={() => navigate("/home")} />

      <NavbarLink style={{ fontSize: "1.5rem", color: "white" }} to="/">
        ----APRIL'S--- BLOG
      </NavbarLink>

      <RightDiv>
        <BsPersonCircle
          onClick={() => setIsOpen(!isOpen)}
          style={{ fontSize: "2rem", color: "white" }}
        />

        <MenuDiv isOpen={isOpen} onClick={() => setIsOpen(false)}>
          {currentUser && (
            <>
              <NavbarLink to="/profile">Profile</NavbarLink>
              <NavbarLink to="/newblog">New</NavbarLink>
              <NavbarLinkp onClick={() => logOut(navigate)}>Logout</NavbarLinkp>
            </>
          )}
          {!currentUser && (
            <>
              <NavbarLink to="/about">About</NavbarLink>
              <NavbarLink to="/login">Login</NavbarLink>
              <NavbarLink to="/register">Register</NavbarLink>
            </>
          )}
        </MenuDiv>
      </RightDiv>
    </NavStyled>
  );
}

export default Nav;
import React, { useContext } from "react";
import { logOut } from "../utils/firebase";
import NavStyled, {
  NavbarLink,
  NavImg,
  MenuDiv,
  RightDiv,
  NavbarLinkp,
} from "./NavStyled.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import woswos from "../assets/woswos.png";
import { AuthContext } from "../context/AuthContextProvider";

function Nav() {
  const { currentUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <NavStyled>
      <NavImg src={woswos} alt="" onClick={() => navigate("/dashboard")} />

      <NavbarLink style={{ fontSize: "1.5rem", color: "white" }} to="/">
        April's Blog
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
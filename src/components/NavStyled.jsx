import styled from "styled-components";
import { Link } from "react-router-dom";
const NavStyled = styled.nav`
  background-color: ${({ theme }) => theme.colors.header};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.body};
  font-size: 15px;
  &:hover {
    color: ${({ theme }) => theme.colors.body};
    font-weight: bold;
  }
`;
export const NavbarLinkp = styled.p`
  color: ${({ theme }) => theme.colors.body};
  font-size: 15px;
  margin-top: -1px;
  &:hover {
    color: ${({ theme }) => theme.colors.body};
    font-weight: bold;
  }
`;

export const NavImg = styled.img`
  width: 3rem;
  padding: 1rem;
`;
export const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  position: relative;
  padding-right: 20px;
`;

export const MenuDiv = styled.div`
  position: absolute;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-items: space-between;
  align-items: center;
  width: 60px;
  height: 90px;
  gap: 2px;
  padding: 3px;
  transform: translate(-5%, 35px);
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 2px;
  box-shadow: 2px 5px 25px 1px black;
`;
export default NavStyled;
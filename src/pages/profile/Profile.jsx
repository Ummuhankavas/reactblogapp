import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import ProfileStyled, { Signin, Table } from "./ProfileStyled";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <ProfileStyled>
      <Signin>
        <BsFileEarmarkPersonFill
          style={{ fontSize: "6rem", color: "#0C1940" }}
        />
        <Table>
          <tr>
            <th style={{ backgroundColor: "#f2f2f2" }}>Name</th>
          </tr>
          <tr>
            <td>{currentUser.displayName}</td>
          </tr>

          <tr>
            <th style={{ backgroundColor: "#f2f2f2" }}>Email</th>
          </tr>

          <tr>
            <td>{currentUser.email}</td>
          </tr>
        </Table>
      </Signin>
    </ProfileStyled>
  );
};

export default Profile;
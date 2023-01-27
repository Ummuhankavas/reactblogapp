import React, { useState } from "react";
import UpdateStyled, { Btn, Input, Input2, Signin } from "./UpdateStyled";
import logo from "../../assets/ummulogo.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { UpdateUser } from "../../contexts/BlogContext";
import { toastSuccessNotify } from "../../helpers/toastNotify";
const UpdateBlog = () => {
  const navigate = useNavigate();
  const { state: det } = useLocation();
  const [contact, setContact] = useState({
    title: det.title,
    url: det.url,
    content: det.content,
    date: det.date,
    email: det.email,
    id: det.id,
  });
  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
      date: `${new Date().toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`,
    });
  };
  const handleUpdate = (det) => {
    UpdateUser(det);
    navigate("/");
    toastSuccessNotify("Updated succesfully!");
  };
  console.log(contact);
  return (
    <UpdateStyled>
      <Signin>
        <img src={logo} alt='logo' width="100" />
        <h1>--Update Blog--</h1>
        <form onSubmit={() => handleUpdate(contact)}>
          <Input
            type="text"
            name="title"
            placeholder="Title*"
            required
            onChange={handleChange}
            value={contact.title}
          />
          <br />
          <Input
            type="text"
            name="url"
            placeholder="image URL*"
            required
            onChange={handleChange}
            value={contact.url}
          />
          <br />
          <Input2
            type="text"
            name="content"
            placeholder="Content*"
            required
            onChange={handleChange}
            value={contact.content}
          />
          <br />
          <Btn type="submit">Update</Btn>
          <br />
          <br />
        </form>
      </Signin>
    </UpdateStyled>
  );
};

export default UpdateBlog;
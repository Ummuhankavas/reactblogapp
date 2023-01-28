import React, { useContext, useState } from "react";
// import { toastSuccessNotify } from "../../helpers/toastNotify";
import NewStyled, { Btn, Input, Input2, Signin } from "./NewStyled";
import logo from "../../assets/ummulogo.jpg";
import { AuthContext } from "../../contexts/AuthContext";
import { AddUser } from "../../contexts/BlogContext";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: "",
    url: "",
    content: "",
    date: "",
    email: "",
    like: 0,
  });
  const { currentUser } = useContext(AuthContext);
  const handleChange = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
      email: `${currentUser.email}`,
      date: `${new Date().toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddUser(blog);
    setBlog({ title: "", url: "", content: "" });
    navigate("/");
    // toastSuccessNotify("Blog was added successfully!");
  };
  return (
    <NewStyled>
      <Signin>
        <img src={logo} width="100" alt="pic" />
        <h1>--New Blog--</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="title"
            placeholder="Title*"
            required
            onChange={handleChange}
            value={blog.title}
          />
          <br />
          <Input
            type="text"
            name="url"
            placeholder="image URL*"
            required
            onChange={handleChange}
            value={blog.url}
          />
          <br />
          <Input2
            type="text"
            name="content"
            placeholder="Content*"
            required
            onChange={handleChange}
            value={blog.content}
          />
          <br />
          <Btn>Submit</Btn>
          <br />
          <br />
        </form>
      </Signin>
    </NewStyled>
  );
};

export default NewBlog;
import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Detail";
import UpdateBlog from "../pages/UpdateBlog";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import About from "../pages/About";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/details/:id" element={<PrivateRouter />}>
        <Route path="" element={<Details />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/newblog" element={<NewBlog />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/update/:id" element={<UpdateBlog />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRouter;
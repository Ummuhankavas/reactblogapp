import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DashboardStyled, {
  Blogdiv,
  Bottom,
  Image,
  Index,
} from "./DashboardStyled";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { AuthContext } from "../../contexts/AuthContext";
import { toastWarnNotify } from "../../helpers/toastNotify";

import { useFetch } from "../../contexts/BlogContext";
const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const { blogList } = useFetch();
  console.log(blogList);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>---DASHBOARD---</h1>
      <DashboardStyled>
        {blogList.map((blog) => (
          <Blogdiv
            key={blog?.id}
            onClick={() => {
              navigate("details/" + blog?.id, { state: blog });
              !currentUser && toastWarnNotify("please log in to see detail");
            }}
          >
            <Image src={blog?.url} alt="" />
            <Index>
              <h3>{blog?.title?.toUpperCase()}</h3>
              <p>{blog?.date}</p>
              <p>{blog?.content?.slice(0, 100)}...</p>
            </Index>
            <Bottom>
              <p>
                <BsPersonCircle style={{ marginRight: "10px" }} />
                {blog?.email}
              </p>
              <p>
                {blog?.like > 0 && (
                  <AiFillHeart style={{ marginRight: "10px", color: "red" }} />
                )}
                {blog?.like === 0 && (
                  <AiFillHeart
                    style={{ marginRight: "10px", color: "black" }}
                  />
                )}
                {blog?.like}
                <BiComment
                  style={{ marginLeft: "10px", marginRight: "10px" }}
                />
                0
              </p>
            </Bottom>
          </Blogdiv>
        ))}
      </DashboardStyled>
    </div>
  );
};

export default Dashboard;
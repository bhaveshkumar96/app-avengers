import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../redux/action";
import BlogCard from "./BlogCard";
import { Box, Button, Input } from "@chakra-ui/react";
const MyBlogs = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  useEffect(() => {
    dispatch(getAllBlogs);
  }, []);
  const handleUpdateBlog = ()=>{

  }
  console.log(blogs);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "50px",
        width: "70%",
        margin: "auto",
        marginTop: "50px",
      }}
    >
      {blogs.length > 0 &&
        blogs.map((el, id) => {
          return <BlogCard key={id} {...el} />;
        })}
    </div>
  );
};

export default MyBlogs;

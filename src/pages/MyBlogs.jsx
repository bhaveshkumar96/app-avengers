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

      {/* <Box
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        backgroundColor={"blackAlpha.200"}
        width={"400px"}
        height={"fit-content"}
      >
        <Input size={"40"} placeholder="Enter title" h={"40px"} />
        <Input size={"40"} placeholder="Enter Description" h={"40px"} />
        <Button handleUpdateBlog>UPDATE</Button>
      </Box> */}
    </div>
  );
};

export default MyBlogs;

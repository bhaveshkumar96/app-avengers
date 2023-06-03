import { Box, Button, Heading, Input, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateBlog } from "../redux/action";
import { useNavigate } from "react-router-dom";
const UpdateBlogs = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  let blogId = localStorage.getItem("blog-id");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(inputs);
    let blog = {
      title: inputs.title,
      description: inputs.description,
    };
    dispatch(updateBlog(blogId, blog));
    setTimeout(() => {
      navigate("/blogs");
    }, 2000);
  };
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        height: "100vh",
      }}
    >
      <Heading
        as="h1"
        size="4xl"
        noOfLines={1}
        color={"#ffff"}
        mb={"50px"}
        paddingTop={"30px"}
      >
        UPDATE BLOG
      </Heading>
      <form onSubmit={handleSubmit}>
        <Box
          gap={"30px"}
          padding={3}
          margin={"auto"}
          marginTop={3}
          display="flex"
          flexDirection={"column"}
          width={"80%"}
        >
          <Input
            placeholder="Enter title"
            name="title"
            onChange={handleChange}
            value={inputs.title}
            margin="auto"
            variant="outlined"
            backgroundColor={"#f3f3f3"}
          />
          <Input
            placeholder="Enter description"
            name="description"
            onChange={handleChange}
            height={"40"}
            margin="auto"
            variant="outlined"
            value={inputs.description}
            backgroundColor={"#f3f3f3"}
          />

          <Button
            border={"1px solid gray"}
            sx={{ mt: 2, borderRadius: 4 }}
            variant="contained"
            type="submit"
            _hover={{
              background: "white",
              letterSpacing: "5px",
              fontWeight: "bold",
            }}
            width={"50%"}
            m={"auto"}
            letterSpacing={"3px"}
          >
            SUBMIT
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default UpdateBlogs;

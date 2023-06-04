import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../redux/action";
import BlogCard from "./BlogCard";
const MyBlogs = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  const isLoading = useSelector((state) => state.isLoading);
  useEffect(() => {
    dispatch(getAllBlogs);
  }, []);
  console.log(isLoading ? "true" : "false");
  if(isLoading){
    return  <img src="https://cdn.pixabay.com/animation/2022/10/11/03/16/03-16-39-160_512.gif"  margin="auto"/>
  }else{
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
  }
 
};

export default MyBlogs;

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MyBlogs from "./MyBlogs";
import NotFound from "./NotFound";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blogs" element={<MyBlogs/>}/>
        <Route path="*"  element={<NotFound/>}/>
      </Routes>
    </div>
  );
};

export default AllRoutes;

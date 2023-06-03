import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../redux/action';
import BlogCard from './BlogCard';
const MyBlogs = () => {
    const dispatch  = useDispatch()
    const blogs = useSelector((state) => state.blogs);
    useEffect(()=>{
        dispatch(getAllBlogs)
    },[])
    console.log(blogs)
  return (
    <div style={{display:"grid",gridAutoColumns:"repeat(4,1fr)"}}>
        {blogs.length > 0 && blogs.map((el,id)=>{
            return <BlogCard key={id}  {...el}/>
        })}
{/* <BlogCard/> */}
    </div>
  )
}

export default MyBlogs
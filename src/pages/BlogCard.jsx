import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Input,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBlog, getAllBlogs } from "../redux/action";
const BlogCard = ({ title, description,_id }) => {
    const dispatch = useDispatch()
    const handleUpdate = ()=>{
        //console.log(_id)
        localStorage.setItem("blog-id",_id)
        window.location.href="update"
    }
    const handleDelete = ()=>{
       dispatch(deleteBlog(_id)).then(()=>dispatch(getAllBlogs))
    }
  return (
    <Card key={_id} boxShadow={"rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px"}>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box display={"grid"} gap={"25px"}>
            <Heading as={"h4"} textTransform="uppercase">
              {title}
            </Heading>
            <Text pt="2" fontSize='xl'>
              {description}
            </Text>

              <Button onClick={handleUpdate}>UPDATE</Button>  
              <Button onClick={handleDelete}>DELETE</Button>  
          </Box>
        </Stack>
      </CardBody>

       
    </Card>
  );
};

export default BlogCard;

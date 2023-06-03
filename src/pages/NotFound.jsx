import { Heading } from '@chakra-ui/react'
import React from 'react'

const NotFound = () => {
  return (
    <div style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          height: "100vh",
      }}>
        
        <Heading as="h1" size="4xl" noOfLines={1} mb={"50px"} paddingTop={"30px"} letterSpacing={"5px"}>
        404 NOT FOUND
      </Heading>
    </div>
  )
}

export default NotFound
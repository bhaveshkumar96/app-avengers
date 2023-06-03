import React from "react";
import {
  Box,
  Card,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
const BlogCard = ({ title, description,id }) => {
  return (
    <Card key={id}>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              {title}
            </Heading>
            <Text pt="2" fontSize="sm">
              {description}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default BlogCard;

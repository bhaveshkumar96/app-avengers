import {
  Button,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  VStack,
  useColorModeValue,
  useDisclosure,
  Box,
  Heading,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

export const NaviBar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  return (
    <Flex alignItems="center" justifyContent="space-between" mx="auto">
      <Flex>
        <Heading as="h2">
            <NavLink to={"/"} >
            APP AVENGERS
            </NavLink>
            </Heading>
      </Flex>
      <HStack display="flex" alignItems="center" spacing={1}>
        <HStack
          spacing={1}
          mr={1}
          color="brand.500"
          display={{
            base: "none",
            md: "inline-flex",
          }}
        >
          <Button variant="ghost">
            <Link to="/blogs">BLOGS</Link>
          </Button>
        </HStack>
        <Button colorScheme="brand" size="sm">
          Get Started
        </Button>
        <Box
          display={{
            base: "inline-flex",
            md: "none",
          }}
        >
          <IconButton
            display={{
              base: "flex",
              md: "none",
            }}
            aria-label="Open menu"
            fontSize="20px"
            color="gray.800"
            _dark={{
              color: "inherit",
            }}
            variant="ghost"
            onClick={mobileNav.onOpen}
          />

          <VStack
            pos="absolute"
            top={0}
            left={0}
            right={0}
            display={mobileNav.isOpen ? "flex" : "none"}
            flexDirection="column"
            p={2}
            pb={4}
            m={2}
            bg={bg}
            spacing={3}
            rounded="sm"
            shadow="sm"
          >
            <CloseButton aria-label="Close menu" onClick={mobileNav.onClose} />

            <Button w="full" variant="ghost">
              BLOGS
            </Button>
            <Button w="full" variant="ghost">
              Pricing
            </Button>
          </VStack>
        </Box>
      </HStack>
    </Flex>
  );
};

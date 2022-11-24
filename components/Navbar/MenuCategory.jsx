import {
  Menu,
  MenuButton,
  Button,
  MenuItem,
  MenuList,
  Box,
  Card,
  Text,
  CardBody,
  Spacer,
  textDecoration,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

const MenuCategory = ({ category }) => {
  const [subCategories, setSubCategories] = useState([]);

  const fetchSubCategories = () => {
    axios
      .get("/api/subcategories", { category })
      .then((subCategories) => setSubCategories(subCategories.data));
  };

  useEffect(() => {
    fetchSubCategories();
  }, []);

  return (
    <Menu>
      <MenuButton
        as={Button}
        border="hidden"
        background={"white"}
        fontFamily="sans-serif"
      >
        {category.name}
      </MenuButton>
      <MenuList
        display={"flex"}
        w="1500px"
        h="250px"
        bg="pink"
        marginTop={"5"}
        justifyContent="space-around"
      >
        <Box textAlign={"center"}>
          <MenuItem
            border={"hidden"}
            bg="pink"
            marginTop={"25px"}
            fontWeight={"bold"}
            _hover={{ color: "red", textDecoration: "underline" }}
          >
            Download
          </MenuItem>
          <Spacer />
          <MenuItem
            border={"hidden"}
            bg="pink"
            marginTop={"15px"}
            fontWeight={"bold"}
            _hover={{ color: "red", textDecoration: "underline" }}
          >
            Create a Copy
          </MenuItem>
          <MenuItem
            border={"hidden"}
            bg="pink"
            marginTop={"15px"}
            fontWeight={"bold"}
            _hover={{ color: "red", textDecoration: "underline" }}
          >
            Mark as Draft
          </MenuItem>
          <MenuItem
            border={"hidden"}
            bg="pink"
            marginTop={"15px"}
            fontWeight={"bold"}
            _hover={{ color: "red", textDecoration: "underline" }}
          >
            Delete
          </MenuItem>
          <MenuItem
            border={"hidden"}
            bg="pink"
            marginTop={"15px"}
            fontWeight={"bold"}
            _hover={{ color: "red", textDecoration: "underline" }}
          >
            Attend a Workshop
          </MenuItem>
        </Box>

        <Card marginTop={"20px"}>
          <CardBody>
            <Image
              alt="photo"
              src="/assets/photoFaker.jpg"
              width="190"
              height="130"
            />
            <Text>
              <h3>Lorem ipsum dolor</h3>sit amet la la la.
            </Text>
          </CardBody>
        </Card>
        <Card marginTop={"20px"}>
          <CardBody>
            <Image
              alt="photo"
              src="/assets/photoFaker.jpg"
              width="190"
              height="130"
            />
            <Text>
              <h3>Lorem ipsum dolor</h3>sit amet la la la.
            </Text>
          </CardBody>
        </Card>
        <Card marginTop={"20px"}>
          <CardBody>
            <Image
              alt="photo"
              src="/assets/photoFaker.jpg"
              width="190"
              height="130"
            />
            <Text>
              <h3>Lorem ipsum dolor</h3>sit ametla la la.
            </Text>
          </CardBody>
        </Card>
      </MenuList>
    </Menu>
  );
};

export default MenuCategory;

import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import { RiUserLocationFill } from "react-icons/ri";

const NavBar: React.FC = () => {
  return (
    <Box>
      <Flex px={20} py={6} bgColor={"#1a1b1e"} justifyContent={"center"}>
        <Flex gap={2} alignItems={"center"} justifyContent={"center"}>
          <RiUserLocationFill size={30} />
          <Text fontWeight={500}>Geolocation Security Management</Text>
        </Flex>
        <Spacer />
        <Grid templateColumns="repeat(2, 1fr)" gap={5}>
          <GridItem>
            <Text
              color={"white"}
              _hover={{
                cursor: "pointer",
              }}
              onClick={() => window.open("https://github.com/thatjosh")}
            >
              GitHub
            </Text>
          </GridItem>
          <GridItem>
            <Text
              color={"white"}
              _hover={{
                cursor: "pointer",
              }}
              onClick={() => window.open("mailto: joshua.ang1909@gmail.com")}
            >
              Contact
            </Text>
          </GridItem>
        </Grid>
      </Flex>
      {/* <Box height={"1px"} bgColor={"#808080"} width={"100%"}></Box> */}
    </Box>
  );
};

export default NavBar;

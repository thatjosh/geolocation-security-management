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

// import logo from "../assets/{logo}.png";

const NavBar: React.FC = () => {
  return (
    <Box>
      <Flex px={20} py={6} bgColor={"#1a1b1e"} justifyContent={"center"}>
        <Flex>
          <Text>Geolocation Security Management</Text>
          {/* <Image src={logo} filter={"invert(1)"} maxWidth={"100px"} /> */}
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

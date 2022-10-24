import { Box, Flex, Grid, GridItem, Spacer, Text } from "@chakra-ui/react";

import { RiUserLocationFill } from "react-icons/ri";

const NavBar: React.FC = () => {
  return (
    <Box>
      <Flex
        px={"50px"}
        py={6}
        bgColor={"#1a1b1e"}
        justifyContent={"center"}
        minHeight={"10vh"}
      >
        <Flex gap={2} alignItems={"center"} justifyContent={"center"}>
          <RiUserLocationFill color={"white"} size={30} />
          <Text color={"white"} fontWeight={500}>
            Geolocation Security Management
          </Text>
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
    </Box>
  );
};

export default NavBar;

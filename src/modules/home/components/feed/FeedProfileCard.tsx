import { Box, Flex, Image, Text } from "@chakra-ui/react";
import tmpImg from "../../../../common/assets/tmp.jpg";
import profilePhoto from "../../../../common/assets/profilePhoto.png";

const FeedProfileCard: React.FC = () => {
  return (
    <Box
      rounded={"md"}
      width={"220px"}
      height={"150px"}
      transition={"transform 0.8s"}
      _hover={{
        transform: "scale(1.1)",
        cursor: "pointer",
      }}
    >
      <Image
        zIndex={1}
        rounded={"md"}
        width={"220px"}
        height={"150px"}
        objectFit={"cover"}
        src={tmpImg}
        loading={"lazy"}
      />
      <Box
        position={"relative"}
        zIndex={0}
        mt={"-150px"}
        rounded={"md"}
        height={"150px"}
        bgGradient={
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 2.4%, rgba(0, 0, 0, 0.65) 100%);"
        }
      />
      <Box position={"relative"} mt={"-65px"} px={3} width={"100%"}>
        <Flex
          gap={2}
          alignItems={"center"}
          _hover={{
            cursor: "pointer",
          }}
        >
          <Image
            rounded={"full"}
            width={"50px"}
            height={"50px"}
            objectFit={"cover"}
            src={profilePhoto}
          />
          <Flex flexDir={"column"} gap={1}>
            <Text>Guard name</Text>
            <Text fontSize={"10px"}>#guard1514</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default FeedProfileCard;

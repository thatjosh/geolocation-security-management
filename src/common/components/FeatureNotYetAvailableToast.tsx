import { Flex, Text } from "@chakra-ui/react";
import { AiFillInfoCircle } from "react-icons/ai";

const FeatureNotYetAvaialble: React.FC = () => {
  return (
    <Flex
      px={3}
      py={2}
      alignItems={"center"}
      justifyContent={"center"}
      gap={1}
      rounded={"5px"}
      bgGradient={"linear-gradient(88.84deg, #E1306C 1.99%, #F77737 98.01%)"}
      _hover={{
        cursor: "pointer",
      }}
      color={"#f3f3f3"}
      mb={20}
      boxShadow={"2xl"}
    >
      <AiFillInfoCircle />
      <Text fontSize={"12px"}>Feature not yet available!</Text>
    </Flex>
  );
};

export default FeatureNotYetAvaialble;

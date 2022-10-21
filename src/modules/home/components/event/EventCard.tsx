import { Box, Image, Text } from "@chakra-ui/react";
import tmpImg from "../../../../common/assets/tmp.jpg";

interface IProps {
  onOpen: () => void;
}

const EventCard: React.FC<IProps> = ({ onOpen }) => {
  return (
    <Box
      rounded={"md"}
      width={"220px"}
      height={"100px"}
      transition={"transform 0.8s"}
      _hover={{
        transform: "scale(1.1)",
        cursor: "pointer",
      }}
      onClick={onOpen}
    >
      <Box
        rounded={"md"}
        width={"220px"}
        bgColor={"#ffa463"}
        height={"100px"}
      />

      <Box
        position={"relative"}
        zIndex={0}
        mt={"-100px"}
        rounded={"md"}
        height={"100px"}
        bgGradient={
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 2.4%, rgba(0, 0, 0, 0.65) 100%);"
        }
      />
      <Box position={"relative"} mt={"-35px"} ml={5}>
        <Text>Card 1</Text>
      </Box>
    </Box>
  );
};

export default EventCard;

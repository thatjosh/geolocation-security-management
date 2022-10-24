import { Box, Image, Text } from "@chakra-ui/react";
import high_sev from "../../../../common/assets/banner/high_sev.png";
import mid_sev from "../../../../common/assets/banner/mid_sev.png";
import low_sev from "../../../../common/assets/banner/low_sev.png";

interface IProps {
  onOpen: () => void;
  severity: string;
  id: number;
  region: string;
}

const EventCard: React.FC<IProps> = ({ onOpen, severity, id, region }) => {
  let src_url = "";
  switch (severity) {
    case "high":
      src_url = high_sev;
      break;
    case "mid":
      src_url = mid_sev;
      break;
    case "low":
      src_url = low_sev;
      break;
    default:
      src_url = high_sev;
  }

  return (
    <Box
      rounded={"md"}
      width={220}
      height={"100px"}
      transition={"transform 0.8s"}
      _hover={{
        transform: "scale(1.1)",
        cursor: "pointer",
      }}
      onClick={onOpen}
      color={"white"}
    >
      {/* <Box
        rounded={"md"}
        width={"220px"}
        bgColor={"#ffa463"}
        height={"100px"}
      /> */}

      <Image
        rounded={"md"}
        width={"220px"}
        height={"100px"}
        objectFit={"cover"}
        src={src_url}
        boxShadow={"2xl"}
      />

      {/* <Box
        position={"relative"}
        zIndex={0}
        mt={"-100px"}
        rounded={"md"}
        height={"100px"}
        bgGradient={
          "linear-gradient(200deg, rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 0.65) 100%);"
        }
      /> */}
      <Box position={"relative"} mt={"-30px"} ml={5}>
        <Text fontSize={"12px"}>{`${region} #${id}`}</Text>
      </Box>
    </Box>
  );
};

export default EventCard;

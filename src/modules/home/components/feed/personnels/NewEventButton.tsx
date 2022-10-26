import { Flex, Text } from "@chakra-ui/react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import {
  GMapsCoordinates,
  IEvent,
} from "../../../../../common/interface/interface";

interface IProps {
  newEvent: boolean;
  setNewEvent: (event: boolean) => void;
}

const NewEventButton: React.FC<IProps> = ({ newEvent, setNewEvent }) => {
  return (
    <>
      <Flex
        px={4}
        py={1}
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
        rounded={"20px"}
        bgGradient={"linear-gradient(88.84deg, #E1306C 1.99%, #F77737 98.01%)"}
        _hover={{
          cursor: "pointer",
        }}
        onClick={() => setNewEvent(!newEvent)}
        color={"#f3f3f3"}
      >
        {!newEvent && (
          <>
            <Text fontSize={"12px"}>{"Add event"}</Text>
            <IoMdAddCircle />
          </>
        )}
        {newEvent && (
          <>
            <Text fontSize={"12px"}>{"Cancel"}</Text>
            <MdCancel />
          </>
        )}
      </Flex>
    </>
  );
};

export default NewEventButton;

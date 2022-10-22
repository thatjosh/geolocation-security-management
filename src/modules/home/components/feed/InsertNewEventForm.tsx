import {
  Flex,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import {
  BsFillCheckCircleFill,
  BsFillExclamationTriangleFill,
} from "react-icons/bs";
import { MdCancel } from "react-icons/md";

interface IProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const InsertNewEventForm: React.FC<IProps> = ({ isOpen, onOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
      // backdropFilter="blur(20px)"
      />
      <ModalContent
        width={"80%"}
        rounded={"md"}
        bgColor={"#333333"}
        px={10}
        py={50}
      >
        <Flex gap={2} flexDir={"column"}>
          <Flex gap={2} flexDir={"row"} alignItems={"center"} my={2}>
            <Text fontSize={"20px"}>Insert New Event</Text>
            <BsFillExclamationTriangleFill />
          </Flex>

          <Text fontSize={"14px"}>Event name</Text>
          <Input fontSize={"14px"} placeholder="Event name" />

          <Text fontSize={"14px"}>Severity level</Text>
          <Select fontSize={"14px"} placeholder="Choose severity level">
            <option value="option1">Low</option>
            <option value="option2">Mid</option>
            <option value="option3">High</option>
          </Select>

          <Text fontSize={"14px"}>Alert nearby personnels (up to 3km)</Text>
          <Select fontSize={"14px"}>
            <option value="option2">Yes</option>
            <option value="option3">No</option>
          </Select>

          <Text fontSize={"14px"}>Event details</Text>
          <Textarea fontSize={"14px"} placeholder="Insert details" />
          <Flex gap={2} flexDir={"row"} alignItems={"center"} my={2}>
            <Flex
              width={"50%"}
              gap={2}
              px={5}
              py={2}
              rounded={"5px"}
              bgGradient={
                "linear-gradient(88.84deg, #E1306C 1.99%, #F77737 98.01%)"
              }
              _hover={{
                cursor: "pointer",
              }}
              justifyContent={"center"}
            >
              <Text fontSize={"12px"}>{"Submit"}</Text>
              <BsFillCheckCircleFill />
            </Flex>
            <Flex
              gap={2}
              width={"50%"}
              px={5}
              py={2}
              rounded={"5px"}
              borderWidth={1}
              _hover={{
                cursor: "pointer",
              }}
              justifyContent={"center"}
              onClick={onClose}
            >
              <Text fontSize={"12px"}>{"Cancel"}</Text>
              <MdCancel />
            </Flex>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default InsertNewEventForm;

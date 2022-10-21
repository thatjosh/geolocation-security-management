import {
  Flex,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
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

const InsertNewEventModal: React.FC<IProps> = ({ isOpen, onOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropFilter="blur(20px)" />
      <ModalContent
        width={"80%"}
        rounded={"md"}
        bgColor={"#333333"}
        px={10}
        py={50}
      >
        <Flex gap={2} flexDir={"column"}>
          <Flex gap={2} flexDir={"row"} alignItems={"center"} my={2}>
            <Text fontSize={"16px"}>Insert new event</Text>
            <BsFillExclamationTriangleFill />
          </Flex>
          <Input fontSize={"14px"} placeholder="Event name" />
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

export default InsertNewEventModal;

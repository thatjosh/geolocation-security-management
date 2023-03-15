import {
  Flex,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import FeatureNotYetAvaialble from "../../../../common/components/FeatureNotYetAvailableToast";
import { IPersonnel } from "../../../../common/interface/interface";
import { capitaliseFirstChar } from "../../../../common/utils/helper";

interface IProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: IPersonnel;
}

const ProfileModal: React.FC<IProps> = ({ isOpen, onOpen, onClose, data }) => {
  const toast = useToast();

  return (
    <>
      {data && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            width={"80%"}
            rounded={"md"}
            bgColor={"#333333"}
            px={10}
            py={50}
            color={"white"}
          >
            <Flex gap={2} flexDir={"column"}>
              <Flex gap={2} flexDir={"row"} alignItems={"center"} my={2}>
                <Text fontSize={"20px"}>{`Personnel #${data?.id}`}</Text>
              </Flex>

              <Flex my={3} gap={2} flexDir={"column"}>
                <Text fontSize={"14px"}>Name</Text>
                <Input
                  fontSize={"14px"}
                  value={`${data.first_name} ${data.last_name_initial}.`}
                  isReadOnly={true}
                />
                <Text fontSize={"14px"}>Status</Text>
                <Input
                  fontSize={"14px"}
                  value={capitaliseFirstChar(data?.status)}
                  isReadOnly={true}
                />
                <Text fontSize={"14px"}>Area</Text>
                <Input fontSize={"14px"} value={data?.area} isReadOnly={true} />
                <Text fontSize={"14px"}>Region</Text>
                <Input
                  fontSize={"14px"}
                  value={data?.region}
                  isReadOnly={true}
                />
                <Text fontSize={"14px"}>Rank</Text>
                <Input fontSize={"14px"} value={data?.rank} isReadOnly={true} />
              </Flex>

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
                    cursor: "not-allowed",
                  }}
                  justifyContent={"center"}
                  onClick={() =>
                    toast({
                      position: "bottom",
                      duration: 2000,
                      render: () => <FeatureNotYetAvaialble />,
                    })
                  }
                >
                  <Text fontSize={"12px"}>{"Edit details"}</Text>
                  <BsFillCheckCircleFill />
                </Flex>
                <Flex
                  gap={2}
                  width={"50%"}
                  px={5}
                  py={2}
                  rounded={"5px"}
                  borderWidth={1}
                  borderColor={"#636363"}
                  _hover={{
                    cursor: "pointer",
                  }}
                  justifyContent={"center"}
                  onClick={onClose}
                >
                  <Text fontSize={"12px"}>{"Close"}</Text>
                  <MdCancel />
                </Flex>
              </Flex>
            </Flex>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default ProfileModal;

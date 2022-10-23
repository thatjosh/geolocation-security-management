import {
  Box,
  Flex,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  Spacer,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { IEvent } from "../../../../common/interface/interface";
import { getPersonnelsNotifiedString } from "../../../../common/utils/helper";

interface IProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: IEvent;
}

type MapOptions = google.maps.MapOptions;

const EventModal: React.FC<IProps> = ({ isOpen, onOpen, onClose, data }) => {
  const options = useMemo<MapOptions>(
    () => ({
      mapId: "b181cac70f27f5e6",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"6xl"}>
      <ModalOverlay />
      <ModalContent
        rounded={"md"}
        bgColor={"#333333"}
        px={10}
        py={5}
        width={"70vw"}
        height={"75vh"}
      >
        <Flex flexDir={"column"} my={2}>
          <Text fontSize={"20px"}>{`Event #${data?.id}`}</Text>
        </Flex>

        <Flex flexDir={"row"} gap={10}>
          <Flex gap={2} flexDir={"column"} width={"45%"}>
            <Text fontSize={"14px"}>Severity level</Text>
            <Select
              fontSize={"14px"}
              placeholder={data?.severity_level}
              isReadOnly={true}
            ></Select>

            <Text fontSize={"14px"}>{`Region`}</Text>
            <Input fontSize={"14px"} value={data?.region} isReadOnly={true} />

            <Text fontSize={"14px"}>Maps</Text>
            <GoogleMap
              mapContainerStyle={{
                width: "100%",
                height: "130px",
              }}
              center={data?.coordinate}
              options={options}
              zoom={18}
            >
              <MarkerF
                position={data?.coordinate}
                icon={{
                  url: "https://raw.githubusercontent.com/thatjosh/z-public-images/main/red%20event.png",
                  scaledSize: new google.maps.Size(28, 28),
                }}
              />
            </GoogleMap>
          </Flex>
          <Flex gap={2} flexDir={"column"} width={"45%"}>
            <Text fontSize={"14px"}>Status</Text>
            <Input fontSize={"14px"} value={data?.status} isReadOnly={true} />

            <Text fontSize={"14px"}>Personnels notified</Text>
            {data?.personnels_notified && (
              <Input
                fontSize={"14px"}
                value={getPersonnelsNotifiedString(data?.personnels_notified)}
                isReadOnly={true}
              />
            )}

            <Text fontSize={"14px"}>Event details</Text>
            <Textarea
              fontSize={"14px"}
              minHeight={"150px"}
              value={data?.details}
              isReadOnly={true}
            />
          </Flex>
        </Flex>

        <Spacer />

        <Box height={"1px"} width={"95%"} bgColor={"#737373"} mb={5}></Box>

        <Flex gap={2} flexDir={"row"} alignItems={"center"} my={2}>
          <Flex
            width={"15%"}
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
            <Text fontSize={"12px"}>{"Edit details"}</Text>
            <BsFillCheckCircleFill />
          </Flex>
          <Flex
            gap={2}
            width={"15%"}
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
            <Text fontSize={"12px"}>{"Close"}</Text>
            <MdCancel />
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default EventModal;

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

interface IProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

type MapOptions = google.maps.MapOptions;

const EventModal: React.FC<IProps> = ({ isOpen, onOpen, onClose }) => {
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
      <ModalOverlay
      // backdropFilter="blur(20px)"
      />
      <ModalContent
        rounded={"md"}
        bgColor={"#333333"}
        px={10}
        py={5}
        width={"70vw"}
        height={"75vh"}
      >
        <Flex flexDir={"column"} my={2}>
          <Text fontSize={"20px"}>Event #1324</Text>
        </Flex>

        <Flex flexDir={"row"} gap={10}>
          <Flex gap={2} flexDir={"column"} width={"45%"}>
            <Text fontSize={"14px"}>Event ID</Text>
            <Input
              fontSize={"14px"}
              placeholder={"784562"}
              _placeholder={{ color: "white" }}
              isReadOnly={true}
            />

            <Text fontSize={"14px"}>Severity level</Text>
            <Select
              fontSize={"14px"}
              placeholder={"Mid"}
              isReadOnly={true}
            ></Select>

            <Text fontSize={"14px"}>Maps</Text>
            <GoogleMap
              mapContainerStyle={{
                width: "100%",
                height: "150px",
              }}
              center={{
                lat: 43.38,
                lng: -80.14,
              }}
              options={options}
              zoom={18}
            >
              <MarkerF
                position={{
                  lat: 43.38,
                  lng: -80.14,
                }}
                icon={{
                  url: "https://raw.githubusercontent.com/thatjosh/z-public-images/main/red%20event.png",
                  scaledSize: new google.maps.Size(28, 28),
                }}
              />
            </GoogleMap>
          </Flex>
          <Flex gap={2} flexDir={"column"} width={"45%"}>
            <Text fontSize={"14px"}>Status</Text>
            <Input
              fontSize={"14px"}
              placeholder={"Active"}
              _placeholder={{ color: "white" }}
              isReadOnly={true}
            />

            <Text fontSize={"14px"}>Personnels notified</Text>
            <Input
              fontSize={"14px"}
              placeholder={"#3245, #4874, #0978"}
              _placeholder={{ color: "white" }}
              isReadOnly={true}
            />

            <Text fontSize={"14px"}>Event details</Text>
            <Textarea
              fontSize={"14px"}
              minHeight={"150px"}
              placeholder={
                "Two burglars broke into the gadget warehouse and stole four tablets."
              }
              _placeholder={{ color: "white" }}
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
            <Text fontSize={"12px"}>{"Edit"}</Text>
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

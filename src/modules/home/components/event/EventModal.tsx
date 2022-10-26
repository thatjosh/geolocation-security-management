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
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import { AiFillNotification } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { IEvent } from "../../../../common/interface/interface";
import {
  capitaliseFirstChar,
  getPersonnelsNotifiedString,
} from "../../../../common/utils/helper";
interface IProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: IEvent;
}

type MapOptions = google.maps.MapOptions;

const EventModal: React.FC<IProps> = ({ isOpen, onOpen, onClose, data }) => {
  const toast = useToast();

  const [personnelNotification, setShowPersonnelNotification] =
    useState<boolean>(false);

  const {
    isOpen: notificationisOpen,
    onOpen: notificationonOpen,
    onClose: notificationonClose,
  } = useDisclosure();

  const options = useMemo<MapOptions>(
    () => ({
      mapId: "b181cac70f27f5e6",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  const notificationType = [
    "Notify a particular personnel",
    "Notify closest personnel",
    "Notify all personnels within 5km radius",
    "Notify all personnels within the region",
  ];
  return (
    <>
      {data && (
        <Modal isOpen={isOpen} onClose={onClose} size={"6xl"}>
          <ModalOverlay />
          <ModalContent
            rounded={"md"}
            bgColor={"#333333"}
            px={10}
            py={5}
            width={"70vw"}
            height={"75vh"}
            color={"white"}
          >
            <Flex flexDir={"column"} my={2}>
              <Text fontSize={"20px"}>{`Event #${data?.id}`}</Text>
            </Flex>

            <Flex flexDir={"row"} gap={10}>
              <Flex gap={2} flexDir={"column"} width={"45%"}>
                <Text fontSize={"14px"}>Severity level</Text>
                <Select
                  fontSize={"14px"}
                  placeholder={capitaliseFirstChar(data?.severity_level)}
                  isReadOnly={true}
                ></Select>

                <Text fontSize={"14px"}>{`Region`}</Text>
                <Input
                  fontSize={"14px"}
                  value={data?.region}
                  isReadOnly={true}
                />

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
                <Input
                  fontSize={"14px"}
                  value={capitaliseFirstChar(data?.status)}
                  isReadOnly={true}
                />

                <Text fontSize={"14px"}>Personnels notified</Text>
                <Input
                  fontSize={"14px"}
                  value={getPersonnelsNotifiedString(data?.personnels_notified)}
                  isReadOnly={true}
                />

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
                width={"20%"}
                gap={2}
                px={2}
                py={2}
                rounded={"5px"}
                bgGradient={
                  "linear-gradient(88.84deg, #E1306C 1.99%, #F77737 98.01%)"
                }
                _hover={{
                  cursor: "pointer",
                }}
                justifyContent={"center"}
                onClick={
                  () => {
                    setShowPersonnelNotification(!personnelNotification);
                    notificationonOpen();
                  }
                  //   position: "bottom",
                  //   duration: 2000,
                  //   render: () => <FeatureNotYetAvaialble />,
                  // })
                }
              >
                <Text fontSize={"12px"}>{"Notify personnel(s)"}</Text>
                <BsFillCheckCircleFill />
              </Flex>
              <Flex
                gap={2}
                width={"15%"}
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
          </ModalContent>
        </Modal>
      )}
      <Modal
        isOpen={notificationisOpen}
        onClose={notificationonClose}
        size={"6xl"}
      >
        <ModalOverlay />
        <ModalContent
          rounded={"md"}
          bgColor={"#333333"}
          mt={150}
          width={"25vw"}
          height={"45vh"}
          color={"white"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Flex flexDir={"row"} my={2} alignItems={"center"} gap={2}>
            <AiFillNotification size={24} />
            <Text fontSize={"20px"}>{`Send Push Notification`}</Text>
          </Flex>

          <Flex flexDir={"column"} gap={2} mt={2}>
            {notificationType.map((notification) => {
              return (
                <Flex
                  gap={2}
                  width={"100%"}
                  px={8}
                  py={2}
                  rounded={"5px"}
                  borderWidth={1}
                  borderColor={"#636363"}
                  _hover={{
                    cursor: "not-allowed",
                    bgGradient:
                      "linear-gradient(88.84deg, #E1306C 1.99%, #F77737 98.01%)",
                    borderColor: "#3a3a3a",
                  }}
                  justifyContent={"center"}
                  onClick={notificationonClose}
                >
                  <Text fontSize={"12px"}>{notification}</Text>
                </Flex>
              );
            })}
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EventModal;

import {
  Box,
  Flex,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import tmpImg from "../../../../common/assets/tmp.jpg";
import { feed } from "../../../../common/data/seed";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useState, useMemo } from "react";
import FeedProfileCard from "./FeedProfileCard";

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

interface IProps {
  isLoaded: boolean;
}

const Feed: React.FC<IProps> = ({ isLoaded }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentView, setCurrentView] = useState<string>(feed[0]?.name);
  const center = useMemo<LatLngLiteral>(
    () => ({ lat: 43.45, lng: -80.49 }),
    []
  );
  const options = useMemo<MapOptions>(
    () => ({
      mapId: "b181cac70f27f5e6",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );
  const containerStyle = {
    width: "700px",
    height: "350px",
  };
  const [markerList, setMarkerList] = useState<any[]>([]);
  return (
    <Box px={5} pt={5} borderWidth={1} rounded={10}>
      <Flex gap={4}>
        {feed.map((category, key) => {
          return (
            <Box
              px={4}
              py={1}
              bgGradient={
                currentView === category?.name
                  ? "linear-gradient(88.84deg, #E1306C 1.99%, #F77737 98.01%)"
                  : ""
              }
              rounded={"full"}
              _hover={{
                bgGradient:
                  "linear-gradient(88.84deg, #E1306C 1.99%, #F77737 98.01%)",
                cursor: "pointer",
              }}
              onClick={() => {
                setCurrentView(category.name);
              }}
            >
              <Text fontSize={"12px"}>{category.name}</Text>
            </Box>
          );
        })}
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(20px)" />
        <ModalContent width={"80%"} rounded={"md"} bgColor={"#333333"}>
          <Image
            rounded={"md"}
            width={"100%"}
            loading={"lazy"}
            objectFit={"contain"}
            src={tmpImg}
            boxShadow={"2xl"}
          />
          <ModalCloseButton color={"white"} />
        </ModalContent>
      </Modal>

      <Flex flexDir={"row"} gap={1} justifyContent={"center"}>
        <Flex flexDir={"row"} flexWrap={"wrap"} gap={3} py={5}>
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              options={options}
              zoom={10}
              onClick={(data) =>
                setMarkerList(
                  markerList.concat(JSON.parse(JSON.stringify(data.latLng)))
                )
              }
            >
              {markerList.map((x, i) => (
                <MarkerF
                  position={x}
                  onClick={onOpen}
                  // icon={
                  //   "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
                  // }
                />
              ))}
            </GoogleMap>
          )}
          {[...Array(3)].map((x, i) => (
            <Box onClick={onOpen}>
              <FeedProfileCard />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Feed;

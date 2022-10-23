import {
  Box,
  Flex,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import {
  feedArea,
  event_list,
  personnel_list,
} from "../../../../common/data/seed";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useState, useMemo } from "react";
import FeedProfileCard from "./FeedProfileCard";
import { IoMdAddCircle } from "react-icons/Io";
import { MdOutlineConstruction } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import InsertNewEventForm from "./InsertNewEventForm";
import ProfileModal from "./ProfileModal";
import PersonnelTable from "./personnels/PersonnelTable";
import EventTable from "./events/EventsTable";

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

interface IProps {
  isLoaded: boolean;
  currentFeed: string;
}

const Feed: React.FC<IProps> = ({ isLoaded, currentFeed }) => {
  const [currentView, setCurrentView] = useState<string>(feedArea[0].name);
  const [newEvent, setNewEvent] = useState<boolean>();

  const [personnelID, setPersonnelID] = useState<number>(-1);

  const {
    isOpen: newEventisOpen,
    onOpen: newEventonOpen,
    onClose: newEventonClose,
  } = useDisclosure();

  const {
    isOpen: personnelisOpen,
    onOpen: personnelonOpen,
    onClose: personnelonClose,
  } = useDisclosure();

  const [areaCoordinates, setAreaCoordinates] = useState<any>({
    lat: 43.38,
    lng: -80.14,
  });
  const [markerList, setMarkerList] = useState<any[]>([]);
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

  return (
    <>
      {currentFeed && currentFeed == "Personnels" && (
        <PersonnelTable data={personnel_list} />
      )}
      {currentFeed && currentFeed == "Events" && (
        <EventTable data={event_list} isLoaded={isLoaded} />
      )}
      {currentFeed && currentFeed == "Communication" && (
        <>
          <Flex
            gap={2}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            py={20}
            borderWidth={1}
            rounded={10}
          >
            <MdOutlineConstruction size={50} />
            <Text>Feature is under development</Text>
          </Flex>
        </>
      )}
      {currentFeed && currentFeed == "Map visualiser" && (
        <Box px={5} py={5} borderWidth={1} rounded={10}>
          <Flex>
            <Flex gap={4}>
              {feedArea.map((area, key) => {
                return (
                  <Flex
                    px={4}
                    py={1}
                    bgGradient={
                      currentView === area?.name
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
                      setCurrentView(area.name);
                      setAreaCoordinates(area.coordinates);
                    }}
                  >
                    <Text fontSize={"12px"}>{area.name}</Text>
                  </Flex>
                );
              })}
            </Flex>
            <Spacer />
            <Flex
              px={4}
              py={1}
              alignItems={"center"}
              justifyContent={"center"}
              gap={1}
              rounded={"20px"}
              bgGradient={
                "linear-gradient(88.84deg, #E1306C 1.99%, #F77737 98.01%)"
              }
              _hover={{
                cursor: "pointer",
              }}
              onClick={() => setNewEvent(!newEvent)}
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
          </Flex>

          <InsertNewEventForm
            isOpen={newEventisOpen}
            onOpen={newEventonOpen}
            onClose={newEventonClose}
          />

          <Flex flexDir={"row"} gap={1} justifyContent={"center"}>
            <Flex flexDir={"row"} flexWrap={"wrap"} gap={3} py={5}>
              {isLoaded && (
                <>
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={areaCoordinates}
                    options={options}
                    zoom={10}
                    onClick={(_) => {
                      if (newEvent) {
                        newEventonOpen();
                        setMarkerList(
                          markerList.concat(
                            JSON.parse(JSON.stringify(_.latLng))
                          )
                        );
                      }
                    }}
                  >
                    {event_list.map((event, i) => (
                      <MarkerF
                        position={event.coordinate}
                        onClick={newEventonOpen}
                        icon={{
                          url: "https://raw.githubusercontent.com/thatjosh/z-public-images/main/red%20event.png",
                          scaledSize: new google.maps.Size(28, 28),
                        }}
                      />
                    ))}
                    {markerList.map((x, i) => (
                      <MarkerF
                        position={x}
                        onClick={newEventonOpen}
                        icon={{
                          url: "https://raw.githubusercontent.com/thatjosh/z-public-images/main/personnel.png",
                          scaledSize: new google.maps.Size(24, 24),
                        }}
                      />
                    ))}
                  </GoogleMap>
                </>
              )}

              <Flex width={"100%"}></Flex>

              <Flex flexDir={"column"} gap={1}>
                <Text mb={2} fontSize={14}>
                  Nearby personnels
                </Text>
                <Flex flexDir={"row"} gap={3}>
                  {personnel_list.map((personnel, key) => (
                    <>
                      <Box
                        onClick={(_) => {
                          personnelonOpen();
                          setPersonnelID(key);
                        }}
                      >
                        <FeedProfileCard data={personnel_list[key]} />
                      </Box>
                    </>
                  ))}
                </Flex>

                <ProfileModal
                  isOpen={personnelisOpen}
                  onOpen={personnelonOpen}
                  onClose={personnelonClose}
                  data={personnel_list[personnelID]}
                />
              </Flex>
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Feed;

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
import { feedArea, event_list } from "../../../../common/data/seed";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useState, useMemo } from "react";
import FeedProfileCard from "./FeedProfileCard";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineConstruction } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import InsertNewEventForm from "./InsertNewEventForm";
import ProfileModal from "./ProfileModal";
import PersonnelTable from "./personnels/PersonnelTable";
import EventTable from "./events/EventsTable";
import {
  new_event_list,
  new_feed_area,
  new_personnel_list,
} from "../../../../common/data/seed2";
import {
  GMapsCoordinates,
  IEvent,
  INewPersonnel,
} from "../../../../common/interface/interface";
import { useEffect } from "react";
import EventModal from "../event/EventModal";

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

interface IProps {
  isLoaded: boolean;
  currentFeed: string;
}

const Feed: React.FC<IProps> = ({ isLoaded, currentFeed }) => {
  const [currentView, setCurrentView] = useState<string>(new_feed_area[0].name);

  const [personnelData, setPersonnelData] =
    useState<INewPersonnel[]>(new_personnel_list);

  const [newEvent, setNewEvent] = useState<boolean>();
  const {
    isOpen: newEventisOpen,
    onOpen: newEventonOpen,
    onClose: newEventonClose,
  } = useDisclosure();

  const [personnelID, setPersonnelID] = useState<number>(-1);
  const {
    isOpen: personnelisOpen,
    onOpen: personnelonOpen,
    onClose: personnelonClose,
  } = useDisclosure();

  const [eventID, setEventID] = useState<number>(-1);
  const {
    isOpen: eventisOpen,
    onOpen: eventonOpen,
    onClose: eventonClose,
  } = useDisclosure();

  const [areaCoordinates, setAreaCoordinates] = useState<any>(
    new_feed_area[0].coordinates
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

  const [eventData, setEventData] = useState<IEvent[]>(new_event_list);
  const [currentCoordinate, setCurrentCoordinate] = useState<GMapsCoordinates>({
    lat: 0,
    lng: 0,
  });
  const handleAddingEvent = (event: IEvent) => {
    const oldData = [...eventData];
    oldData.push(event);
    setEventData(oldData); // Deep copy
  };

  return (
    <>
      {currentFeed && currentFeed == "Personnels" && (
        <PersonnelTable personnelData={personnelData} />
      )}
      {currentFeed && currentFeed == "Events" && (
        <EventTable eventData={eventData} isLoaded={isLoaded} />
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
            color={"#f3f3f3"}
          >
            <MdOutlineConstruction size={50} />
            <Text>Feature is under development</Text>
          </Flex>
        </>
      )}
      {currentFeed && currentFeed == "Map visualiser" && (
        <Box px={5} py={5} borderWidth={1} rounded={10}>
          <Flex>
            <Flex gap={2} flexWrap={"wrap"}>
              {new_feed_area.map((area, key) => {
                return (
                  <Flex
                    px={3}
                    py={2}
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
                    color={"white"}
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
          </Flex>

          <InsertNewEventForm
            isOpen={newEventisOpen}
            onOpen={newEventonOpen}
            onClose={newEventonClose}
            handleAddingEvent={handleAddingEvent}
            currentCoordinate={currentCoordinate}
          />

          <Flex flexDir={"row"} gap={1} justifyContent={"center"}>
            <Flex flexDir={"row"} flexWrap={"wrap"} gap={3} py={5}>
              {isLoaded && (
                <>
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={areaCoordinates}
                    options={options}
                    zoom={16}
                    onClick={(_) => {
                      if (newEvent) {
                        setCurrentCoordinate(
                          JSON.parse(JSON.stringify(_.latLng))
                        );
                        newEventonOpen();
                      }
                    }}
                  >
                    {eventData.map((event, key) => (
                      <MarkerF
                        position={event.coordinate}
                        onClick={(_) => {
                          setEventID(key);
                          eventonOpen();
                        }}
                        icon={{
                          url: "https://raw.githubusercontent.com/thatjosh/z-public-images/main/red%20event.png",
                          scaledSize: new google.maps.Size(28, 28),
                        }}
                      />
                    ))}
                    {personnelData.map((personnel, key) => (
                      <MarkerF
                        position={personnel.coordinate}
                        onClick={(_) => {
                          setPersonnelID(key);
                          personnelonOpen();
                        }}
                        icon={{
                          url: "https://raw.githubusercontent.com/thatjosh/z-public-images/main/personnel.png",
                          scaledSize: new google.maps.Size(15, 15),
                        }}
                      />
                    ))}
                    {/* {markerList.map((x, i) => (
                      <MarkerF
                        position={x}
                        onClick={newEventonOpen}
                        icon={{
                          url: "https://raw.githubusercontent.com/thatjosh/z-public-images/main/red%20event.png",
                          scaledSize: new google.maps.Size(20, 20),
                        }}
                      />
                    ))} */}
                  </GoogleMap>
                  <EventModal
                    isOpen={eventisOpen}
                    onOpen={eventonOpen}
                    onClose={eventonClose}
                    data={eventData[eventID]}
                  />
                </>
              )}

              <Flex width={"100%"}></Flex>

              <Flex color={"white"} flexDir={"column"} gap={1}>
                <Text mb={2} fontSize={14}>
                  Nearby personnels
                </Text>
                {personnelData && (
                  <Flex flexDir={"row"} gap={3}>
                    {personnelData.slice(0, 3).map((personnel, key) => (
                      <Box
                        onClick={(_) => {
                          personnelonOpen();
                          setPersonnelID(key);
                        }}
                      >
                        <FeedProfileCard data={personnelData[key]} />
                      </Box>
                    ))}
                  </Flex>
                )}

                {personnelData && (
                  <ProfileModal
                    isOpen={personnelisOpen}
                    onOpen={personnelonOpen}
                    onClose={personnelonClose}
                    data={personnelData[personnelID]}
                  />
                )}
              </Flex>
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Feed;

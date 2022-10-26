import { Box, Flex, Spacer, Text, useDisclosure } from "@chakra-ui/react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useState, useMemo, useEffect } from "react";
import FeedProfileCard from "./FeedProfileCard";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineConstruction } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import InsertNewEventForm from "./InsertNewEventForm";
import ProfileModal from "./ProfileModal";
import PersonnelTable from "./personnels/PersonnelTable";
import EventTable from "./events/EventsTable";
import { new_feed_area } from "../../../../common/data/seed2";
import {
  GMapsCoordinates,
  IEvent,
  IPersonnel,
} from "../../../../common/interface/interface";
import EventModal from "../event/EventModal";
import { getDatabase, ref, update } from "firebase/database";

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

interface IProps {
  isLoaded: boolean;
  currentFeed: string;
  personnelListData: IPersonnel[];
  eventListData: IEvent[];
}

const Feed: React.FC<IProps> = ({
  isLoaded,
  currentFeed,
  personnelListData,
  eventListData,
}) => {
  const [currentView, setCurrentView] = useState<string>(new_feed_area[0].name);
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
    width: "100%",
    height: "350px",
  };

  const [currentCoordinate, setCurrentCoordinate] = useState<GMapsCoordinates>({
    lat: 0,
    lng: 0,
  });

  const handleAddingEvent = (event: IEvent) => {
    const eventData = [...eventListData];
    const db = getDatabase();
    eventData.push(event);

    const updates: any = {};
    updates["event"] = eventData;
    update(ref(db), updates);
  };

  return (
    <>
      {currentFeed && currentFeed == "Personnels" && personnelListData && (
        <PersonnelTable personnelData={personnelListData} />
      )}
      {currentFeed && currentFeed == "Events" && (
        <EventTable eventData={eventListData} isLoaded={isLoaded} />
      )}
      {currentFeed && currentFeed == "Communication" && (
        <>
          <Flex
            gap={2}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            py={20}
            rounded={10}
            borderWidth={1}
            borderColor={"#3a3a3a"}
            color={"#f3f3f3"}
          >
            <MdOutlineConstruction size={50} />
            <Text>Feature is under development</Text>
          </Flex>
        </>
      )}
      {currentFeed && currentFeed == "Map visualiser" && (
        <Box px={5} py={5} borderWidth={1} borderColor={"#3a3a3a"} rounded={10}>
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
            <Flex
              flexDir={"row"}
              flexWrap={"wrap"}
              gap={3}
              py={5}
              px={3}
              width={[350, 450, 550, 650, 800]}
            >
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
                    {eventListData.map((event, key) => (
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
                    {personnelListData &&
                      personnelListData.map((personnel, key) => (
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
                    data={eventListData[eventID]}
                  />
                </>
              )}

              <Flex width={"100%"}></Flex>

              <Flex color={"white"} flexDir={"column"} gap={1}>
                <Text mb={2} fontSize={14}>
                  Nearby personnels
                </Text>
                {personnelListData && (
                  <Flex flexDir={"row"} gap={3} flexWrap={"wrap"}>
                    {personnelListData.slice(0, 3).map((personnel, key) => (
                      <Box
                        onClick={(_) => {
                          personnelonOpen();
                          setPersonnelID(key);
                        }}
                      >
                        <FeedProfileCard data={personnelListData[key]} />
                      </Box>
                    ))}
                  </Flex>
                )}

                {personnelListData && (
                  <ProfileModal
                    isOpen={personnelisOpen}
                    onOpen={personnelonOpen}
                    onClose={personnelonClose}
                    data={personnelListData[personnelID]}
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

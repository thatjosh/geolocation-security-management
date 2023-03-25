import { Box, Flex, Spacer, Text, useDisclosure } from "@chakra-ui/react";
import { useState, useMemo, useEffect } from "react";
import FeedProfileCard from "./FeedProfileCard";
import { MdExpandMore, MdOutlineConstruction } from "react-icons/md";
import InsertNewEventForm from "./InsertNewEventForm";
import ProfileModal from "../profile/ProfileModal";
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
import {
  findPersonnelKey,
  nearbyPersonnels,
} from "../../../../common/utils/helper";
import NewEventButton from "./NewEventButton";
import GMaps from "./map-visualiser/GMaps";
import NearbyPersonnel from "./personnels/NearbyPersonnelModal";
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
  const [newEvent, setNewEvent] = useState<boolean>(false);
  const {
    isOpen: newEventisOpen,
    onOpen: newEventonOpen,
    onClose: newEventonClose,
  } = useDisclosure();

  // Disclosure hook to open the personnel modal
  const [nearbyPersonnel, setNearbyPersonnel] =
    useState<IPersonnel[]>(personnelListData);

  useEffect(() => {
    setNearbyPersonnel(nearbyPersonnels(personnelListData, currentView));
    console.log(currentView, nearbyPersonnel);
  }, [currentView]);

  // Disclosure hook to open the personnel modal
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

  const {
    isOpen: nearbyPersonnelisOpen,
    onOpen: nearbyPersonnelonOpen,
    onClose: nearbyPersonnelonClose,
  } = useDisclosure();

  return (
    <>
      {/* Conditionally render feed based on tabs clicked */}

      {/* 1. Personnel */}
      {currentFeed && currentFeed == "Personnels" && personnelListData && (
        <PersonnelTable
          personnelData={personnelListData}
          title={"Personnels"}
        />
      )}

      {/* 2. Events */}
      {currentFeed && currentFeed == "Events" && (
        <EventTable eventData={eventListData} isLoaded={isLoaded} />
      )}

      {/* 3. Communication */}
      {currentFeed && currentFeed == "Communication" && (
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
      )}

      {/* 4. Map visualiser */}
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
            <NewEventButton newEvent={newEvent} setNewEvent={setNewEvent} />
          </Flex>

          <InsertNewEventForm
            isOpen={newEventisOpen}
            onOpen={newEventonOpen}
            onClose={newEventonClose}
            handleAddingEvent={handleAddingEvent}
            currentCoordinate={currentCoordinate}
            latestIndex={eventListData[eventListData.length - 1].id}
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
                  <GMaps
                    areaCoordinates={areaCoordinates}
                    eventListData={eventListData}
                    personnelListData={personnelListData}
                    setCurrentCoordinate={setCurrentCoordinate}
                    eventonOpen={eventonOpen}
                    newEvent={newEvent}
                    newEventonOpen={newEventonOpen}
                    setEventID={setEventID}
                    setPersonnelID={setPersonnelID}
                    personnelonOpen={personnelonOpen}
                  />
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
                <Text
                  mb={2}
                  fontSize={14}
                  onClick={nearbyPersonnelonOpen}
                  _hover={{
                    cursor: "pointer",
                  }}
                >
                  Nearby Personnels
                </Text>
                <Flex alignItems={"center"}>
                  {personnelListData && (
                    <Flex flexDir={"row"} gap={3} flexWrap={"wrap"}>
                      {nearbyPersonnel.slice(0, 3).map((personnel, key) => (
                        <Box
                          onClick={(_) => {
                            personnelonOpen();
                            setPersonnelID(
                              findPersonnelKey(personnel.id, personnelListData)
                            );
                          }}
                        >
                          <FeedProfileCard data={nearbyPersonnel[key]} />
                        </Box>
                      ))}
                    </Flex>
                  )}
                  <Box
                    mx={3}
                    px={1}
                    rounded={"full"}
                    bgColor={"#636363"}
                    transition={"transform 0.8s"}
                    _hover={{
                      transform: "scale(1.3)",
                      cursor: "pointer",
                    }}
                    onClick={nearbyPersonnelonOpen}
                  >
                    <MdExpandMore />
                  </Box>
                  <NearbyPersonnel
                    nearbyPersonnelisOpen={nearbyPersonnelisOpen}
                    nearbyPersonnelonOpen={nearbyPersonnelonOpen}
                    nearbyPersonnelonClose={nearbyPersonnelonClose}
                    personnelData={nearbyPersonnel}
                  />
                </Flex>
              </Flex>

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
        </Box>
      )}
    </>
  );
};

export default Feed;

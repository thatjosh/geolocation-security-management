import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import {
  area_coordinates,
  feed,
  guard_coordinates,
  personnel_list,
} from "../../../../common/data/seed";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useState, useMemo, useEffect } from "react";
import FeedProfileCard from "./FeedProfileCard";
import { IoMdAddCircle } from "react-icons/Io";
import { MdCancel } from "react-icons/md";
import InsertNewEventForm from "./InsertNewEventForm";

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

interface IProps {
  isLoaded: boolean;
}

const Feed: React.FC<IProps> = ({ isLoaded }) => {
  const [currentView, setCurrentView] = useState<string>(feed[0]?.name);
  const [newEvent, setNewEvent] = useState<boolean>();

  const {
    isOpen: newEventisOpen,
    onOpen: newEventonOpen,
    onClose: newEventonClose,
  } = useDisclosure();

  const [areaCoordinates, setAreaCoordinates] = useState<any>({
    lat: 43.38,
    lng: -80.14,
  });
  const [markerList, setMarkerList] = useState<any[]>([]);
  // const center = useMemo<LatLngLiteral>(
  //   () => ({ lat: 43.45, lng: -80.49 }),
  //   []
  // );
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
                  setAreaCoordinates(area_coordinates[key].coordinates);
                }}
              >
                <Text fontSize={"12px"}>{category.name}</Text>
              </Box>
            );
          })}
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
                        markerList.concat(JSON.parse(JSON.stringify(_.latLng)))
                      );
                    }
                  }}
                >
                  {guard_coordinates.map((x, i) => (
                    <MarkerF
                      position={x}
                      onClick={newEventonOpen}
                      icon={{
                        url: "https://raw.githubusercontent.com/thatjosh/z-public-images/main/green%20event.png",
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

            <Flex width={"100%"}>
              <Flex
                px={4}
                py={1}
                my={1}
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

            {[...Array(3)].map((x, i) => (
              <Box onClick={newEventonOpen}>
                <FeedProfileCard />
              </Box>
            ))}
          </Flex>
        </Flex>
      </Box>
      <Box px={5} py={5} borderWidth={1} rounded={10}>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Personnel ID</Th>
                <Th>Personnel Name</Th>
                <Th>Status</Th>
                <Th>Area</Th>
                <Th>Region</Th>
                <Th>Rank</Th>
              </Tr>
            </Thead>
            <Tbody>
              {personnel_list.map((personnel, key) => {
                return (
                  <Tr>
                    <Td>{key + 1}</Td>
                    <Td>{personnel.id}</Td>
                    <Td>{personnel.name}</Td>
                    <Td>{personnel.status}</Td>
                    <Td>{personnel.area}</Td>
                    <Td>{personnel.region}</Td>
                    <Td>{personnel.rank}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Feed;

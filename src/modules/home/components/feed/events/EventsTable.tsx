import {
  Box,
  Flex,
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
import { BiShow } from "react-icons/bi";
import { IoMdMore } from "react-icons/io";
import { IEvent } from "../../../../../common/interface/interface";
import EventModal from "../../event/EventModal";
import { useState } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import {
  capitaliseFirstChar,
  getEventStatusColour,
  getSeverityLevelColour,
} from "../../../../../common/utils/helper";
interface IProps {
  eventData: IEvent[];
  isLoaded: boolean;
}

const EventTable: React.FC<IProps> = ({ eventData, isLoaded }) => {
  const {
    isOpen: eventisOpen,
    onOpen: eventonOpen,
    onClose: eventonClose,
  } = useDisclosure();

  const [eventID, setEventID] = useState<number>(-1);

  function showEventDetails(key: number) {
    eventonOpen();
    setEventID(key);
  }

  return (
    <>
      {eventData && (
        <Box
          px={5}
          py={5}
          borderWidth={1}
          borderColor={"#3a3a3a"}
          rounded={10}
          color={"white"}
        >
          <>
            <Text fontSize={"20px"} mb={2}>
              Events
            </Text>
            <TableContainer>
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th color={"white"}>#</Th>
                    <Th color={"white"}>Event ID</Th>
                    <Th color={"white"}>Severity level</Th>
                    <Th color={"white"}>Status</Th>
                    <Th color={"white"}>Region</Th>
                    <Th color={"white"}>More</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {eventData.map((event, key) => {
                    return (
                      <Tr
                        onClick={(_) => showEventDetails(key)}
                        _hover={{
                          cursor: "pointer",
                        }}
                      >
                        <Td>{key + 1}</Td>
                        <Td>{event.id}</Td>
                        <Td>
                          <Flex flexDir={"row"} gap={2} alignItems={"center"}>
                            <BsFillCircleFill
                              size={6}
                              color={getSeverityLevelColour(
                                event.severity_level
                              )}
                            />
                            {capitaliseFirstChar(event.severity_level)}
                          </Flex>
                        </Td>
                        <Td>
                          <Flex flexDir={"row"} gap={2} alignItems={"center"}>
                            <BsFillCircleFill
                              size={6}
                              color={getEventStatusColour(event.status)}
                            />
                            {event.status}
                          </Flex>
                        </Td>
                        <Td>{event.region}</Td>
                        <Td>
                          <Flex
                            gap={1}
                            _hover={{
                              cursor: "pointer",
                            }}
                          >
                            <BiShow onClick={(_) => showEventDetails(key)} />
                            <IoMdMore
                              onClick={(event) => event.stopPropagation()}
                            />
                          </Flex>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </>
        </Box>
      )}
      {eventData && isLoaded && (
        <EventModal
          isOpen={eventisOpen}
          onOpen={eventonOpen}
          onClose={eventonClose}
          data={eventData[eventID]}
        />
      )}
    </>
  );
};

export default EventTable;

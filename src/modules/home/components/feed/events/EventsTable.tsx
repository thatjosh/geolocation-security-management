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
import { IoMdMore } from "react-icons/Io";
import { IEvent } from "../../../../../common/interface/interface";
import EventModal from "../../event/EventModal";
import { useState } from "react";
import { new_event_list } from "../../../../../common/data/seed2";
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

  return (
    <>
      {eventData && (
        <Box px={5} py={5} borderWidth={1} rounded={10}>
          <>
            <Text fontSize={"20px"} mb={2}>
              Events
            </Text>
            <TableContainer>
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>#</Th>
                    <Th>Event ID</Th>
                    <Th>Severity level</Th>
                    <Th>Status</Th>
                    <Th>Region</Th>
                    <Th>More</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {eventData.map((event, key) => {
                    return (
                      <Tr>
                        <Td>{key + 1}</Td>
                        <Td>{event.id}</Td>
                        <Td>{event.severity_level}</Td>
                        <Td>{event.status}</Td>
                        <Td>{event.region}</Td>
                        <Td>
                          <Flex
                            gap={1}
                            _hover={{
                              cursor: "pointer",
                            }}
                          >
                            <BiShow
                              onClick={(_) => {
                                eventonOpen();
                                setEventID(key);
                              }}
                            />
                            <IoMdMore />
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

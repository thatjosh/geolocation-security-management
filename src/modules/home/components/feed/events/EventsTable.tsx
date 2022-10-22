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
interface IProps {
  data: IEvent[];
  isLoaded: boolean;
}

const EventTable: React.FC<IProps> = ({ data, isLoaded }) => {
  const {
    isOpen: eventisOpen,
    onOpen: eventonOpen,
    onClose: eventonClose,
  } = useDisclosure();

  const [eventID, setEventID] = useState<number>(-1);

  return (
    <>
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
                  <Th>Coordinates</Th>
                  <Th>Personnels notified</Th>
                  <Th>More</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((event, key) => {
                  return (
                    <Tr>
                      <Td>{key + 1}</Td>
                      <Td>{event.id}</Td>
                      <Td>{event.severity_level}</Td>
                      <Td>{event.status}</Td>
                      <Td>{`${event.coordinate.lat}, ${event.coordinate.lng}`}</Td>
                      <Td>{JSON.stringify(event.personnels_notified)}</Td>
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
      {isLoaded && (
        <EventModal
          isOpen={eventisOpen}
          onOpen={eventonOpen}
          onClose={eventonClose}
          data={data[eventID]}
        />
      )}
    </>
  );
};

export default EventTable;

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
import { INewPersonnel } from "../../../../../common/interface/interface";
import { useState } from "react";
import ProfileModal from "../ProfileModal";

interface IProps {
  personnelData: INewPersonnel[];
}

const PersonnelTable: React.FC<IProps> = ({ personnelData }) => {
  const [personnelID, setPersonnelID] = useState<number>(-1);

  const {
    isOpen: personnelisOpen,
    onOpen: personnelonOpen,
    onClose: personnelonClose,
  } = useDisclosure();

  return (
    <>
      <Box px={5} py={5} borderWidth={1} rounded={10}>
        <Box
          maxHeight={600}
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#3a3a3a",
              borderRadius: "24px",
            },
          }}
          pr={3}
        >
          <Text fontSize={"20px"} mb={2}>
            Personnels
          </Text>
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Personnel ID</Th>
                  <Th>Name</Th>
                  <Th>Status</Th>
                  <Th>Region</Th>
                  <Th>Rank</Th>
                  <Th>More</Th>
                </Tr>
              </Thead>
              <Tbody>
                {personnelData.map((personnel, key) => {
                  return (
                    <Tr>
                      <Td>{key + 1}</Td>
                      <Td>{personnel.id}</Td>
                      <Td>{`${personnel.first_name} ${personnel.last_name_initial}.`}</Td>
                      <Td>{personnel.status}</Td>
                      <Td>{personnel.region}</Td>
                      <Td>{personnel.rank}</Td>
                      <Td>
                        <Flex
                          gap={1}
                          _hover={{
                            cursor: "pointer",
                          }}
                        >
                          <BiShow
                            onClick={(_) => {
                              personnelonOpen();
                              setPersonnelID(key);
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
        </Box>
      </Box>
      <ProfileModal
        isOpen={personnelisOpen}
        onOpen={personnelonOpen}
        onClose={personnelonClose}
        data={personnelData[personnelID]}
      />
    </>
  );
};

export default PersonnelTable;

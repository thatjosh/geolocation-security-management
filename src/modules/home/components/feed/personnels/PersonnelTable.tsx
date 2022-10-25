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
import { IPersonnel } from "../../../../../common/interface/interface";
import { useState } from "react";
import ProfileModal from "../ProfileModal";

interface IProps {
  personnelData: IPersonnel[];
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
      <Box px={5} py={5} borderWidth={1} rounded={10} color={"white"}>
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
                  <Th color={"white"}>#</Th>
                  <Th color={"white"}>Personnel ID</Th>
                  <Th color={"white"}>Name</Th>
                  <Th color={"white"}>Status</Th>
                  <Th color={"white"}>Region</Th>
                  <Th color={"white"}>Rank</Th>
                  <Th color={"white"}>More</Th>
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

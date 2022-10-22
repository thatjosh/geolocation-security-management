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
} from "@chakra-ui/react";
import { BiShow } from "react-icons/bi";
import { IoMdMore } from "react-icons/Io";
import { IPersonnel } from "../../../../../common/interface/interface";

interface IProps {
  data: IPersonnel[];
}

const PersonnelTable: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <Box px={5} py={5} borderWidth={1} rounded={10}>
        <Text fontSize={"20px"} mb={2}>
          Personnels
        </Text>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Personnel ID</Th>
                <Th>Personnel Name</Th>
                <Th>Status</Th>
                <Th>Region</Th>
                <Th>Rank</Th>
                <Th>More</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((personnel, key) => {
                return (
                  <Tr>
                    <Td>{key + 1}</Td>
                    <Td>{personnel.id}</Td>
                    <Td>{personnel.name}</Td>
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
                        <BiShow />
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
    </>
  );
};

export default PersonnelTable;

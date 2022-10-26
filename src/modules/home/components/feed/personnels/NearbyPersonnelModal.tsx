import {
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { IPersonnel } from "../../../../../common/interface/interface";
import PersonnelTable from "./PersonnelTable";

interface IProps {
  nearbyPersonnelisOpen: boolean;
  nearbyPersonnelonOpen: () => void;
  nearbyPersonnelonClose: () => void;
  personnelData: IPersonnel[];
}

const NearbyPersonnel: React.FC<IProps> = ({
  nearbyPersonnelisOpen,
  nearbyPersonnelonOpen,
  nearbyPersonnelonClose,
  personnelData,
}) => {
  return (
    <>
      <Modal
        isOpen={nearbyPersonnelisOpen}
        onClose={nearbyPersonnelonClose}
        size={"6xl"}
      >
        <ModalOverlay />
        <ModalContent
          rounded={"md"}
          bgColor={"#3a3a3a"}
          width={"85vw"}
          height={"80vh"}
          mt={10}
          py={5}
          px={10}
          color={"white"}
        >
          <ModalCloseButton onClick={nearbyPersonnelonClose} />
          <PersonnelTable
            personnelData={personnelData}
            title={"Nearby Personnels"}
          />
        </ModalContent>
      </Modal>
    </>
  );
};

export default NearbyPersonnel;

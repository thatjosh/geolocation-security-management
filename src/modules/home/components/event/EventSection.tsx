import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import EventCard from "./EventCard";
import EventModal from "./EventModal";

const EventSection: React.FC = () => {
  const {
    isOpen: eventisOpen,
    onOpen: eventonOpen,
    onClose: eventonClose,
  } = useDisclosure();
  return (
    <>
      <Flex
        height={"100%"}
        width={260}
        px={5}
        py={5}
        flexDir={"column"}
        gap={4}
        borderWidth={1}
        rounded={10}
      >
        <Text>Events</Text>
        <EventCard onOpen={eventonOpen} />
        <EventCard onOpen={eventonOpen} />
        <EventCard onOpen={eventonOpen} />
      </Flex>

      <EventModal
        isOpen={eventisOpen}
        onOpen={eventonOpen}
        onClose={eventonClose}
      />
    </>
  );
};

export default EventSection;

import { Flex, Text } from "@chakra-ui/react";
import EventCard from "./EventCard";

const EventSection: React.FC = () => {
  return (
    <Flex
      height={"100%"}
      width={260}
      px={5}
      py={5}
      flexDir={"column"}
      gap={5}
      borderWidth={1}
      rounded={10}
    >
      <Text>Events</Text>
      <EventCard />
      <EventCard />
      <EventCard />
    </Flex>
  );
};

export default EventSection;

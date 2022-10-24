import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { new_event_list } from "../../../../common/data/seed2";
import { IEvent } from "../../../../common/interface/interface";
import EventCard from "./EventCard";
import EventModal from "./EventModal";

interface IProps {
  isLoaded: boolean;
}

const EventSection: React.FC<IProps> = ({ isLoaded }) => {
  const {
    isOpen: eventisOpen,
    onOpen: eventonOpen,
    onClose: eventonClose,
  } = useDisclosure();

  const [eventID, setEventID] = useState<number>(-1);
  const [eventData, setEventData] = useState<IEvent[]>(new_event_list);

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
        <Text>New events</Text>
        {eventData &&
          eventData.slice(0, 3).map((event, key) => {
            return (
              <>
                <Box onClick={() => setEventID(key)}>
                  <EventCard
                    onOpen={eventonOpen}
                    severity={event?.severity_level}
                    id={event?.id}
                    region={event.region}
                  />
                </Box>
              </>
            );
          })}
        {isLoaded && (
          <EventModal
            isOpen={eventisOpen}
            onOpen={eventonOpen}
            onClose={eventonClose}
            data={eventData[eventID]}
          />
        )}
      </Flex>
    </>
  );
};

export default EventSection;

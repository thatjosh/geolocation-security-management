import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import NavBar from "../../common/components/NavBar";
import Feed from "./components/feed/Feed";
import useMobileViewToggle from "../../common/utils/useMobileViewToggle";
import FeedSkeleton from "./components/feed/FeedSkeleton";
import EventSection from "./components/event/EventSection";
import EventSectionSkeleton from "./components/event/EventSectionSkeleton";
import ProfileSection from "./components/profile/ProfileSection";
import { useJsApiLoader, useLoadScript } from "@react-google-maps/api";
import ProfileSectionSkeleton from "./components/profile/ProfileSectionSkeleton";
import { useState } from "react";
import usePersonnelList from "../../common/data/hooks/usePersonnelList";
import useEventList from "../../common/data/hooks/useEventList";

const HomePage: React.FC = () => {
  const {
    data: personnel_data,
    isLoading: personnel_isLoading,
    isError: personnel_isError,
  } = usePersonnelList();

  const {
    data: event_data,
    isLoading: event_isLoading,
    isError: event_isError,
  } = useEventList();

  const mobileView = useMobileViewToggle();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API,
    libraries: ["places"],
  });

  const [currentFeed, setCurrentFeed] = useState<string>("Map visualiser");
  const handleFeedSwitch = (feedSwitch: string) => {
    setCurrentFeed(feedSwitch);
  };

  const [isLargerThan1080] = useMediaQuery("(min-width: 1080px)");

  return (
    <>
      <NavBar />

      <Flex
        flexDir={"row"}
        px={20}
        py={5}
        bgColor={"#141517"}
        justifyContent={"center"}
        gap={5}
        minHeight={"90vh"}
      >
        {!mobileView && (
          <>
            {personnel_isLoading && <ProfileSectionSkeleton />}
            {!personnel_isLoading && (
              <ProfileSection
                feedSwitch={handleFeedSwitch}
                currentFeed={currentFeed}
              />
            )}
          </>
        )}

        {personnel_isLoading && <FeedSkeleton />}
        {!personnel_isLoading && event_data && personnel_data && (
          <Box width={[550, 650, 800]}>
            <Feed
              isLoaded={isLoaded}
              currentFeed={currentFeed}
              personnelListData={personnel_data}
              eventListData={event_data}
            />
          </Box>
        )}

        {!mobileView && isLargerThan1080 && (
          <>
            {event_isLoading && <EventSectionSkeleton />}
            {!event_isLoading && event_data && (
              <EventSection isLoaded={isLoaded} eventListData={event_data} />
            )}
          </>
        )}
      </Flex>
    </>
  );
};

export default HomePage;

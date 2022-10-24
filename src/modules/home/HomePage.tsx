import { Box, Button, Flex, useColorMode } from "@chakra-ui/react";
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

const HomePage: React.FC = () => {
  const mobileView = useMobileViewToggle();
  const isLoading = false;
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API,
    libraries: ["places"],
  });

  const [currentFeed, setCurrentFeed] = useState<string>("Map visualiser");
  const handleFeedSwitch = (feedSwitch: string) => {
    setCurrentFeed(feedSwitch);
  };

  const { colorMode, toggleColorMode } = useColorMode();

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
            {isLoading && <ProfileSectionSkeleton />}
            {!isLoading && (
              <ProfileSection
                feedSwitch={handleFeedSwitch}
                currentFeed={currentFeed}
              />
            )}
          </>
        )}

        <Box width={[650, 550, 650, 750]}>
          {isLoading && <FeedSkeleton />}
          {!isLoading && <Feed isLoaded={isLoaded} currentFeed={currentFeed} />}
        </Box>

        {!mobileView && (
          <>
            {isLoading && <EventSectionSkeleton />}
            {!isLoading && <EventSection isLoaded={isLoaded} />}
          </>
        )}
      </Flex>
    </>
  );
};

export default HomePage;

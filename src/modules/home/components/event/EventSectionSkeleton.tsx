import { Flex, Skeleton } from "@chakra-ui/react";

const EventSectionSkeleton: React.FC = () => {
  return (
    <Flex height={"100%"} width={250} py={5} pt={65} flexDir={"column"} gap={3}>
      <Skeleton width={"100%"} height={100} />
      <Skeleton width={"100%"} height={100} />
      <Skeleton width={"100%"} height={100} />
    </Flex>
  );
};

export default EventSectionSkeleton;

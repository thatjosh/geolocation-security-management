import { Flex, Skeleton } from "@chakra-ui/react";

const ProfileSectionSkeleton: React.FC = () => {
  return (
    <Flex height={"100%"} width={250} py={5} flexDir={"column"} gap={3}>
      <Skeleton width={"100%"} height={100} />
      <Skeleton width={"100%"} height={50} />
      <Skeleton width={"100%"} height={50} />
      <Skeleton width={"100%"} height={50} />
    </Flex>
  );
};

export default ProfileSectionSkeleton;

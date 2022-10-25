import { Box, Flex, Skeleton, useDisclosure } from "@chakra-ui/react";

const FeedSkeleton: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box py={4}>
      <Flex gap={3}>
        <Skeleton rounded={"full"} width={20} height={6} />
        <Skeleton rounded={"full"} width={20} height={6} />
        <Skeleton rounded={"full"} width={20} height={6} />
      </Flex>

      <Flex flexDir={"row"} gap={1} justifyContent={"center"}>
        <Flex flexDir={"row"} flexWrap={"wrap"} gap={3} py={5} maxWidth={690}>
          <Skeleton width={690} height={350} />
          {[...Array(3)].map((x, i) => (
            <>
              <Box onClick={onOpen}>
                <Skeleton width={222} height={150} />
              </Box>
            </>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default FeedSkeleton;

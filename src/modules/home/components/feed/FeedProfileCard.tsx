import { Box, Flex, Image, Text } from "@chakra-ui/react";
import profilePhoto from "../../../../common/assets/profilePhoto.png";
import { IPersonnel } from "../../../../common/interface/interface";
import personnel from "../../../../common/assets/banner/personnel.png";
interface IProps {
  data: IPersonnel;
}

const FeedProfileCard: React.FC<IProps> = ({ data }) => {
  return (
    <>
      {data && (
        <Box
          rounded={"md"}
          width={"220px"}
          height={"100px"}
          transition={"transform 0.8s"}
          _hover={{
            transform: "scale(1.1)",
            cursor: "pointer",
          }}
          color={"white"}
        >
          <Image
            rounded={"md"}
            width={"220px"}
            height={"100px"}
            objectFit={"cover"}
            src={personnel}
            boxShadow={"2xl"}
          />
          <Box position={"relative"} mt={"-72px"} px={3} width={"100%"}>
            <Flex
              gap={2}
              alignItems={"center"}
              _hover={{
                cursor: "pointer",
              }}
            >
              <Image
                rounded={"full"}
                width={"50px"}
                height={"50px"}
                objectFit={"cover"}
                src={profilePhoto}
              />
              <Flex flexDir={"column"} gap={1}>
                <Text
                  fontSize={"14px"}
                >{`${data?.first_name} ${data?.last_name_initial}.`}</Text>
                <Text fontSize={"10px"}>{`#${data?.id}`}</Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
      )}
    </>
  );
};

export default FeedProfileCard;

import { Flex, Image, Text } from "@chakra-ui/react";
import { BsPersonCheckFill } from "react-icons/bs";
import { HiChat } from "react-icons/hi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import profilePhoto from "../../../../common/assets/profilePhoto.png";

interface IProps {
  feedSwitch: (feedSwitch: string) => void;
  currentFeed: string;
}

const ProfileSection: React.FC<IProps> = ({ feedSwitch, currentFeed }) => {
  const profileSection = [
    {
      title: "Map visualiser",
      icon: <FaMapMarkedAlt />,
    },
    {
      title: "Personnels",
      icon: <BsPersonCheckFill />,
    },
    {
      title: "Events",
      icon: <BsFillExclamationTriangleFill />,
    },
    {
      title: "Communication",
      icon: <HiChat />,
    },
  ];

  return (
    <Flex flexDir={"column"} gap={2}>
      <Flex width={230} flexDir={"column"}>
        <Flex
          gap={3}
          alignItems={"center"}
          borderWidth={1}
          rounded={10}
          px={3}
          py={3}
          width={"100%"}
          _hover={{
            cursor: "pointer",
          }}
          borderColor={"#3a3a3a"}
        >
          <Image
            rounded={"full"}
            width={"50px"}
            height={"50px"}
            objectFit={"cover"}
            src={profilePhoto}
          />
          <Flex color={"white"} flexDir={"column"} gap={1}>
            <Text>Control Centre 1</Text>
            <Text fontSize={"10px"}>#E46b7d</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex width={230} color={"white"} flexDir={"column"} gap={2}>
        {profileSection.map((section, i) => (
          <Flex
            gap={3}
            width={"100%"}
            alignItems={"center"}
            borderWidth={1}
            borderColor={"#3a3a3a"}
            rounded={10}
            px={5}
            py={3}
            bgColor={currentFeed === section.title ? "#2b2b2e" : ""}
            _hover={{
              cursor: "pointer",
              bgColor: "#2b2b2e",
            }}
            onClick={() => feedSwitch(section.title)}
          >
            {section.icon}
            <Text fontSize={"12px"}>{section.title}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default ProfileSection;

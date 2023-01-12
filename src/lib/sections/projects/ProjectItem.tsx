import {
  Box,
  VStack,
  Heading,
  Image,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";

interface ProjectItemProps {
  ProjectHeading: string;
  ProjectDescription: string;
  //   ProjectlinkUrl: string;
  //   ProjectLiveUrl: string;
}

const ProjectItem = (props: ProjectItemProps) => {
  const { ProjectHeading, ProjectDescription } = props;
  return (
    <VStack p={"1em"} px={"2em"} spacing={"2em"}>
      <Image />
      <Heading>{ProjectHeading}</Heading>
      <Text>{ProjectDescription}</Text>
      <Flex justifyContent={"space-between"} w="80%">
        <Button>Link</Button>
        <Button>Live</Button>
      </Flex>
    </VStack>
  );
};

export default ProjectItem;

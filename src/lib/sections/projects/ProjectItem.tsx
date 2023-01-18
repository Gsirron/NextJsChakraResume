import {
  Box,
  VStack,
  Heading,
  Image,
  Text,
  Flex,
  Button,
  Stack,
} from "@chakra-ui/react";

interface ProjectItemProps {
  ProjectHeading: string;
  ProjectDescription: string;
  //   ProjectlinkUrl: string;
  //   ProjectLiveUrl: string;
  ProjectIndex: number;
}

const ProjectItem = (props: ProjectItemProps) => {
  const { ProjectHeading, ProjectDescription, ProjectIndex } = props;
  let BGColor;
  if (ProjectIndex % 2 === 0) {
    BGColor = "gray.800";
  }
  return (
    <Stack
      p={"1em"}
      px={"2em"}
      spacing={"2em"}
      bg={BGColor}
      textColor={"gray.400"}
      roundedBottomLeft={"4em"}
      roundedTopRight={"4em"}
    >
      <Image />
      <VStack maxW={"30em"} minH={"30em"} p={"1em"} px={"2em"} spacing={"2em"}>
        <Heading>{ProjectHeading}</Heading>
        <Text>{ProjectDescription}</Text>
        <Flex justifyContent={"space-between"} w={"70%"}>
          <Button>Link</Button>
          <Button>Live</Button>
        </Flex>
      </VStack>
    </Stack>
  );
};

export default ProjectItem;

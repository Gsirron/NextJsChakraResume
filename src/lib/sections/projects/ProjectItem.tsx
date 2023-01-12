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
}

const ProjectItem = (props: ProjectItemProps) => {
  const { ProjectHeading, ProjectDescription } = props;
  return (
    <VStack p={"1em"}>
      <Image />
      <Heading>{ProjectHeading}</Heading>
      <Text>{ProjectDescription}</Text>
      <Flex>
        <Button>Link</Button>
        <Button>Live</Button>
      </Flex>
    </VStack>
  );
};

export default ProjectItem;

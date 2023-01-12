import { Box, Heading, Stack, Flex } from "@chakra-ui/react";

import ProjectItem from "./ProjectItem";

import Section from "@/lib/layout/sectionlayout/Section";

type ProjectsProps = {};

const Projects = (props: ProjectsProps) => {
  return (
    <Section
      background={"gray.300"}
      centerContent
      roundedTopRight={"100px"}
      roundedBottomLeft={"100px"}
    >
      <Heading color={"black"}>Projects</Heading>
      <Flex justifyContent={"space-between"} w="100%" h="100%">
        <ProjectItem
          ProjectHeading={"test heading"}
          ProjectDescription={"random diescription"}
        />
        <ProjectItem
          ProjectHeading={"test heading"}
          ProjectDescription={"random diescription"}
        />
        <ProjectItem
          ProjectHeading={"test heading"}
          ProjectDescription={"random diescription"}
        />
      </Flex>
    </Section>
  );
};

export default Projects;

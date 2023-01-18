import { Box, Heading, Stack, Flex } from "@chakra-ui/react";

import ProjectItem from "./ProjectItem";

import Section from "@/lib/layout/sectionlayout/Section";

const ProjectArray = [
  {
    ProjectHeading: "Project 1",
    ProjectDescription: "Test description of project",
  },
  {
    ProjectHeading: "Project 2",
    ProjectDescription: "Test description of project",
  },
  {
    ProjectHeading: "Project 3",
    ProjectDescription: "Test description of project",
  },
];

const Projects = () => {
  return (
    <Section
      background={"gray.100"}
      centerContent
      roundedTopRight={"100px"}
      roundedBottomLeft={"100px"}
    >
      <Heading color={"black"}>Projects</Heading>
      <Flex justifyContent={"space-between"} w={"100%"} direction={"column"}>
        {ProjectArray.map((projectItem, index) => (
          <ProjectItem
            key={projectItem.ProjectHeading}
            ProjectIndex={index}
            ProjectHeading={projectItem.ProjectHeading}
            ProjectDescription={projectItem.ProjectDescription}
          />
        ))}
      </Flex>
    </Section>
  );
};

export default Projects;

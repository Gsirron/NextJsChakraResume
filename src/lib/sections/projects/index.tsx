import { Box, Heading, Stack } from "@chakra-ui/react";

import Section from "@/lib/layout/sectionlayout/Section";

type ProjectsProps = {};

const Projects = (props: ProjectsProps) => {
  return (
    <Section background={"gray.800"} centerContent roundedTopRight={"150px"}>
      <Stack>
        <Heading>Projects</Heading>
      </Stack>
    </Section>
  );
};

export default Projects;

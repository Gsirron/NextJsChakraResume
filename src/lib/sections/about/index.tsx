import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import React from "react";

type AboutProps = {
  AboutInfo: string;
};

const About = (props: AboutProps) => {
  return (
    <Flex
      minH={"70vh"}
      zIndex={5}
      bg={"white"}
      w={"full"}
      bgImage={"/backgrounds/neuralwhite.svg"}
    >
      <Center>
        <Heading>About Page</Heading>
      </Center>
    </Flex>
  );
};

export default About;

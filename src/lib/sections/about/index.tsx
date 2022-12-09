import { Box, Center, Flex, Heading, VStack } from "@chakra-ui/react";
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
      maxW={"6xl"}
      bgImage={"/backgrounds/neuralwhite.svg"}
      p={"1em"}
    >
      <VStack>
        <Heading color={"black"}>About </Heading>
        <Heading color={"black"}>Norris Luong</Heading>
      </VStack>
    </Flex>
  );
};

export default About;

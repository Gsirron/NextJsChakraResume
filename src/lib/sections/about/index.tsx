import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  VStack,
} from "@chakra-ui/react";

import ConfettiBg from "@/lib/layout/backgrounds/ConfettiBg";

type AboutProps = {};

const About = (props: AboutProps) => {
  const { CONFETTI_LIGHT, CONFETTI_DARK } = ConfettiBg;

  return (
    <Box minH={"70vh"} w={"full"} p={"1em"}>
      <VStack>
        <Heading color={"black"}>About </Heading>
        <Heading color={"black"}>Norris Luong</Heading>
      </VStack>
    </Box>
  );
};

export default About;

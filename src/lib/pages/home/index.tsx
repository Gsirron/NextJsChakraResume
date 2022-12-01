import React from "react";
import {
  Flex,
  Stack,
  Heading,
  Text,
  Button,
  Container,
  Box,
  IconButton,
  createIcon,
  Image,
  Center,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import resumeData from "../../../data/ResumeData";

import SocialMedia from "@/lib/components/social/SocialMedia";

// import CTASection from "lib/components/samples/CTASection";
// import SomeImage from "lib/components/samples/SomeImage";
// import SomeText from "lib/components/samples/SomeText";

const Home = () => {
  const { Name, Occupation, Bio, ResumeLink, ProfilePicture } = resumeData.home;
  const textColor = "blue.600";
  return (
    <Stack
      direction={["column", "row"]}
      spacing={["1em", "2em"]}
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      w="full"
    >
      <NextSeo title="Home" />
      <Container maxW="7xl">
        <Stack
          align="center"
          spacing={["1em", "2em", "3em"]}
          py={["1em", "2em", "3em"]}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            >
              <Text color={textColor}>{`Hi I'm`}</Text>
              <Text
                as="span"
                position="relative"
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.800",
                  zIndex: -1,
                }}
              >
                {`${Name},`}
              </Text>
              <br />

              <Text color={textColor}>{`I'm a \n
              ${Occupation}`}</Text>
            </Heading>
            <Text color="gray.300" fontSize={["md", "lg", "xl"]}>
              {Bio}
            </Text>

            <Stack
              spacing={{ base: "1em", sm: "1.5em" }}
              direction={{ base: "column", sm: "row" }}
              justifyContent="center"
              // justifyItems={"center"}
            >
              <SocialMedia BtnSize={"2em"} />
              <a href={ResumeLink}>
                <Button
                  // maxW={"20rem"}
                  rounded="full"
                  size="lg"
                  fontWeight="normal"
                  px="3em"
                  colorScheme="red"
                  bg="blue.600"
                  _hover={{ bg: "blue.500" }}
                >
                  Resume
                </Button>
              </a>
            </Stack>
          </Stack>
          {/* <Flex
            flex={1}
            justify="center"
            align="center"
            position="relative"
            w="full"
          >
            <Blob
              w={"150%"}
              h={"150%"}
              position={"absolute"}
              top={"-20%"}
              left={0}
              zIndex={-1}
              color={useColorModeValue("red.50", "red.400")}
            />
            <Box
              position="relative"
              height="300px"
              rounded="2xl"
              boxShadow="2xl"
              width="full"
              overflow="hidden"
            >
              <IconButton
                aria-label="Play Button"
                variant="ghost"
                _hover={{ bg: "transparent" }}
                // icon={<PlayIcon w={12} h={12} />}
                size="lg"
                color="white"
                position="absolute"
                left="50%"
                top="50%"
                transform="translateX(-50%) translateY(-50%)"
              />
              <Image
                alt="Hero Image"
                fit="cover"
                align="center"
                w="100%"
                h="100%"
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
              />
            </Box>
          </Flex> */}
        </Stack>
      </Container>
    </Stack>
  );
};

export default Home;

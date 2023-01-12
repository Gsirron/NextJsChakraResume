import {
  Flex,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Button,
  Box,
  IconButton,
  Container,
  Image,
  Center,
  VStack,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { FaDownload } from "react-icons/fa";

import Section from "@/lib/layout/sectionlayout/Section";
import ResumeData from "@/data/ResumeData";
import SocialMedia from "@/lib/components/social/SocialMedia";
import ConfettiBg from "@/lib/layout/backgrounds/ConfettiBg";
// import CTASection from "lib/components/samples/CTASection";
// import SomeImage from "lib/components/samples/SomeImage";
// import SomeText from "lib/components/samples/SomeText";

const Hero = () => {
  const { Name, Occupation, Bio, ResumeLink, ProfilePicture } = ResumeData.home;
  const { CONFETTI_DARK } = ConfettiBg;
  const textColor = "blue.600";
  return (
    <Section
      background={"gray.800"}
      bgAttachment={"fixed"}
      bgImage={CONFETTI_DARK}
    >
      <NextSeo title={"Home"} />
      <Stack
        align={"center"}
        spacing={["1em", "2em", "3em"]}
        zIndex={2}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }} textAlign={"center"}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
          >
            <Text color={textColor}>
              {`I'm `} <br />
              <Text
                as={"span"}
                color={"white"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.600",
                  zIndex: -1,
                }}
              >
                {Name}
                <br />
              </Text>
              {`And I'm a`}
              <br />
            </Text>
            <Text>{`${Occupation}`}</Text>

            {/* <Text color={textColor}>{`I'm a \n
              ${Occupation}`}</Text> */}
          </Heading>
          <Text color={"gray.200"} fontSize={["md", "lg", "xl"]} maxW={"3xl"}>
            {Bio}
          </Text>

          <Stack
            spacing={{ base: "1em", sm: "1.5em" }}
            direction={{ base: "column", sm: "row" }}
            justifyContent={"center"}
            // justifyItems={"center"}
          >
            <SocialMedia BtnSize={"2em"} />
            <Button
              as={"a"}
              href={ResumeLink}
              target={"_blank"}
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              colorScheme={"gray"}
              bg={"blue.700"}
              _hover={{ bg: "blue.500" }}
              leftIcon={<FaDownload />}
            >
              Resume
            </Button>
          </Stack>
        </Stack>
        {/* <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <IconButton
              aria-label={"Play Button"}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              // icon={<PlayIcon w={12} h={12} />}
              size={"lg"}
              color={"white"}
              position={"absolute"}
              left={"50%"}
              top={"50%"}
              transform={"translateX(-50%) translateY(-50%)"}
            />
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
              }
            />
          </Box>
        </Flex> */}
      </Stack>
    </Section>
  );
};

export default Hero;

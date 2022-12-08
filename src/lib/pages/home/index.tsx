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
import React from "react";
import { FaDownload } from "react-icons/fa";
import Hero from "@/lib/sections/hero";
import ResumeData from "@/data/ResumeData";
import SocialMedia from "@/lib/components/social/SocialMedia";
import { Element } from "react-scroll";
// import CTASection from "lib/components/samples/CTASection";
// import SomeImage from "lib/components/samples/SomeImage";
// import SomeText from "lib/components/samples/SomeText";

const Home = () => {
  const { Name, Occupation, Bio, ResumeLink, ProfilePicture } = ResumeData.home;
  const textColor = "blue.600";
  return (
    <Box>
      <Element id={"Home"} name={"Home"}>
        <Hero />
      </Element>
    </Box>
  );
};

export default Home;

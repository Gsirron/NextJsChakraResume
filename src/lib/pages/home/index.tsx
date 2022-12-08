import { Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { Element } from "react-scroll";
import Hero from "@/lib/sections/hero";

const Home = () => {
  return (
    <Box>
      <Element id={"Home"} name={"Home"}>
        <Hero />
      </Element>
      <Element id={"About"} name={"About"}>
        <Hero />
      </Element>
      <Element id={"Projects"} name={"Projects"}>
        <Hero />
      </Element>
    </Box>
  );
};

export default Home;

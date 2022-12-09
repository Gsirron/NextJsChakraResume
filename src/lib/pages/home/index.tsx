import { Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { Element } from "react-scroll";
import Hero from "@/lib/sections/hero";
import About from "@/lib/sections/about";
import Projects from "@/lib/sections/projects";

const Home = () => {
  return (
    <Box>
      <Element id={"Home"} name={"Home"}>
        <Hero />
      </Element>
      <Element id={"About"} name={"About"}>
        <About />
      </Element>
      <Element id={"Projects"} name={"Projects"}>
        <Projects />
      </Element>
    </Box>
  );
};

export default Home;

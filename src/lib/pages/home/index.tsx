import { Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Hero from "@/lib/sections/hero";
import { Element } from "react-scroll";
// import CTASection from "lib/components/samples/CTASection";
// import SomeImage from "lib/components/samples/SomeImage";
// import SomeText from "lib/components/samples/SomeText";

const Home = () => {
  return (
    <Box>
      <Element id={"Home"} name={"Home"}>
        <Hero />
      </Element>
      <Element id={"About"} name={"About"}>
        <Hero />
      </Element>
    </Box>
  );
};

export default Home;

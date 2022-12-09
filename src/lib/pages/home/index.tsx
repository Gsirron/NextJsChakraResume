import { Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { Element } from "react-scroll";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicHero = dynamic(() => import("@/lib/sections/hero"), {
  suspense: true,
});
const DynamicAbout = dynamic(() => import("@/lib/sections/about"), {
  suspense: true,
});
const DynamicProjects = dynamic(() => import("@/lib/sections/projects"), {
  suspense: true,
});
const Home = () => {
  return (
    <Box>
      <Element id={"Home"} name={"Home"}>
        <Suspense fallback={`Loading...`}>
          <DynamicHero />
        </Suspense>
      </Element>
      <Element id={"About"} name={"About"}>
        <Suspense fallback={`Loading...`}>
          <DynamicAbout />
        </Suspense>
      </Element>
      <Element id={"Projects"} name={"Projects"}>
        <Suspense fallback={`Loading...`}>
          <DynamicProjects />
        </Suspense>
      </Element>
    </Box>
  );
};

export default Home;

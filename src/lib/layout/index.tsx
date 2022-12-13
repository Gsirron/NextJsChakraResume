import { Box, useColorModeValue, Container } from "@chakra-ui/react";
import type { ReactNode } from "react";

import ConfettiBg from "./backgrounds/ConfettiBg";
import Footer from "./Footer";
import Header from "./header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { CONFETTI_LIGHT, CONFETTI_DARK } = ConfettiBg;

  return (
    <Box
      //
      bg={"gray.100"}
      margin={"0 auto"}
      transition={"0.5s ease-out"}
      bgAttachment={"fixed"}
    >
      <Header />

      <Box as={"main"}>
        {children}
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;

import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import type { ReactNode } from "react";

import ConfettiBg from "./backgrounds/ConfettiBg";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { CONFETTI_LIGHT, CONFETTI_DARK } = ConfettiBg;

  return (
    <Box
      // as={Container}
      w={["full"]}
      bg={useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK)}
      margin="0 auto"
      transition="0.5s ease-out"
    >
      <Header />
      <Box margin="8">
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;

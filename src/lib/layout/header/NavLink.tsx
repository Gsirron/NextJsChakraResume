import type { ReactNode } from "react";
import * as Scroll from "react-scroll";
import { Link } from "@chakra-ui/react";
// import Link from "next/link";
const Link2 = Scroll.Link;

const Navlink = ({ children }: { children: ReactNode }) => {
  return (
    <Link
      as={Link2}
      to={`${children}`}
      spy
      smooth
      activeClass={"active"}
      px={2}
      py={1}
      rounded={"md"}
      // _hover={{
      //   textDecoration: "none",
      //   bg: useColorModeValue("gray.200", "gray.700"),
      // }}
    >
      {children}
    </Link>
  );
};

export default Navlink;

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Container,
  Text,
} from "@chakra-ui/react";

import Navlink from "./NavLink";
import DrawerMenu from "./DrawerMenu";
import SocialMedia from "@/lib/components/social/SocialMedia";

const NavBarLinks = [
  { name: "Home", link: "hero" },
  { name: "About", link: "about" },
  { name: "Projects", link: "projects" },
  { name: "Contact", link: "contact" },
];

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      as={Container}
      centerContent
      bg={"gray.800"}
      h={"5em"}
      maxW={"6xl"}
      // bgGradient={"radial( blue.800,gray.700)"}
      px={["1em", "2em"]}
      justifyContent={"center"}
    >
      <Flex
        py={"1em"}
        as={Container}
        justifyContent={"space-between"}
        maxW={"6xl"}
      >
        <Box justifyContent={"center"} pt={"0.5em"}>
          <Text>Norris Luong</Text>
        </Box>

        <HStack justifyContent={"space-between"}>
          <Box justifyContent={"center"}>
            <IconButton
              variant={"ghost"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon boxSize={"2em"} />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Box>
          <HStack
            spacing={["0.5em", "1em"]}
            display={{ base: "none", md: "flex" }}
            pr={"1em"}
          >
            {NavBarLinks.map((linkItem) => (
              <Navlink key={linkItem.name}>{linkItem.name}</Navlink>
            ))}
          </HStack>

          <SocialMedia Display={["none", "flex"]} BtnSize={"25px"} />
        </HStack>
      </Flex>
      <DrawerMenu links={NavBarLinks} onClose={onClose} isOpen={isOpen} />
    </Box>
  );
};

export default Header;

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Container,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import SocialMedia from "@/lib/components/social/SocialMedia";

const NavBarLinks = [
  { name: "Projects", link: "projects" },
  { name: "About", link: "about" },
  { name: "Contact", link: "contact" },
];

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      h={"5em"}
      width={"full"}
      bgGradient={"radial( blue.800,gray.700)"}
      py={[0, 0, 0]}
      px={["1em", "2em"]}
      justifyContent={"center"}
    >
      <Flex
        py={"1em"}
        as={Container}
        justifyContent={"space-between"}
        maxW={"6xl"}
      >
        <Box justifyContent={"center"} pb={"1em"}>
          <IconButton
            variant={"outline"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon boxSize={"1.5em"} />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Box>

        <IconButton
          variant={"link"}
          aria-label={"home"}
          icon={<HamburgerIcon />}
        />
        <HStack justifyContent={"space-between"}>
          <HStack
            spacing={"1em"}
            display={{ base: "none", md: "flex" }}
            pr={"1em"}
          >
            {NavBarLinks.map((linkItem) => (
              <Link key={linkItem.name} href={linkItem.link}>
                {linkItem.name}
              </Link>
            ))}
          </HStack>
          <SocialMedia BtnSize={"30px"} />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;

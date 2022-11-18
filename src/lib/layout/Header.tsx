import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Container,
} from "@chakra-ui/react";

const NavBarLinks = [
  { name: "Work", link: "work" },
  { name: "About", link: "about" },
  { name: "Contact", link: "contact" },
];

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      h="5em"
      width="full"
      bgGradient="radial( blue.800,gray.700)"
      py="1em"
      px={["1em", "2em"]}
      justifyContent="center"
    >
      <Flex
        py="1em"
        as={Container}
        justifyContent="space-between"
        // bgGradient="linear(to-r, blue.800, gray.800,blue.900)"
        maxW="7xl"
      >
        <Box justifyContent="center">
          <IconButton
            variant="outline"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon boxSize="1.5em" />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Box>

        <IconButton variant="link" aria-label="home" icon={<HamburgerIcon />} />
        <HStack spacing="2em" display={{ base: "none", md: "flex" }}>
          {NavBarLinks.map((linkItem) => (
            <Link key={linkItem.name} href={linkItem.link}>
              {linkItem.name}
            </Link>
          ))}
        </HStack>
        {/* <Box><ThemeToggle /></Box> */}
      </Flex>
    </Box>
  );
};

export default Header;

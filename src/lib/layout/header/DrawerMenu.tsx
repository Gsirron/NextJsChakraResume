import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";

import NavLink from "./NavLink";

interface DrawerMenuProps {
  links: Array<{ name: string; link: string }>;
  onClose: () => void;
  isOpen: boolean;
}

const DrawerMenu = (props: DrawerMenuProps) => {
  const { links, onClose, isOpen } = props;

  return (
    <Drawer isOpen={isOpen} placement={"top"} onClose={onClose} size={"xs"}>
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <VStack>
            {links.map((linkItem) => (
              <NavLink key={linkItem.name}>{linkItem.name}</NavLink>
            ))}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerMenu;

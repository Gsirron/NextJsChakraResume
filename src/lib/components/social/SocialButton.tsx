import { IconButton, Icon } from "@chakra-ui/react";
import Link from "next/link";
import type { IconType } from "react-icons";

type TSocialButton = {
  href: string;
  icon: IconType;
  label: string;
  size: string;
};

const SocialButton = (props: TSocialButton) => {
  const { href, icon, label, size } = props;
  const TempIcon = <Icon as={icon} boxSize={size} />;

  return (
    <Link href={href}>
      <a className="btnlink" target="_blank">
        <IconButton
          aria-label={label}
          variant="ghost"
          w="1px"
          size={["lg", "lg"]}
          icon={TempIcon}
          _hover={{
            bg: "blue.500",
            color: "white",
          }}
        />
      </a>
    </Link>
  );
};

export default SocialButton;

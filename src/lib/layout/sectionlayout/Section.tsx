import { Box, Container } from "@chakra-ui/react";
import type { ContainerProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface SectionProps extends ContainerProps {
  background: string;
  children: ReactNode;
}

const Section = ({ background, children, ...rest }: SectionProps) => {
  return (
    <Box
      as={Container}
      maxWidth={"6xl"}
      minH={"70vh"}
      bg={background}
      roundedBottomLeft={"150px"}
      zIndex={1}
      p={"1em"}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Section;

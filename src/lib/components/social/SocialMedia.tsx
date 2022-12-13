import { Stack, StackProps } from "@chakra-ui/react";

import SocialButton from "./SocialButton";

import ResumeData from "@/data/ResumeData";

interface SocialMediaProps extends StackProps {
  BtnSize: string;
  Display?: Array<string> | string;
}

const SocialMedia = (props: SocialMediaProps) => {
  const { BtnSize, Display, ...rest } = props;
  const SocialData = ResumeData.social;

  return (
    <Stack
      display={Display}
      justifyContent={{ base: "center", md: "initial" }}
      spacing={["2px", "0.5em"]}
      direction={"row"}
    >
      {SocialData.map((buttoninfo) => (
        <SocialButton key={buttoninfo.label} size={BtnSize} {...buttoninfo} />
      ))}
    </Stack>
  );
};

export default SocialMedia;

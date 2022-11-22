import { Stack } from "@chakra-ui/react";

import SocialButton from "./SocialButton";

import ResumeData from "@/data/ResumeData";

type SocialMediaProps = {
  BtnSize: string;
};

const SocialMedia = (props: SocialMediaProps) => {
  const { BtnSize } = props;
  const SocialData = ResumeData.social;

  return (
    <Stack spacing={[2, "0.5em"]} direction={"row"}>
      {SocialData.map((buttoninfo) => (
        <SocialButton key={buttoninfo.label} size={BtnSize} {...buttoninfo} />
      ))}
    </Stack>
  );
};

export default SocialMedia;

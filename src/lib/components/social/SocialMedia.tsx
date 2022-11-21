import { Stack } from "@chakra-ui/react";

import SocialButton from "./SocialButton";

import ResumeData from "@/data/ResumeData";

const SocialMedia = (BtnSize: string) => {
  const size = BtnSize;
  const SocialData = ResumeData.social;

  return (
    <Stack spacing={{ base: 4, md: 8, lg: 20 }} direction={"row"}>
      {SocialData.map((buttoninfo) => (
        <SocialButton key={buttoninfo.label} size={size} {...buttoninfo} />
      ))}
    </Stack>
  );
};

export default SocialMedia;

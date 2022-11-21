import React from "react";
import { Stack } from "@chakra-ui/react";
import SocialButton from "./SocialButton";

import ResumeData from "@/data/ResumeData";

type SocialMediaProps = {};

const SocialMedia = (props: SocialMediaProps) => {
  const SocialData = ResumeData.social;

  return (
    <Stack spacing={{ base: 4, md: 8, lg: 20 }} direction={"row"}>
      {SocialData.map((buttoninfo) => (
        <SocialButton key={buttoninfo.label} size={"40px"} {...buttoninfo} />
      ))}
    </Stack>
  );
};

export default SocialMedia;

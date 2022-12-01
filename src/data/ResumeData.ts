import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const ResumeData = {
  home: {
    Name: "Norris Luong",
    Occupation: "Full Stack Developer",
    Bio: [
      "I'm a Full stack Developer based in Australia. I have a passion for coding with experience creating full stack applications using frameworks such as React, Django, and .NET ",
      "I'm a innately curious person, with strong problem solving skills. I love to learn and get underneath to understand how things function. Love everything technology and science ",
    ],
    ProfilePicture: "",
    ResumeLink:
      "https://docs.google.com/document/d/1SgUUYrKJpsKf50cU0EkcNHrnKeAiGS0pZHuOeqlFdBM/edit?usp=share_link",
  },
  social: [
    {
      href: "mailto:Norris.luong@hotmail.com",
      label: "Email",
      icon: MdEmail,
    },

    {
      href: "https://github.com/Gsirron",
      label: "github",
      icon: BsGithub,
    },
    {
      href: "https://www.linkedin.com/in/norris-luong-33b146230/",
      label: "Linkedin",
      icon: BsLinkedin,
    },
  ],
};

export default ResumeData;

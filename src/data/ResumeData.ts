import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const ResumeData = {
  home: {
    Name: "Norris Luong",
    Occupation: "Full Stack Developer",
    Bio: [
      "I'm a Full stack Developer currently based in Australia. I have a huge passion for coding and engineering ",
      "Innately curious person, with strong problem solving skills. I love to learn and get underneath to understand how things function. Love everything technology and science ",
    ],
    ProfilePicture: "",
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

// Types
import type { AboutLogo, NavPageLink, SMLink } from "types";
// React Icons
import { FaGithubSquare } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { GrProjects, GrAchievement } from "react-icons/gr";
import { AiFillPhone } from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";
import { BsInfoCircleFill } from "react-icons/bs";

// eslint-disable-next-line no-undef
export const smLinks: SMLink[] = [
  {
    id: 1,
    label: "My Github Profile",
    dest: "https://github.com/axense234",
    logo: FaGithubSquare({}),
  },
  {
    id: 2,
    label: "axense234#1829 on Discord",
    dest: "/",
    logo: IoLogoDiscord({}),
  },
];

export const navPageLinks: NavPageLink[] = [
  { id: 1, label: "Skills", dest: "/skills", logo: GiBrain({}) },
  { id: 2, label: "Projects", dest: "/projects", logo: GrProjects({}) },
  {
    id: 3,
    label: "Achievments",
    dest: "/achievments",
    logo: GrAchievement({}),
  },
  { id: 4, label: "About", dest: "/about", logo: BsInfoCircleFill({}) },
  { id: 5, label: "Contact", dest: "/contact", logo: AiFillPhone({}) },
];

export const aboutContentLogos: AboutLogo[] = [
  {
    id: 1,
    logoUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674571532/Icons%20and%20Stuff/nextjs_logo_hdppif.png",
    label: "NextJS",
    dest: "https://nextjs.org/",
  },
  {
    id: 2,
    logoUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1674063477/Icons%20and%20Stuff/postgresql-logo-png-transparent_zxfyrt.webp",
    label: "PostgreSQL",
    dest: "https://www.postgresql.org/",
  },
  {
    id: 3,
    logoUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1668764534/Icons%20and%20Stuff/mongodb_edxhjk.webp",
    label: "MongoDB",
    dest: "https://www.mongodb.com/",
  },
  {
    id: 4,
    logoUrl:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1668764549/Icons%20and%20Stuff/react_js_logo_icon512_b7nzgm.webp",
    label: "ReactJS",
    dest: "https://react.dev/",
  },
];

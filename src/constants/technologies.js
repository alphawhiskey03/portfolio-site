import {
  DiReact,
  DiBootstrap,
  DiPhp,
  DiMongodb,
  DiMysql,
  DiGit,
} from "react-icons/di";
import {
  IoLogoFirebase,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoPython,
} from "react-icons/io5";
import {
  SiMaterialui,
  SiCypress,
  SiJsonwebtokens,
  SiRedux,
  SiSolidity,
} from "react-icons/si";
import {GrGraphQl} from "react-icons/gr";
import {FaHardHat} from "react-icons/fa";

export const frontend = [
  {
    name: "React.js",
    icon: DiReact,
    size: "6rem",
  },
  {
    name: "Bootstrap",
    icon: DiBootstrap,
    size: "6rem",
  },
  {
    name: "MUI",
    icon: SiMaterialui,
    size: "6rem",
  },
  {
    name: "Redux",
    icon: SiRedux,
    size: "6rem",
  },
  {
    name: "Javascript",
    icon: IoLogoJavascript,
    size: "6rem",
  },
];
export const backend = [
  {name: "Node.js", icon: IoLogoNodejs, size: "6rem"},
  {name: "Python", icon: IoLogoPython, size: "6rem"},
  {name: "Php", icon: DiPhp, size: "6rem"},
  {name: "MongoDB", icon: DiMongodb, size: "6rem"},
  {name: "MySQL", icon: DiMysql, size: "6rem"},
];
export const web3 = [
  {name: "Solidity", icon: SiSolidity, size: "6rem"},
  {name: "Hardhat", icon: FaHardHat, size: "6rem"},
];

export const otherTech = [
  {name: "Graphql", icon: GrGraphQl, size: "6rem"},
  {name: "Firebase", icon: IoLogoFirebase, size: "6rem"},
  {name: "Git", icon: DiGit, size: "6rem"},
  {name: "JWT", icon: SiJsonwebtokens, size: "6rem"},
];

export const testing = [{name: "Cypress", icon: SiCypress, size: "6rem"}];

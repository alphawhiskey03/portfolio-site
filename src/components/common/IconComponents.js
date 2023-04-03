import * as DiIcons from "react-icons/di";
import * as Io5Icons from "react-icons/io5";
import * as SiIcons from "react-icons/si";
import * as GrIcons from "react-icons/gr";
import * as FaIcons from "react-icons/fa";
import { BsApp } from "react-icons/bs";
import { createElement } from "react";

const IconComponent = ({ packageName, icon, iconProps }) => {
  switch (packageName) {
    case "di":
      return <>{createElement(DiIcons[icon], iconProps)}</>;
    case "io5":
      return <>{createElement(Io5Icons[icon], iconProps)}</>;
    case "si":
      return <>{createElement(SiIcons[icon], iconProps)}</>;
    case "gr":
      return <>{createElement(GrIcons[icon], iconProps)}</>;
    case "fa":
      return <>{createElement(FaIcons[icon], iconProps)}</>;
    default:
      return <BsApp />;
  }
};
export default IconComponent;

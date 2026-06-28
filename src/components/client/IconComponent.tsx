import * as DiIcons from "react-icons/di";
import * as Io5Icons from "react-icons/io5";
import * as SiIcons from "react-icons/si";
import * as GrIcons from "react-icons/gr";
import * as FaIcons from "react-icons/fa";
import { BsApp } from "react-icons/bs";
import { createElement } from "react";

interface IconComponentProps {
  packageName: string;
  icon: string;
  iconProps: React.SVGProps<SVGSVGElement>;
}

const iconMap: Record<string, Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>> = {
  di: DiIcons as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>,
  io5: Io5Icons as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>,
  si: SiIcons as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>,
  gr: GrIcons as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>,
  fa: FaIcons as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>,
};

const IconComponent: React.FC<IconComponentProps> = ({
  packageName,
  icon,
  iconProps,
}) => {
  const pkg = iconMap[packageName];
  const IconEl = pkg?.[icon];
  if (!IconEl) return <BsApp />;
  return <>{createElement(IconEl, iconProps)}</>;
};
export default IconComponent;

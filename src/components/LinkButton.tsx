import { LiquidMetalButton } from "@/components/jolly-ui/liquid-metal-button";
import { BsTwitterX, BsGithub, BsLinkedin, BsGlobe } from "react-icons/bs";

export enum LinkType {
  GITHUB = "github",
  LINKEDIN = "linkedin",
  X = "x",
  PORTFOLIO = "portfolio",
}

const TypeToIcon: Record<
  LinkType,
  { icon: React.ElementType; text?: string; href: string }
> = {
  [LinkType.GITHUB]: {
    icon: BsGithub,
    text: "Github",
    href: "https://github.com/alphawhiskey03",
  },
  [LinkType.LINKEDIN]: {
    icon: BsLinkedin,
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/vignesh-s-802812183/",
  },
  [LinkType.X]: {
    icon: BsTwitterX,
    text: undefined,
    href: "https://x.com/Vignesh03_",
  },
  [LinkType.PORTFOLIO]: {
    icon: BsGlobe,
    text: "Portfolio",
    href: "https://therealvig.netlify.app",
  },
};

interface LinkButtonProps {
  type: LinkType;
  viewMode?: "text" | "icon";
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  type,
  viewMode = "icon",
}) => {
  const { icon: Icon, text, href } = TypeToIcon[type];

  const onClick = () => {
    window.open(href, "_blank");
  };
  return (
    <LiquidMetalButton
      size="md"
      viewMode={viewMode}
      icon={<Icon size={16} className="text-white" />}
      label={text}
      onClick={onClick}
    />
  );
};

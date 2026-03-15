import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";
import { Github, Linkedin, X, Globe } from "lucide-react";

export enum LinkType {
  GITHUB = "github",
  LINKEDIN = "linkedin",
  X = "x",
  PORTFOLIO = "portfolio",
}

const TypeToIcon: Record<
  LinkType,
  { icon: React.ElementType; text: string | null; href: string }
> = {
  [LinkType.GITHUB]: {
    icon: Github,
    text: "Github",
    href: "https://github.com/alphawhiskey03",
  },
  [LinkType.LINKEDIN]: {
    icon: Linkedin,
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/vignesh-s-802812183/",
  },
  [LinkType.X]: {
    icon: X,
    text: null,
    href: "https://x.com/Vignesh03_",
  },
  [LinkType.PORTFOLIO]: {
    icon: Globe,
    text: "Portfolio",
    href: "https://therealvig.netlify.app",
  },
};

export function LinkPageButtons({ type }: { type: LinkType }) {
  const { icon: Icon, text, href } = TypeToIcon[type];
  const onClick = () => {
    window.open(href, "_blank");
  };
  return (
    <LiquidMetalButton
      size="md"
      icon={<Icon size={16} className="text-white" />}
      label={text}
      onClick={onClick}
    />
  );
}

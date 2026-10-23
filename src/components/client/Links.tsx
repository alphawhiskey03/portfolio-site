import { LinkButton, LinkType } from "./LinkButton";

interface LinksProps {
  viewMode?: "text" | "icon";
}

const Links = ({ viewMode = "icon" }: LinksProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
      <LinkButton type={LinkType.GITHUB} viewMode={viewMode} />
      <LinkButton type={LinkType.LINKEDIN} viewMode={viewMode} />
      <LinkButton type={LinkType.X} viewMode={viewMode} />
    </div>
  );
};

export default Links;

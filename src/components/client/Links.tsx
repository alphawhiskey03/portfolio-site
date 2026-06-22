import { LinkButton, LinkType } from "./LinkButton";

const Links = () => {
  return (
    <div className="flex gap-4">
      <LinkButton type={LinkType.PORTFOLIO} viewMode="icon" />
      <LinkButton type={LinkType.GITHUB} viewMode="icon" />
      <LinkButton type={LinkType.LINKEDIN} viewMode="icon" />
      <LinkButton type={LinkType.X} viewMode="icon" />
    </div>
  );
};

export default Links;

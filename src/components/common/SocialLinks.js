import styled from "styled-components";
import IconComponent from "./IconComponents";
import { SocialIcons } from "./styles/SocialLinksStyle";
import { Div1 } from "./styles/index";

const StyledSocialIcons = styled(SocialIcons)`
  margin: 10px;
`;
const StyledDiv1 = styled(Div1)`
  margin-bottom: 20px;
`;
const SocialLinks = ({ links, onlyFeatured }) => {
  return (
    <StyledDiv1>
      {links.map(({ link, icon, main, title }) => {
        return (
          <div key={title}>
            {(!!!onlyFeatured || main) && (
              <StyledSocialIcons href={link}>
                <IconComponent
                  packageName={icon.packageName}
                  icon={icon.name}
                  iconProps={{ size: "3rem" }}
                />
              </StyledSocialIcons>
            )}
          </div>
        );
      })}
    </StyledDiv1>
  );
};
export default SocialLinks;

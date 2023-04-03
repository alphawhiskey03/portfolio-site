import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  margin: 10px;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }
  &:not(:last-child) {
    margin: 10px;
  }
`;

export const Description = styled.p``;

export const Title = styled.h3`
  margin: 5px 0 5px 0;
  font-weight: 900;
`;

export const OrgLogo = styled.img`
  height: 8vh;
  width: 9vh;
  border-radius: 50%;
`;

export const ProjectLogo = styled.img`
  cursor: pointer;
  max-block-size: 8vh;
  max-inline-size: 16vh;
  border-radius: 5px;
  margin: 2px;
  transition: all 0.3s ease-in-out;
  position: relative;
  &:hover {
    box-shadow: rgba(255, 0, 0, 0.5) 0px 3px 8px;
  }
`;

export const ProjectSection = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SubHeadings = styled.p`
  font-size: 12px;
  font-weight: 900;
  margin: 5px 0;
`;

export const ExperienceTime = styled.p`
  font-weight: 100;
  font-size: 12px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.accent1};
`;

export const Role = styled.p`
  margin-top: 10px;
`;

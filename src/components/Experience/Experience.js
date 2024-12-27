import { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { GET_EXPEREINCES } from "../../constants";
import { client, urlFor } from "../../sanity";
import {
  Item,
  Description,
  Title,
  OrgLogo,
  ProjectLogo,
  Role,
  SubHeadings,
  ProjectSection,
  ExperienceTime,
} from "./ExperienceStyles";

import { Section, SectionDivider, SectionTitle } from "../common/styles";
import { Tag, TagList, TooltipWrapper } from "../common/styles";
import IconComponent from "../common/IconComponents";
import { getFormattedDateAndExperience } from "../../utils";

const StyledTagList = styled(TagList)`
  justify-content: start;
  margin: 0;
  padding: 0;
`;
const StyledTag = styled(Tag)`
  font-size: 1.3rem;
`;
const Experiences = () => {
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const result = await client.fetch(GET_EXPEREINCES);
        setExperiences(result);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <Section id="experience">
      <SectionTitle>Experiences</SectionTitle>
      {experiences.map((experience) => {
        const { formattedDate, duration } = getFormattedDateAndExperience(
          experience.start_date,
          experience.end_date
        );
        return (
          <Item key={experience.org_name}>
            <Link href={experience.org_link}>
              <div>
                <OrgLogo src={urlFor(experience.logo)} />
              </div>
            </Link>
            <div>
              <Role>{experience.role}</Role>
              <Title>{experience.org_name}</Title>
              <ExperienceTime>
                {formattedDate} • <span className="duration">{duration} </span>
              </ExperienceTime>

              <Description>{experience.description}</Description>
              {experience.technologies.length > 0 && (
                <>
                  <SubHeadings>Technologies</SubHeadings>
                  <StyledTagList>
                    {experience.technologies.map((technology) => (
                      <StyledTag key={technology.title}>
                        <IconComponent
                          packageName={technology.icon.packageName}
                          icon={technology.icon.name}
                        />
                        {technology.title}
                      </StyledTag>
                    ))}
                  </StyledTagList>
                </>
              )}
              {experience.projects?.length > 0 && (
                <>
                  <SubHeadings>Products</SubHeadings>
                  <ProjectSection>
                    {experience.projects.map((project) => (
                      <TooltipWrapper key={project.title} text={project.title}>
                        <Link href={project.link}>
                          <ProjectLogo src={urlFor(project.thumbnail)} />
                        </Link>
                      </TooltipWrapper>
                    ))}
                  </ProjectSection>
                </>
              )}
            </div>
          </Item>
        );
      })}
      <SectionDivider colorAlt />
    </Section>
  );
};
export default Experiences;

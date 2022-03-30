import { useEffect, useState } from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ReadMoreBtn,
  TagLink,
} from "./ProjectsStyles";
import { SectionDivider } from "../../styles/GlobalComponents";
const ProjectCard = ({ project }) => {
  const [btnToggle, setBtnToggle] = useState(false);
  const [txtLength, setTxtLength] = useState(100);
  useEffect(() => {
    setTxtLength(btnToggle ? undefined : 100);
  }, [btnToggle]);
  const descriptionLength = project.description.length > 100;
  return (
    <>
      <BlogCard key={project.id}>
        <Img src={project.image} />
        <TitleContent>
          <HeaderThree title>{project.title}</HeaderThree>
          <Hr />
        </TitleContent>
        <CardInfo>
          {project.description
            .slice(0, txtLength)
            .concat(descriptionLength && !btnToggle ? "..." : "")}
        </CardInfo>
        <div style={{ textAlign: "left" }}>
          {descriptionLength && (
            <ReadMoreBtn onClick={() => setBtnToggle(!btnToggle)}>
              {btnToggle ? "Read less" : "Read more"}
            </ReadMoreBtn>
          )}
        </div>
        <div>
          <SectionDivider
            colorAlt
            style={{ marginTop: 10, marginBottom: 10, height: 2 }}
          />

          <TitleContent>Technologies</TitleContent>
          <TagList>
            {project.tags.map((tag) => (
              <TagLink href={tag.link} target="_blank" key={tag.name}>
                <Tag>{tag.name}</Tag>
              </TagLink>
            ))}
          </TagList>
        </div>
        <UtilityList>
          {project.source && (
            <ExternalLinks href={project.source} target="_blank">
              source
            </ExternalLinks>
          )}
          {project.visit && (
            <ExternalLinks href={project.visit} target="_blank">
              visit
            </ExternalLinks>
          )}
        </UtilityList>
      </BlogCard>
    </>
  );
};

export default ProjectCard;

import { useEffect, useState } from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Hr,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ReadMoreBtn,
  TagLink,
} from "./ProjectsStyles";
import { Tag } from "../common/styles";
import { SectionDivider } from "../common/styles/";
import { urlFor } from "../../sanity";
const ProjectCard = ({ project }) => {
  const [btnToggle, setBtnToggle] = useState(false);
  const [txtLength, setTxtLength] = useState(100);
  useEffect(() => {
    setTxtLength(btnToggle ? undefined : 100);
  }, [btnToggle]);
  const descriptionLength = project.description.length > 100;
  return (
    <BlogCard>
      <Img src={urlFor(project.thumbnail)} />
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
          {project.technologies.map((technology) => (
            <TagLink
              href={technology.link}
              target="_blank"
              key={technology.title}
            >
              <Tag>{technology.title}</Tag>
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
        {project.link && (
          <ExternalLinks href={project.link} target="_blank">
            visit
          </ExternalLinks>
        )}
      </UtilityList>
    </BlogCard>
  );
};

export default ProjectCard;

import React from "react";

import {
  GridContainer,
  ProjectTypeContainer,
  ProjectTypeHeader,
  ProjectTypeLink,
  ChevronSpan,
  ProjectLinkContainer,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {projects, MyProjects} from "../../constants";
import {FiChevronRight} from "react-icons/fi";

import {FaMedapps, FaLaptopCode} from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const ProjectComponent = ({simplified}) => {
  if (simplified)
    return (
      <Section nopadding>
        <SectionDivider colorAlt />
        <SectionTitle>Projects</SectionTitle>
        <Link href="/projects">
          <ProjectTypeContainer>
            <ProjectTypeHeader>
              <FaMedapps style={{marginRight: 10}} />
              My Projects
            </ProjectTypeHeader>
            <ChevronSpan>
              <FiChevronRight />
            </ChevronSpan>
          </ProjectTypeContainer>
        </Link>
        <Link href="/projects#freelanceprojects">
          <ProjectTypeContainer>
            <ProjectTypeHeader>
              <FaLaptopCode style={{marginRight: 10}} />
              Freelance Projects
            </ProjectTypeHeader>
            <ChevronSpan>
              <FiChevronRight />
            </ChevronSpan>
          </ProjectTypeContainer>
        </Link>
      </Section>
    );
  return (
    <>
      <ProjectLinkContainer>
        <Link href="/projects#myprojects">
          <ProjectTypeLink>My Projects</ProjectTypeLink>
        </Link>
        <Link href="/projects#freelanceprojects">
          <ProjectTypeLink>Freelance Projects</ProjectTypeLink>
        </Link>
      </ProjectLinkContainer>
      <Section nopadding id="myprojects">
        <br />
        <SectionTitle>My Projects</SectionTitle>
        <GridContainer>
          {MyProjects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </GridContainer>
        <br />
        <SectionDivider colorAlt />
      </Section>
      <Section nopadding id="freelanceprojects">
        <br />
        <SectionTitle>Freelance projects</SectionTitle>
        <GridContainer>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </GridContainer>
        <br />
        <SectionDivider colorAlt />
      </Section>
    </>
  );
};

export default ProjectComponent;

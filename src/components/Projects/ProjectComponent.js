import React from "react";

import {
  GridContainer,
  ProjectTypeContainer,
  ProjectTypeHeader,
  ProjectTypeLink,
  ChevronSpan,
  ProjectLinkContainer,
} from "./ProjectsStyles";
import { Section, SectionDivider, SectionTitle } from "../common/styles/index";
import { FiChevronRight } from "react-icons/fi";

import { useEffect, useState } from "react";
import { FaMedapps, FaLaptopCode } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { client } from "../../sanity";
import { categoriseData, formatTitle } from "../../utils/index";
import { GET_PROJECTS } from "../../constants";

const ProjectSection = ({ projects }) => {
  const { items, category } = projects;
  if (category == "org-projects") {
    return null;
  }
  return (
    <Section nopadding id={category}>
      <br />
      <SectionTitle>{formatTitle(category)}</SectionTitle>
      <GridContainer>
        {items.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </GridContainer>
      <br />
      <SectionDivider colorAlt />
    </Section>
  );
};

const ProjectComponent = ({ simplified }) => {
  const [allProjects, setAllProjects] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await client.fetch(GET_PROJECTS);
      setAllProjects(categoriseData(result, "project_type"));
    })();
  }, []);

  if (simplified)
    return (
      <Section nopadding>
        <SectionDivider colorAlt />
        <SectionTitle>Projects</SectionTitle>
        <Link href="/projects">
          <ProjectTypeContainer>
            <ProjectTypeHeader>
              <FaMedapps style={{ marginRight: 10 }} />
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
              <FaLaptopCode style={{ marginRight: 10 }} />
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
        <Link href="/projects#my-project">
          <ProjectTypeLink>My Projects</ProjectTypeLink>
        </Link>
        <Link href="/projects#freelance-project">
          <ProjectTypeLink>Freelance Projects</ProjectTypeLink>
        </Link>
      </ProjectLinkContainer>

      {allProjects.map((projects, i) => (
        <ProjectSection key={i} projects={projects} />
      ))}
      {/* <Section nopadding id="myprojects">
        <br />
        <SectionTitle>My Projects</SectionTitle>
        <ProjectSection projects={MyProjects.ite} />
        <br />
        <SectionDivider colorAlt />
      </Section> */}
    </>
  );
};

export default ProjectComponent;

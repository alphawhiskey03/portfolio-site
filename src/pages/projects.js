import { Layout } from "../layout/Layout";
import ProjectComponent from "../components/Projects/ProjectComponent";
import Head from "next/head";
const Projects = ({ socialMedia, mainContent }) => {
  return (
    <div>
      <Head>
        <title>Vignesh | projects</title>
        <meta name="tilte" content="Vignesh | Projects" />
        <meta
          name="description"
          content="These are my freelance projects and projects that i built while different technologies"
        />
      </Head>
      <Layout socialMedia={socialMedia} {...mainContent}>
        <ProjectComponent />
      </Layout>
    </div>
  );
};

export default Projects;

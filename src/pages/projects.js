import { Layout } from "../layout/Layout";
import ProjectComponent from "../components/Projects/ProjectComponent";
import Head from "next/head";
const Projects = () => {
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
      <Layout>
        <ProjectComponent />
      </Layout>
    </div>
  );
};

export default Projects;

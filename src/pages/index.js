import React from "react";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import Touch from "../components/Touch/Touch";
import { Layout } from "../layout/Layout";
import { Section } from "../components/common/styles/index";
import Head from "next/head";
import ProjectComponent from "../components/Projects/ProjectComponent";

import Experiences from "../components/Experience/Experience";
const Home = ({ mainContent, socialMedia }) => {
  console.log(
    "%c heyy there! \n have an amazing day 🙌🏾  ",
    "background: red; color: #0F1624"
  );
  const {
    gist,
    about_me: aboutMe,
    tech_description,
    keywords,
    geo_region,
    ...rest
  } = mainContent;
  return (
    <>
      <Head>
        <title>Vignesh | Software developer coimbatore</title>
        <meta name="title" content="Vignesh | developer portfolio" />
        <meta name="description" content={gist} />
        <meta property="og:image" content="/images/vignesh-developer.png" />
        <meta
          name="keywords"
          content="web,react,express,node,mongodb,php,fullstack,developer"
        />
        <meta name="geo.region" content={geo_region} />
        <meta name="geo.placename" content="Coimbatore" />
        <meta name="geo.position" content="11.057688;76.968131" />
        <meta name="ICBM" content="11.057688, 76.968131" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Layout socialMedia={socialMedia} {...rest}>
        <Section grid>
          <Hero content={gist} />
          <BgAnimation />
        </Section>
        <Technologies description={tech_description} />
        <ProjectComponent simplified />
        <Timeline aboutMe={aboutMe} socialMedia={socialMedia} />
        <Experiences />
        {/* <Acomplishments /> */}
        <Touch />
      </Layout>
    </>
  );
};

// export const getServerSideProps = async () => {
//   const mainContent = await client.fetch(GET_MAINCONTENT);
//   const socialMedia = await client.fetch(GET_SOCIALMEDIA);
//   return {
//     props: {
//       mainContent,
//       socialMedia,
//     },
//   };
// };

export default Home;

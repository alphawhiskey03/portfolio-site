import React from "react";
import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import Touch from "../components/Touch/Touch";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Head from "next/head";
import ProjectComponent from "../components/Projects/ProjectComponent";
import { heroText } from "../constants/constants";

const Home = () => {
  console.log(
    "%c heyy there! \n have an amazing day 🙌🏾  ",
    "background: red; color: #0F1624"
  );
  return (
    <>
      <Head>
        <title>Vignesh | Software developer coimbatore</title>
        <meta name="title" content="Vignesh | developer portfolio" />
        <meta name="description" content={heroText} />
        <meta property="og:image" content="/images/vignesh-developer.png" />
        <meta
          name="keywords"
          content="web,react,express,node,mongodb,php,fullstack,developer"
        />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Coimbatore" />
        <meta name="geo.position" content="11.057688;76.968131" />
        <meta name="ICBM" content="11.057688, 76.968131" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Technologies />
        <ProjectComponent simplified />
        <Timeline />
        {/* <Acomplishments /> */}
        <Touch />
      </Layout>
    </>
  );
};

export default Home;

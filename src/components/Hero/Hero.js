import React from 'react';
import { useRouter } from 'next/router'
import {Head} from "next/head";
import { Section, SectionText, SectionTitle ,SectionDivider} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const handleClick=()=>{
  const router=useRouter();
  router.push("#contact");
}

const Hero = (props) => {
  const router=useRouter();
  const handleClick=()=>{
    router.push("#contact");
  }
  return(
    <>
  <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Hello world, <br />
      This is Vignesh!
    </SectionTitle>
    <SectionText>
    I'm an aspiring and passionate developer, I've been super enthusiastic about learning web/cross-platform technologies, enduring my journey as a full stack web developer. 
    </SectionText>
    <Button onClick={handleClick}>Get in touch!</Button>
  </LeftSection>
</Section>
</>

  )};

export default Hero;
import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Hello world, <br />
      This is Vignesh!
    </SectionTitle>
    <SectionText>
    I'm an aspiring and passionate developer, I've been super enthusiastic about learning web/cross-platform technologies, enduring my journey as a full stack web developer. 
    </SectionText>
    <Button onClick={props.handleClick}>Get in touch!</Button>
  </LeftSection>
</Section>

);

export default Hero;
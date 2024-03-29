import React from "react";
import {useRouter} from "next/router";
import {Head} from "next/head";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import {LeftSection} from "./HeroStyles";
import {heroText} from "../../constants";
const handleClick = () => {
  const router = useRouter();
  router.push("#contact");
};

const Hero = (props) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("#contact");
  };
  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Hello world, <br />
            This is Vignesh!
          </SectionTitle>
          <SectionText>{heroText}</SectionText>
          <Button onClick={handleClick} id="heroBtn">
            Get in touch!
          </Button>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;

import React from "react";
import { useRouter } from "next/router";
import { Section, SectionHero, SectionText } from "../common/styles";
import Button from "../common/Button";
import { LeftSection } from "./HeroStyles";

const Hero = ({ content }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("#contact");
  };
  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionHero main center>
            Hello world, <br />
            This is Vignesh!
          </SectionHero>
          <SectionText>{content}</SectionText>
          <Button onClick={handleClick} id="heroBtn">
            Get in touch!
          </Button>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;

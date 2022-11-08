import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  ListTitle,
  ListIcons,
  IconContent,
  MainContainer,
  IconText,
  Icon,
  InfoText,
  TechGrid,
} from "./TechnologiesStyles";
import {frontend, backend, web3, testing, otherTech} from "../../constants";

const TechSection = ({technologies, title}) => {
  return (
    <div>
      <ListTitle>{title}</ListTitle>
      <MainContainer>
        {technologies.map(({name, icon: TechIcon, size}) => (
          <ListIcons>
            <IconContent>
              <Icon>
                <TechIcon size={size} />
              </Icon>
              <IconText>{name}</IconText>
            </IconContent>
          </ListIcons>
        ))}
      </MainContainer>
    </div>
  );
};

const Technologies = () => (
  <Section id="tech">
    <SectionDivider colorAlt />

    <SectionTitle>Tech stack</SectionTitle>
    <SectionText style={{paddingBottom: 3}}>
      I've worked with a range of technologies in the web development world.
      From Back-end To Front-end.
    </SectionText>
    <InfoText>(Hover over / click the icons to see the names)</InfoText>
    <TechGrid>
      <TechSection technologies={frontend} title="Frontend" />
      <TechSection technologies={backend} title="Backend" />
      <TechSection technologies={web3} title="Blockchain" />
      <TechSection technologies={testing} title="Testing" />
      <TechSection technologies={otherTech} title="Other technologies" />
    </TechGrid>
  </Section>
);

export default Technologies;

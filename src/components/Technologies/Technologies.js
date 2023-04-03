import { useState } from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../common/styles/index";
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
import { useEffect } from "react";
import { client } from "../../sanity";
import { GET_TECHNOLOGIES } from "../../constants";
import IconComponent from "../common/IconComponents";
import { categoriseData } from "../../utils";
import { capitalize } from "lodash";

const TechSection = ({ technologies, title }) => {
  return (
    <div>
      <ListTitle>{capitalize(title)}</ListTitle>
      <MainContainer>
        {technologies.map(({ title, icon, featured }) => (
          <>
            {featured && (
              <ListIcons>
                <IconContent>
                  <Icon>
                    <IconComponent
                      packageName={icon.packageName}
                      icon={icon.name}
                      iconProps={{ size: "6rem" }}
                    />
                  </Icon>
                  <IconText>{title}</IconText>
                </IconContent>
              </ListIcons>
            )}
          </>
        ))}
      </MainContainer>
    </div>
  );
};

const Technologies = ({ description }) => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await client.fetch(GET_TECHNOLOGIES);
        setTechnologies(categoriseData(result, "category"));
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <Section id="tech">
      <SectionDivider colorAlt />
      <SectionTitle>Tech stack</SectionTitle>
      <SectionText style={{ paddingBottom: 3 }}>{description}</SectionText>
      <InfoText>(Hover over / click the icons to see the names)</InfoText>
      <TechGrid>
        {technologies.map((technology) => (
          <TechSection
            technologies={technology.items}
            title={technology.category}
          />
        ))}
      </TechGrid>
    </Section>
  );
};

export default Technologies;

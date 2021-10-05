import React from 'react';
import { DiFirebase, DiReact, DiBootstrap ,DiPhp ,DiMongodb,DiMysql,DiGit} from 'react-icons/di';
import { IoLogoFirebase, IoLogoJavascript,IoLogoNodejs ,IoLogoPython} from "react-icons/io5";
import { SiMaterialUi ,SiNextDotJs,SiJsonwebtokens} from "react-icons/si";
import {SiRedux} from "react-icons/si";
import Head from "next/head";


import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle,ListIcons,IconContent,MainContainer,IconText,Icon} from './TechnologiesStyles';

const Technologies = () =>  ( 

  <Section id="tech">
      <SectionDivider colorAlt />

    <SectionTitle>Tech stack</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Back-end To Front-end.
    </SectionText>
    <ListTitle>Front-end</ListTitle>
    <MainContainer>
    <ListIcons><IconContent><Icon><DiReact size='6rem'/></Icon><IconText>React.js</IconText></IconContent></ListIcons>
    <ListIcons><IconContent><Icon><DiBootstrap size='6rem'/></Icon><IconText>Bootstrap</IconText></IconContent></ListIcons>
    <ListIcons><IconContent><Icon><SiMaterialUi size='6rem'/></Icon><IconText>Material UI</IconText> </IconContent></ListIcons>
    <ListIcons><IconContent><Icon><SiRedux size='6rem'/></Icon><IconText>Redux</IconText> </IconContent></ListIcons>
    <ListIcons><IconContent><Icon><IoLogoJavascript size='6rem'/></Icon><IconText>JavaScript</IconText> </IconContent></ListIcons>
    
    
    
    </MainContainer>
    <ListTitle>Back-end</ListTitle>
    <MainContainer>
    <ListIcons><IconContent><Icon><IoLogoNodejs size='6rem'/></Icon><IconText>Node.js</IconText> </IconContent></ListIcons>
    <ListIcons><IconContent><Icon><IoLogoPython size='6rem'/></Icon><IconText>Python</IconText> </IconContent></ListIcons>
    <ListIcons><IconContent><Icon><DiPhp size='6rem'/></Icon><IconText>Php</IconText> </IconContent></ListIcons>
    <ListIcons><IconContent><Icon><DiMongodb size='6rem'/></Icon><IconText>MongoDB</IconText> </IconContent></ListIcons>
    <ListIcons><IconContent><Icon><DiMysql size='6rem'/></Icon><IconText>MySQL</IconText> </IconContent></ListIcons>

    </MainContainer>

    <ListTitle>Other technologies</ListTitle>
    <MainContainer>
    <ListIcons><IconContent><Icon><IoLogoFirebase size='6rem'/></Icon><IconText>FireBase</IconText> </IconContent></ListIcons>
    <ListIcons><IconContent><Icon><DiGit size='6rem'/></Icon><IconText>Git</IconText> </IconContent></ListIcons>
    <ListIcons><IconContent><Icon><SiJsonwebtokens size='6rem'/></Icon><IconText>JWT</IconText> </IconContent></ListIcons>
    


    </MainContainer>
    
    
  
  
  </Section>
);

export default Technologies;

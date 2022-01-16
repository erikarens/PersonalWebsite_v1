import React from "react";
import { DiFirebase, DiReact, DiZend, DiJavascript1 } from "react-icons/di";
import { FaDrawPolygon } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from "./TechnologiesStyles";

const Technologies = () => (
   <Section id="tech">
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
         Due to my side hustle "Netzhero" I already had a few projects where I had to work in a team and communicate with the Back-End of a Web-Application. Therefore I know how to combine my obtained skills to bring
         value to a project.
      </SectionText>
      <List>
         <ListItem>
            <IoLogoJavascript size="2rem" />
            <ListContainer>
               <ListTitle>Front-End</ListTitle>
               <ListParagraph>
                  Experience with: <br />
                  JavaScript, HTML, CSS, Angular, Bootstrap, JSON
               </ListParagraph>
            </ListContainer>
         </ListItem>
         <ListItem>
            <FaDrawPolygon size="2rem" />
            <ListContainer>
               <ListTitle>Design</ListTitle>
               <ListParagraph>
                  Experience with: <br />
                  Illustrator, Photoshop, Adobe XD, Figma
               </ListParagraph>
            </ListContainer>
         </ListItem>
         <ListItem>
            <GiSkills size="2rem" />
            <ListContainer>
               <ListTitle>Other Skills</ListTitle>
               <ListParagraph>
                  Experience with: <br />
                  Git, Confluence, Jira, Scrum, Kanban, WordPress
               </ListParagraph>
            </ListContainer>
         </ListItem>
      </List>
   </Section>
);

export default Technologies;

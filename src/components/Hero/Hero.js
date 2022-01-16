import React from "react";

import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import Link from "next/link";
import { NavLink } from "./HeroStyles.js";

const Hero = () => (
   <Section row nopadding>
      <LeftSection>
         <SectionTitle main center>
            Welcome to <br />
            My Personal Portfolio
         </SectionTitle>
         <SectionText>
            I'm a passionated Web-Developer from Germany.
            <br /> I dream in JavaScript, HTML & CSS.
         </SectionText>
         <Button>
            <Link href="../#projects">
               <NavLink>Learn more</NavLink>
            </Link>
         </Button>
      </LeftSection>
   </Section>
);

export default Hero;

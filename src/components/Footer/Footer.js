import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from "./FooterStyles";

const Footer = () => {
   return (
      <FooterWrapper>
         <LinkList>
            <LinkColumn>
               <LinkTitle>Call</LinkTitle>
               <LinkItem href="tel:+4915112463317">+49 151 12463317</LinkItem>
            </LinkColumn>
            <LinkColumn>
               <LinkTitle>Email</LinkTitle>
               <LinkItem href="mailto:erikarens@netzhero.de">erikarens@netzhero.de</LinkItem>
            </LinkColumn>
         </LinkList>
         <SocialIconsContainer>
            <CompanyContainer>
               <Slogan>
                  There are no problems, only solutions. - <a href="/impressum">Impressum</a>
               </Slogan>
            </CompanyContainer>
            <SocialContainer>
               <SocialIcons href="https://github.com/erikarens">
                  <AiFillGithub size="3rem" />
               </SocialIcons>
               <SocialIcons href="https://www.linkedin.com/in/erik-arens-a48865195/">
                  <AiFillLinkedin size="3rem" />
               </SocialIcons>
            </SocialContainer>
         </SocialIconsContainer>
      </FooterWrapper>
   );
};

export default Footer;

import React from "react";

import SocialLinks from "../common/SocialLinks";

import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = ({ mobile, email, city, state, socialMedia }) => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href={`tel:+91-${mobile}`}>(+91) {mobile}</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href={`mailto:${email}`}>alphavignesh98@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            All the way from {city}, {state}
          </Slogan>
        </CompanyContainer>
        <SocialLinks links={socialMedia} onlyFeatured />
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

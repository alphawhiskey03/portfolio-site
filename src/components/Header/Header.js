import Link from "next/link";
import React from "react";

import { Container, NavLink, SocialIcons, Span } from "./HeaderStyles";
import { Div1, Div2, Div3 } from "../common/styles";
import SocialLinks from "../common/SocialLinks";
const Header = ({ socialMedia }) => (
  <Container>
    <Div1>
      <Link href="/">
        <Span>Vig.</Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialLinks onlyFeatured={true} links={socialMedia} />
    </Div3>
  </Container>
);

export default Header;

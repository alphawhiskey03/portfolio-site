import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

export const Layout = ({ children, socialMedia, ...rest }) => {
  return (
    <Container>
      <Header socialMedia={socialMedia} />
      <main>{children}</main>
      <Footer socialMedia={socialMedia} {...rest} />
    </Container>
  );
};

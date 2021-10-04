import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import Head from "next/head";

export const Layout = ({children}) => {
  return (
    <Container>
      <Head>
        <title>Vig | portfolio</title>
    <meta name="title" content="Vignesh web dev"/>
    <meta name="description" content=" I'm an aspiring and passionate developer, I've been super enthusiastic about learning web/cross-platform technologies, enduring my journey as a full stack web developer. 
"/> 
    <meta name="keywords" content="web developer,react,express,node,mongodb,php,fullstack,developer"/>
    <meta name="geo.region" content="IN-TN" />
    <meta name="geo.placename" content="Coimbatore" />
    <meta name="geo.position" content="11.057688;76.968131" />
    <meta name="ICBM" content="11.057688, 76.968131" />

      </Head>
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}

import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import Head from "next/head";

export const Layout = ({children}) => {
  return (
    <Container>
      <Head>
        <title>Vignesh | Software developer coimbatore</title>
    <meta name="title" content="Vignesh | developer portfolio"/>
    <meta name="description" content=" I'm an aspiring and passionate developer, I've been super enthusiastic about learning web/cross-platform technologies, enduring my journey as a full stack web developer. 
"/> 
    <meta property="og:image" content="/images/vignesh-developer.png" />
    <meta name="keywords" content="web,react,express,node,mongodb,php,fullstack,developer"/>
    <meta name="geo.region" content="IN-TN" />
    <meta name="geo.placename" content="Coimbatore" />
    <meta name="geo.position" content="11.057688;76.968131" />
    <meta name="ICBM" content="11.057688, 76.968131" />
    <meta name="robots" content="index, follow"/>

      </Head>
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}

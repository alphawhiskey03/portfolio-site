import App from "next/app";
import Theme from "../styles/theme";
import { client } from "../sanity";
import { GET_MAINCONTENT, GET_SOCIALMEDIA } from "../constants";

export default function MyApp({
  Component,
  pageProps,
  mainContent,
  socialMedia,
}) {
  return (
    <>
      <Theme>
        <Component
          {...pageProps}
          mainContent={mainContent}
          socialMedia={socialMedia}
        />
      </Theme>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const mainContent = await client.fetch(GET_MAINCONTENT);
  const socialMedia = await client.fetch(GET_SOCIALMEDIA);

  return { ...appProps, mainContent, socialMedia };
};

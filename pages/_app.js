import React, {useState, useEffect} from 'react';
import '../src/styles/globals.css'
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {lightTheme, darkTheme} from '../src/util/theme';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

import dynamic from "next/dynamic";
import { TinaEditProvider } from "tinacms/dist/edit-state";
const TinaCMS = dynamic(() => import("tinacms"), { ssr: false });
import { TinaCloudCloudinaryMediaStore } from "next-tinacms-cloudinary";

const NEXT_PUBLIC_TINA_CLIENT_ID = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
const NEXT_PUBLIC_USE_LOCAL_CLIENT =
  process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT || 0;
const NEXT_PUBLIC_HIDE_EDIT_BUTTON =
  process.env.NEXT_PUBLIC_HIDE_EDIT_BUTTON || 0;

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(darkTheme);
  const [lightOrDark, setLightOrDark] = useState('');

  const handleLightOrDark = event => {
    const colorMode = lightOrDark === 'light' ? 'dark' : 'light';
    setLightOrDark(colorMode);
    
    const colorTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(colorTheme);
  };

  useEffect(() => {
    setTheme(lightTheme);
    setLightOrDark('light');
    
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  
  return (
    <React.Fragment >
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={{...theme}}>
      <TinaEditProvider
        showEditButton={!Boolean(Number(NEXT_PUBLIC_HIDE_EDIT_BUTTON))}
        editMode={
          <TinaCMS
            branch="tina"
            clientId={NEXT_PUBLIC_TINA_CLIENT_ID}
            isLocalClient={Boolean(Number(NEXT_PUBLIC_USE_LOCAL_CLIENT))}
            mediaStore={TinaCloudCloudinaryMediaStore}
            cmsCallback={(cms) => {
              import("react-tinacms-editor").then(({ MarkdownFieldPlugin }) => {
                cms.plugins.add(MarkdownFieldPlugin);
              });
            }}
            documentCreatorCallback={{
              /**
               * After a new document is created, redirect to its location
               */
              onNewDocument: ({ collection: { slug }, breadcrumbs }) => {
                const relativeUrl = `/${slug}/${breadcrumbs.join("/")}`;
                return (window.location.href = relativeUrl);
              },
              /**
               * Only allows documents to be created to the `Blog Posts` Collection
               */
              filterCollections: (options) => {
                return options.filter(option => option.label === "Products List" || option.label === "News List");
              },
            }}
            /**
             * Treat the Global collection as a global form
             */
            formifyCallback={({ formConfig, createForm, createGlobalForm }) => {
              if (formConfig.id === "getGlobalDocument") {
                return createGlobalForm(formConfig);
              }

              return createForm(formConfig);
            }}
            {...pageProps}
          >
            {(livePageProps) => (
              <>
                <CssBaseline />
                <Navbar lightOrDark={lightOrDark} handleLightOrDark={handleLightOrDark}/>
                <Component {...livePageProps} />
                <Footer/>
              </>
            )}
          </TinaCMS>
        }
      >
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Navbar lightOrDark={lightOrDark} handleLightOrDark={handleLightOrDark}/>
          <Component {...pageProps} />
        <Footer/>
      </TinaEditProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   pageProps: PropTypes.object.isRequired,
// };

export default MyApp;
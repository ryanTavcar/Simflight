import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {lightTheme, darkTheme} from '../src/util/theme';
import Navbar from '../src/components/Navbar';
import '../src/styles/globals.css'
import Footer from '../src/components/Footer';
import {wrapper} from '../src/redux/store'

const MyApp = (props) => {

  const { Component, pageProps } = props;
  const [theme, setTheme] = useState(lightTheme);
  const [lightOrDark, setLightOrDark] = useState('light');

  const handleLightOrDark = event => {
    const colorMode = lightOrDark === 'light' ? 'dark' : 'light';
    setLightOrDark(colorMode);
    
    const colorTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(colorTheme);
  };

  useEffect(() => {
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
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Navbar lightOrDark={lightOrDark} handleLightOrDark={handleLightOrDark}/>
          <Component {...pageProps} />
        <Footer/>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp);
// export default MyApp;
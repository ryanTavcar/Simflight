import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Grid, Hidden, Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  about: {
    height: '100%',
    width: '100%',
    padding: 0
  },
  mission: {
    backgroundColor: '#d3d7d8'
  },
  simflight: {
    backgroundColor: '#263238',
    color: 'white'
  },
}));

const About = () => {

  const styles = useStyles()
  const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"));

  return (
    <Container 
    maxWidth="xl" 
    className={styles.about}>
      <Head>
          <title>Simflight | About</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Grid 
      container
      >
        <Grid 
        container
        item 
        xs={12} 
        sm={12} 
        md={12} 
        lg={6}
        alignItems="center"
        className={styles.mission}>
          <Box
          my={5}
          mx={isMobile ? 5 : 10}
          className="border">
          <Box
          my={2}>
            <Typography 
            variant="h4" 
            component="h4">
              Our Mission
            </Typography>
          </Box>
          <Box
          my={2}>
          <Typography 
            variant="p" 
            component="p">
              To maintain our leading position of providing quality built Category B approved Synthetic Trainers.
            </Typography>
          </Box>
          <Box>
          <Typography 
            variant="p" 
            component="p">
              The Company first began in 1995 trading as Support Pilot Services. It provided quality ground based IFR training using a LINK Airtrainer model AT-67. This trainer was first built in the early sixties and used for many years by Ansett Australia for airline pilot training. It has two axii of motion in pitch and roll and uses vacuum tubes yet is an excellent IFR trainer. It is still used by the company today. Support Pilot Services still trades today selling Mike (lip) lights to the Australasian market as an exclusive agent for Seitz Scientific Industries, USA.
            </Typography>
          </Box>
          </Box>
        </Grid>

        <Hidden 
        mdDown>
          <Grid 
          item 
          xs={12} 
          md={6} 
          className={styles.simflight}>
            <Typography 
            variant="h4" 
            component="h3">
                About Simflight
              </Typography>
              <Box my={5}>
                <Image src="/images/about-feature.png" alt="about-feature" height="600" width="550"/>
              </Box>
          </Grid>
        </Hidden>

      </Grid>
    </Container>
  );
}

export default About;
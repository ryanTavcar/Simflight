  
import React from 'react';
import {Container, 
  Typography, 
  Grid, 
  Hidden,
  ImageList,
  ImageListItem
 } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    // height: '100%',
    width: '100%',
    padding: 0,
    minHeight: 'calc(100vh - 170px)',
  },
  mission: {
    backgroundColor: '#d3d7d8'
  },
  simflight: {
    backgroundColor: '#263238',
  },
  imageContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  imageList: {
    width: '100%',
    height: '100%',
    overflowY: 'hidden',
  },
}));

const itemData = [
  {
    id: 1,
    img: 'images/me-aaron.gif',
    title: 'Me and my son',
  },
  {
    id: 2,
    img: 'images/b3.jpg',
    title: 'Me and my crew',
  },
  {
    id: 5,
    img: 'images/me-aaron.gif',
    title: 'Me and my son',
    rows: 2
  },
  {
    id: 4,
    img: 'images/airwing.jpg',
    title: 'Police Airwing',
    cols: 2,
  },
  {
    id: 3,
    img: 'images/dad.jpg',
    title: 'Me',
  },
  {
    id: 6,
    img: 'images/b3.jpg',
    title: 'Me and my crew',
  },
  {
    id: 7,
    img: 'images/dad.jpg',
    title: 'Me',
  },
  {
    id: 8,
    img: 'images/airwing.jpg',
    title: 'Police Airwing',
  },
]

const About = () => {

  const classes = useStyles()
  const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"));

  return (
    <Grid container direction="row" className={classes.container}>
      <Grid item xs={12} md={6}>
        <Grid container  justifyContent="center" style={{height: '100%'}}>
          <Grid container item alignItems="flex-end" xs={8}>
            <Typography variant="h4" component="h2" gutterBottom>
              Our Mission
            </Typography>
          </Grid>

          <Grid item  xs={8}>
            <Typography variant="body1" component="h6">
              To maintain our leading position of providing quality built Category B approved Synthetic Trainers. 
              <br/>
              <br/>
              The Company first began in 1995 trading as Support Pilot Services. It provided quality ground based IFR training using a LINK Airtrainer model AT-67. This trainer was first built in the early sixties and used for many years by Ansett Australia for airline pilot training. It has two axii of motion in pitch and roll and uses vacuum tubes yet is an excellent IFR trainer. It is still used by the company today. Support Pilot Services still trades today selling Mike (lip) lights to the Australasian market as an exclusive agent for Seitz Scientific Industries, USA.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* <Hidden mdDown> */}
        <Grid item  xs={12} md={6}>
          <Grid container justifyContent="center">
            <Grid item md={6} style={{marginTop: 15}}>
              <Typography variant="h3" component="h1" gutterBottom>
                About Simflight
              </Typography>
            </Grid>

            <Grid item xs={10} className={classes.imageContainer}>
              <ImageList rowHeight={160} className={classes.imageList} cols={3} gap={6}>
                {itemData.map((item) => (
                  <ImageListItem key={item.id} cols={item.cols || 1} rows={item.rows || 1}>
                    <img src={item.img} alt={item.title} />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>

          </Grid>
        </Grid>
      {/* </Hidden> */}

    </Grid>
  );
}

export default About;
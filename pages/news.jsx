import React, {useState, useEffect} from 'react';
import { getStaticPropsForTina } from "tinacms";
import NewsList from '../src/components/NewsList'
import { makeStyles } from "@material-ui/core/styles";
import {
  Container, 
  Grid, 
  Select, 
  Typography, 
  FormControl, 
  InputLabel,
  MenuItem
} from '@material-ui/core';
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
      marginTop: 50,
      padding: 0,
    }
}));

const NewsPage = (props) => {
  const classes = useStyles();
  const news = props.data.getNewsList.edges
  
  const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"));
  const isLaptop = useMediaQuery(theme => theme.breakpoints.down("md"));

  const [date, setDate] = useState('');

  const handleChange = (event) => {
    setDate(event.target.value);

    const sortedArticles = news.sort((a, b) => {
      const aa = a.node.values.date.split('-').reverse().join();
      const  bb = b.node.values.date.split('-').reverse().join();
      return aa < bb ? -1 : (aa > bb ? 1 : 0);
    });

    if (event.target.value === 'oldest') {
      return sortedArticles;
    } else {
      return sortedArticles.reverse();
    }

  };

  useEffect(() => {
    news.sort(function(a, b){
      const aa = a.node.values.date.split('-').reverse().join();
      const  bb = b.node.values.date.split('-').reverse().join();
      return aa > bb ? -1 : (aa < bb ? 1 : 0);
    });
  }, []);


  return (
      <Container maxWidth={isMobile ? 'sm' : isLaptop ? 'md' : 'lg'} className={classes.container}>
        <Grid container direction="column">
          <Grid item>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography variant="h3">
                  News
                </Typography>
              </Grid>

              <Grid item>
                <FormControl fullWidth style={{width: '6rem'}}>
                  <InputLabel id="select-label">Sort By</InputLabel>
                  <Select
                    labelId="select-label"
                    id="sortby-select"
                    value={date}
                    label="date"
                    onChange={handleChange}
                  >
                    <MenuItem value={'newest'}>Newest</MenuItem>
                    <MenuItem value={'oldest'}>Oldest</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <hr/>

          </Grid>

          <Grid item>
            <NewsList data={news} />
          </Grid>
        </Grid>
      </Container>
  );
};

export const getStaticProps = async () => {
    const tinaProps = (await getStaticPropsForTina({
      query: `#graphql
        query PageQuery {
          getNewsList {
            edges {
              node {
                id
                values
                sys {
                  filename
                }
              }
            }
          }
        }
      `,
      variables: {},
    }))
  
    return {
      props: {
        ...tinaProps,
      },
    };
  };

export default NewsPage;
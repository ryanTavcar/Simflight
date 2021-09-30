import React from 'react';
import { getStaticPropsForTina } from "tinacms";
import News from '../src/components/News'
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import {Container} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
      // border: '1px solid red',
      // height: '100vh',
      // minHeight: 'calc(100vh - 170px)',
      padding: 0,
      [theme.breakpoints.down('sm')]: {
        marginTop: 50
      }
    }
}));

const NewsPage = (props) => {
    const classes = useStyles();
    const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"));
    const isLaptop = useMediaQuery(theme => theme.breakpoints.down("md"));
    const news = props.data.getNewsList.edges
    return (
        <Container maxWidth={isMobile ? 'sm' : isLaptop ? 'md' : 'lg'} className={classes.container}>
            <News data={news} />
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
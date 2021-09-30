import React from 'react';
import { getStaticPropsForTina, staticRequest } from "tinacms";
import News from '../../src/components/News';
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import {Container} from '@material-ui/core';
import FourOhFour from '../404'
import Article from '../../src/components/Article';

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


const NewsPost = (props) => {
    const classes = useStyles();
    const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"));
    const isLaptop = useMediaQuery(theme => theme.breakpoints.down("md"));

    return (
        <>
            {props.data && props.data.getNewsDocument ?
            <Container maxWidth={isMobile ? 'sm' : isLaptop ? 'md' : 'lg'} className={classes.container}>
                <Article {...props.data.getNewsDocument} />
            </Container>
            :
                <FourOhFour />
            }
        </>
    );
};

export const getStaticProps = async ({ params }) => {
    const tinaProps = (await getStaticPropsForTina({
      query: `#graphql
        query NewsPostQuery($relativePath: String!) {
          getNewsDocument(relativePath: $relativePath) {
            data {
              title
              date
              heroImg
              body
            }
          }
        }
      `,
      variables: { relativePath: `${params.filename}.md` },
    }))
    return {
      props: {
        ...tinaProps,
      },
    };
  };

export const getStaticPaths = async () => {
    const newsListData = (await staticRequest({
      query: `#graphql
        {
          getNewsList {
            edges {
              node {
                sys {
                  filename
                }
              }
            }
          }
        }
      `,
    })) 
    return {
      paths: newsListData.getNewsList.edges.map((post) => ({
        params: { filename: post.node.sys.filename },
      })),
      fallback:'blocking',
    };
  };

export default NewsPost;
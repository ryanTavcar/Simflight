import React from 'react';
import { useMediaQuery } from "@material-ui/core";
import Link from 'next/link'
import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import { BiRightArrowAlt } from "react-icons/bi";
import Hero from '../src/components/Hero';
import { getStaticPropsForTina } from "tinacms";

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: 'calc(100vh - 170px)',
        width: '100%',
        marginBottom: 100,
        [theme.breakpoints.between('sm', 'md')]: {
            minHeight: 0,
        }
    },
}));

function FourOhFour(props) {
    const classes = useStyles();
    const isLaptop = useMediaQuery(theme => theme.breakpoints.down("md"));
    const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"));
    const data = props.data.getFourOhFourList.edges[0].node.data

    return (
        <Container maxWidth={isMobile ? 'sm' : isLaptop ? 'md' : 'lg'} className={classes.container}>
            <Hero 
                data={{
                    headline: data.headline,
                    text: data.text,
                    actions: [
                        {
                            label: data.actions[0].label,
                            type: data.actions[0].type,
                            icon: data.actions[0].icon,
                            link: data.actions[0].link,
                        },
                    ],
                    image: {
                        src: data.image.src,
                        alt: data.image.alt
                    }
                }}
            />
        </Container>
    );
};

export const getStaticProps = async () => {
    const tinaProps = (await getStaticPropsForTina({
      query: `#graphql
      query PageQuery {
        getFourOhFourList {
            edges {
              node {
                data {
                  headline
                  text
                  actions {
                    label
                    type
                    icon
                    link
                  }
                  image {
                    src
                    alt
                  }
                }
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

export default FourOhFour;
import { useMediaQuery } from "@material-ui/core";
import Head from 'next/head'
// import Link from 'next/link'
import Image from 'next/image'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    border: {
        height: '100',
        width: '100%',
        border: '1px solid blue',
        padding: 0,
        margin: 0,
    },
    title: {
    },
    subtitle: {
      margin: '2rem 0'
    }
}));

const Landing = () => {

    const styles = useStyles();
    const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"));
    
    return (
        <main 
        // maxWidth="lg" 
        className={styles.border}
        >
            <Grid 
            container 
            // className={styles.border}
            direction="row"
            alignItems="center"
            >
                <Grid 
                item 
                xs={12} 
                md={6}
                lg={6}
                // className={styles.border}
                > 
                <Typography 
                className={styles.title}
                variant="h4" 
                component="h1" 
                align={isMobile ? 'center' : ''}
                gutterBottom
                >
                    The Future Imagined
                </Typography>
                <Typography 
                className={styles.subtitle}
                variant="subtitle2" 
                component="p" 
                gutterBottom
                >
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                </Typography>
                <Box
                textAlign={isMobile ? 'center' : ''}
                // className={styles.border}
                >
                    <Button 
                    color="primary" 
                    variant="contained"
                    size="large"
                    href='/products'
                    >
                        See Products
                    </Button>
                </Box>
                </Grid>

                <Grid 
                item 
                xs={12} 
                md={6}
                >
                <Box
                textAlign={isMobile ? 'center' : ''}
                >
                    <Image src="/images/helicopter-feature.png" alt="helipcopter feature" width="600" height="600" />
                </Box>
                </Grid>
            </Grid>
      </main>
    );
}

export default Landing;
import Link from 'next/link'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from "@material-ui/core/styles";
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Hidden,
  } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: '#dfdadaf5',
        // height: 'auto',
        // padding: 0,
        // margin: 0,
    },
    border: {
      border: '1px solid red'
    },
    title: {
    },
    subtitle: {
      margin: '2rem 0'
    },
    listItem: {
        margin: 0,
        padding: 0,
    },
    listTitle: {
        fontWeight: 'bold'
    },
    navlink: {
        color: '#000',
        textDecoration: 'none',
        '&:hover': {
          backgroundColor: '#F2F4F5'
        },
    },
}));

const products = [
    {
        text: 'Products',
        pathname: `/products/`
    },
    {
        text: 'Downloads',
        pathname: '/products/downloads'
    },
    {
        text: 'Support Pilot Services',
        pathname: '/contact'
    },
];

const about = [
    {
        text: 'About us',
        pathname: `/about-us`
    },
    {
        text: 'news',
        pathname: '/news'
    }
];

const Footer = () => {

    const styles = useStyles();

    return (
        <Hidden mdDown >
            <footer className={styles.footer}>
            <Container maxWidth="xl" className={styles.footer}>
                    <Grid container>
                        <Grid item >
                                <List>
                                    <Typography
                                    className={styles.listTitle}
                                    variant="subtitle1"
                                    component="h3"
                                    gutterBottom
                                    >
                                        Products
                                    </Typography>
                                    {products.map((item) => {
                                        return (
                                            <ListItem
                                            className={styles.listItem}
                                            button
                                            component={'a'}
                                            href={item.pathname}
                                            key={item.text}
                                            >
                                                <ListItemText
                                                    primary={item.text}
                                                    className={styles.fontColor}
                                                />
                                            </ListItem>
                                        )
                                    })}
                                </List>
                        </Grid>

                        <Grid item>
                                <List>
                                    <Typography
                                    className={styles.listTitle}
                                    variant="subtitle1"
                                    component="h3"
                                    gutterBottom
                                    >
                                        About
                                    </Typography>
                                    {about.map((item) => {
                                        return (
                                            <ListItem
                                            className={styles.listItem}
                                            button
                                            component={'a'}
                                            href={item.pathname}
                                            key={item.text}
                                            >
                                                <ListItemText
                                                    primary={item.text}
                                                    className={styles.fontColor}
                                                />
                                            </ListItem>
                                        )
                                    })}
                                </List>
                        </Grid>

                        <Grid item>
                                <List>
                                <Typography
                                    className={styles.listTitle}
                                    variant="subtitle1"
                                    component="h3"
                                    gutterBottom
                                    >
                                        Contact
                                    </Typography>
                                    <Link href="contact">
                                        <a className={styles.navlink}>
                                            Contact us
                                        </a>
                                    </Link>
                                </List>
                        </Grid>
                    </Grid>
                </Container>
                </footer>
        </Hidden>
    );
}

export default Footer;
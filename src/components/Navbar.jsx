import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined'

import {
    Box,
    Drawer,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Hidden,
    Toolbar,
    IconButton,
    Grid,
    Button,
    AppBar,
    Switch,
  } from '@material-ui/core'

const menuItems = [
    {
        text: 'Home',
        pathname: '/'
    },
    {
        text: 'About',
        pathname: '/about'
    },
    {
        text: 'Products',
        pathname: '/products/'
    },
    {
        text: 'Contact',
        pathname: '/contact'
    },
];

const useStyles = makeStyles(theme =>({
    navbar: {
        // minHeight: 40,
        // border: '1px solid red'
    },
    menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    navlink: {
      color: '#000',
      cursor: 'pointer',
      textDecoration: 'none',
      'a:visited': {
        color: '#000',
      },
        // border: '1px solid red',

    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        // width: '100%',
        // flexShrink: 0,
        // height: 30,
        // border: '1px solid red',
      },
    },
    drawerPaper: {
      width: 300,
      background: '#F2F4F5',
    },
    drawerRoot: {
      display: 'flex',
      flexDirection: 'column',
      toolbar: theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    fontColor: {
      color: '#000',
    },
    dividerColor: {
      backgroundColor: '#000',
    },
    menuButton: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    linkContainer: {
        // width: 400,
        // float: 'right',
        height: 20,
        // border: '1px solid red'
    }
}))

const Navbar = ({lightOrDark, handleLightOrDark}) => {

    const styles = useStyles();
    const drawer = Sidebar();
    const [mobileOpen, setMobileOpen] = useState(false)
    const [container, setContainer] = useState(null)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }
    
    return (
        <AppBar position="sticky" color="default">
            <Toolbar className={styles.navbar}>
                <IconButton edge="start" color="inherit" aria-label="menu" className={styles.menuButton} onClick={handleDrawerToggle}>
                    <MenuIcon />
                </IconButton>

                <Grid container justifyContent="center" className={styles.drawer} >
                    {/* mobile */}
                    <Hidden mdUp >
                        <Grid container direction="row" justifyContent="flex-end">
                            <Grid item md={4} className={styles.linkContainer}>
                                <Grid container direction="row" justifyContent="flex-end" >
                                    <Button size="small" onClick={() => handleLightOrDark()}>
                                        {lightOrDark}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Drawer
                            container={container}
                            variant='temporary'
                            anchor='left'
                            classes={{ paper: styles.drawerPaper }}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{keepMounted: true}}>
                            {drawer}
                        </Drawer>
                    </Hidden>

                    {/* tablet, laptop, desktop */}
                    <Hidden smDown >
                        <Grid item md={4} className={styles.linkContainer}>
                            <Typography style={{fontFamily: 'Bungee', letterSpacing: 1}}>
                                <b>Simflight</b>
                            </Typography>
                            {/* <Image src='/images/simflight_logo_transparent_1.png' width='100' height='32' /> */}
                        </Grid>
                        <Grid item md={4} className={styles.linkContainer}>
                            <Grid container direction="row" alignItems="center" justifyContent="space-evenly">
                                {menuItems.map(item => (
                                    <Grid item key={item.text}>
                                        <Link href={item.pathname} className={styles.navlink}>
                                            <Typography color="textPrimary" style={{cursor: 'pointer'}}>
                                                {item.text}
                                            </Typography>
                                        </Link>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                            <Grid item md={4} className={styles.linkContainer}>
                                <Grid container direction="row" justifyContent="flex-end" >
                                    <Button size="small" onClick={() => handleLightOrDark()}>
                                        {lightOrDark}
                                    </Button>
                                </Grid>
                            </Grid>
                    </Hidden>

                </Grid>

            </Toolbar>
        </AppBar>
    );
};

const Sidebar = () => {
    const styles = useStyles();

    return (
        <Box margin='8rem 1rem 0 1rem'>
            <div className={styles.toolbar} >
                <Divider className={styles.dividerColor} />
                <Box marginTop='2rem'>
                    <List>
                        {menuItems.map((item) => {
                            return (
                                <ListItem
                                button
                                component={'a'}
                                href={item.pathname}
                                key={item.text}
                                >
                                    <ListItemIcon className={styles.fontColor}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.text}
                                        className={styles.fontColor}
                                    />
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
            </div>
        </Box>
    )
}

export default Navbar;


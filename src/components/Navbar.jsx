import React, { useState, useEffect } from 'react'
import Image from'next/image';
import Link from'next/link';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Theme from '../util/theme'
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
    AppBar
  } from '@material-ui/core'

const menuItems = [
    {
        text: 'About',
        pathname: '/about'
    },
    {
        text: 'Products',
        pathname: '/products'
    },
    {
        text: 'Contact',
        pathname: '/contact'
    },
];

const useStyles = makeStyles(theme =>({
    navbar: {
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
        // padding: 0,
        // margin: 0,
    },
    menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    navlink: {
      color: '#000',
      textDecoration: 'none',
      'a:visited': {
        color: '#000',
      },
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: '90%',
        flexShrink: 0,
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
    border: {
        border: '1px solid red'
    },
    linkContainer: {
        width: 400,
        float: 'right'
    }
}))

const Navbar = () => {

    const styles = useStyles();
    const drawer = Sidebar();
    const [mobileOpen, setMobileOpen] = useState(false)
    const [container, setContainer] = useState(null)
    
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    useEffect(() => {
        if (typeof windoe !== 'undefined') {
            setContainer(window().document.body )
        } else {
            setContainer(undefined)
        }
    }, [])
    
    return (
        <AppBar 
        position="static" 
        color="default"
        >
            <Toolbar className={styles.navbar}>
                <IconButton 
                edge="start" 
                color="inherit" 
                aria-label="menu" 
                className={styles.menuButton} 
                onClick={handleDrawerToggle}>
                    <MenuIcon />
                </IconButton>
                {/* <Typography variant="h6" className={styles.title}>Simflight</Typography> */}
                <Link href="/">
                    <Image src="/images/simflight_logo.jpg" alt="logo" height="20" width="60" />
                </Link>
                <nav className={styles.drawer} >
                    <Hidden 
                    mdUp 
                    >
                        <Drawer
                        container={container}
                        variant='temporary'
                        anchor='left'
                        classes={{ paper: styles.drawerPaper }}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        >
                        {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden 
                    smDown 
                    // implementation='css'
                    >
                        <Grid 
                        container 
                        direction="row" 
                        justifyContent="space-evenly"
                        className={styles.linkContainer}
                        >
                            {menuItems.map(item => {
                                return (
                                    <Box key={item.text}>
                                        <Link 
                                        href={item.pathname}
                                        >
                                        <a className={styles.navlink}>
                                            {item.text}
                                        </a>
                                        </Link>
                                    </Box>
                                )
                            })}
                        </Grid>
                    </Hidden>
                </nav>
            </Toolbar>
        </AppBar>
    );
};

const Sidebar = () => {
    const styles = useStyles();

    return (
        <Box margin='8rem 1rem 0 1rem'>
            <div className={styles.toolbar} >
                <Link href='/'>
                    <Image src="/images/simflight_logo.jpg" alt="logo" height="100" width="200" />
                </Link>
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

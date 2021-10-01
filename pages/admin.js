import React, { useState } from 'react'
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { useEditState } from "tinacms/dist/edit-state";
import { BiRightArrowAlt } from "react-icons/bi";
import {
  Container,
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import axios from "axios";
import Admin from '../src/components/Admin';
import Alert from '../src/components/Alert'
import { server } from '../config/index.js'
// import { Button } from "tinacms";


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

const GoToEditPage = () => {

    const classes = useStyles();
    const isLaptop = useMediaQuery(theme => theme.breakpoints.down("md"));
    const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"));

    const { edit, setEdit } = useEditState();
    const router = useRouter();

    const [userInfo, setUserInfo] = useState(false) 
    const [loading, setLoading] = useState(true) 
    const [error, setError] = useState('') 
    const [email, setEmail] = useState('')
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    })

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value })
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword })
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    const submitHandler = (e) => {
        e.preventDefault()
        signin();
    }; 

    const signin = async () => {
        const password = values.password
        try {
            const {status} = await axios.post("/api/users/", { email, password });
            console.log(status)
            if (status === 200) {
                setUserInfo(true)
                setLoading(false)
                // localStorage.setItem('userInfo', JSON.stringify(data));
            }
        } catch (error) {
            const errorMessage = error.response.data.error ? error.response.data.error : error.message;
            setError(errorMessage)
        }
    };

  return (
    <Container maxWidth={isMobile ? 'sm' : isLaptop ? 'md' : 'lg'} className={classes.container}>
      {userInfo ? 
            (
                <Admin 
                setEdit={() => setEdit(!edit)}
                data={{
                    headline: "Admin Login",
                    image: {
                    src: "/images/helicopter-feature.png",
                    alt: "Helicopter hero image"
                    },
                    // if edit is true
                    loggedInActions: [
                    {
                        label: "Home Page",
                        type: "Button",
                        icon: <BiRightArrowAlt size={25} />,
                        link: "/",
                    },
                    {
                        label: "Log Out",
                        type: "Button",
                        icon: <BiRightArrowAlt size={25} />,
                        link: "",
                    },
                    ],
                    // if edit is false
                    loggedOutActions: [
                    {
                        label: "Log in",
                        type: "Button",
                        icon: <BiRightArrowAlt size={25} />,
                        link: "",
                    },
                    {
                        label: "Home Page",
                        type: "Button",
                        icon: <BiRightArrowAlt size={25} />,
                        link: "/",
                    },
                    ],
                    edit
                }}
            />
            )
            : 
            (
                <Box
                    m='4rem 2rem 2rem 2rem'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    height='70vh'
                >
                    <Grid container spacing={0} justifyContent='center' alignItems='center'>
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
                            <Card>
                            <CardContent>
                                <Box display='flex' justifyContent='center'>
                                <Box paddingTop='2rem' display='flex'>
                                    <Box display='flex' p='1rem'>
                                    <Typography variant='h6' component='span'>
                                        Simflight
                                    </Typography>
                                    </Box>
                                </Box>
                                </Box>
                                <Box
                                paddingTop='2rem'
                                padding='2rem 1rem 0 1rem'
                                display='flex'
                                justifyContent='center'
                                >
                                <form  onSubmit={submitHandler}>
                                    <div className='alert-box'>
                                    {error && (
                                        <Alert variant='alert alert-danger'>{error}</Alert>
                                    )}
                                    </div>
                                    <Typography gutterBottom>Welcome back.</Typography>

                                    <Box
                                    display='flex'
                                    justifyContent='space-between'
                                    paddingTop='1rem'
                                    >
                                    <InputLabel htmlFor='email'>Email</InputLabel>
                                    </Box>

                                    <OutlinedInput
                                    type='email'
                                    name='email'
                                    id='email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    variant='outlined'
                                    margin='dense'
                                    
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    />
                                    <Box
                                    display='flex'
                                    justifyContent='space-between'
                                    paddingTop='1rem'
                                    >
                                    <InputLabel htmlFor='password'>Password</InputLabel>
                                    </Box>
                                    <OutlinedInput
                                    id='password'
                                    name='password'
                                    variant='outlined'
                                    margin='dense'
                                    
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position='end'>
                                        <IconButton
                                            aria-label='toggle password visibility'
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge='end'
                                        >
                                            {values.showPassword ? (
                                            <Visibility />
                                            ) : (
                                            <VisibilityOff />
                                            )}
                                        </IconButton>
                                        </InputAdornment>
                                    }
                                    />
                                    <Box
                                    paddingTop='1rem'
                                    display='flex'
                                    justifyContent='center'
                                    >
                                    <Button type='submit' variant='contained' color='primary'>
                                        Sign in
                                    </Button>
                                    </Box>
                                </form>
                                </Box>
                            </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            )
    }
    </Container>
  );
};

export default GoToEditPage;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    container: {
        // border: '1px solid blue',
        padding: '0px 50px',
    },
    formContainer: {
        // border: '1px solid purple',
        height: 'calc(100vh - 170px)',
        padding: 50,
        backgroundColor: theme.palette.type === 'light' ? 'white' : '#424242',
        boxShadow: "5px 2px 10px 5px rgba(0,0,0,0.2),-5px 1px 10px 5px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    },  
    formInput :{
        width: '100%',
        height: 50,
        border: '1px solid',
        borderColor: 'rgba(0, 0, 0, 0.26)',
        boxShadow: 'inset 0px 0px 1px 0px rgba(0, 0, 0, 0.54)',
        borderRadius: 5,
        marginTop: 10
    },
    messageInput :{
        width: '100%',
        height: 100,
        borderRadius: 5,
        marginTop: 10,
        order: '1px solid',
        borderColor: 'rgba(0, 0, 0, 0.26)',
        boxShadow: 'inset 0px 0px 1px 0px rgba(0, 0, 0, 0.54)',
    },
    formButton: {
        width: '100%',
        height: 50,
    }
}))

const Contact = () => {

    const classes = useStyles();
    return (
        // <Container maxWidth="xs" style={{minHeight: 'calc(100vh - 170px)'}}>
        <Grid container direction="row" className={classes.container} style={{minHeight: 'calc(100vh - 170px)'}}>
                <Grid item xs={12} md={5} >
                    <form>
                        <Grid container direction="row" justifyContent="center" spacing={2} className={classes.formContainer}>
                            <Grid item xs={12} md={6}>
                                <label htmlFor="firstName">First Name <span>*</span></label>
                                <input type="text" required className={classes.formInput} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <label htmlFor="lasttName">Last Name <span>*</span></label>
                                <input type="text" required className={classes.formInput}  />
                            </Grid>
                            <Grid item xs={12}>
                                <label htmlFor="email">Email <span>*</span></label>
                                <input type="email" required className={classes.formInput}  />
                            </Grid>
                            <Grid item xs={12}>
                                <label htmlFor="message">Subject <span>*</span></label>
                                <select required className={classes.formInput} >
                                    <option value="genral">General</option>
                                    <option value="business">Business</option>
                                    <option value="products">Products</option>
                                </select>
                            </Grid>
                            <Grid item xs={12}>
                                <label htmlFor="message">Message <span>*</span></label>
                                <textarea type="text" required className={classes.messageInput}  />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" className={classes.formButton} >
                                    Send Message
                                </Button>
                            </Grid>
                        </Grid>
                    </form> 
                </Grid>

                <Grid item xs={12} md={7} style={{padding: 60, marginTop: 140}}>
                    <Grid container direction="column" spacing={5}>
                        <Grid item xs={12} md={10}>
                            <Typography variant="h4">
                                <b>How Can We Help?</b>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={10} >
                            <Typography variant="h6" color="textSecondary">
                                Please select a subject related to your inquiry. If you don't find what you need, please select 'General'.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={10} >
                            <Typography variant="h6">
                                <b>FAQ</b>
                            </Typography>
                        </Grid>
                        {/* <Grid item xs={12} md={10} >
                            <Typography variant="subtitle1">
                               <b>Shipping</b>
                            </Typography>
                            <hr/>
                        </Grid> */}
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant="subtitle1"><b>Simglight</b></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant="subtitle1"><b>Shipping</b></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant="subtitle1"><b>Products</b></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </Grid>
                </Grid>
        </Grid>
        // </Container>
    );
}

export default Contact;


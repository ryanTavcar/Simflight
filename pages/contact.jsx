import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from 'next/link'

const Contact = () => {
    return (
        <Container maxWidth="xs" style={{minHeight: 'calc(100vh - 170px)'}}>
            <Grid >
                <Typography variant="h4" component="h1" gutterBottom>
                    Contact page
                </Typography>
                <Link  href="/">
                    <Button variant="contained" color="primary">
                        Go to the main page
                    </Button>
                </Link>
            </Grid>
        </Container>
    );
}

export default Contact;


import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from 'next/link'

const Contact = () => {
    return (
        <Container maxWidth="xs">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Contact page
                </Typography>
                <Link  href="/">
                    <Button variant="contained" color="primary">
                        Go to the main page
                    </Button>
                </Link>
            </Box>
        </Container>
    );
}

export default Contact;
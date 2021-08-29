import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <Container maxWidth="xl" className={styles.border}>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
            About page
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
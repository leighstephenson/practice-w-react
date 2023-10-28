import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <center>
      <Card sx={{ width: '75%', boxShadow: 6, }}>
        <CardContent>
          <Typography variant="h2"> About </Typography>  
          <h6> This is a place to practice coding with React. </h6>

          <Button variant="outlined">
            Test
          </Button>

          <br /> <br />

          <Button variant="contained">
            Test
          </Button>
          
          <br /> <br />

          <button className="btn"> Test </button>

        </CardContent>
      </Card>
    </center>
  );
}

export default AboutPage;

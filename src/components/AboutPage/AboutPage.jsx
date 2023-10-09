import React from 'react';
import { Button, Card, CardContent } from '@mui/material';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <center>
      <Card sx={{ width: '75%', boxShadow: 6,}}>
        <CardContent>
        <h4> About </h4>
        <h6> This is a place to practice coding with React. </h6>
        <Button className="btn" variant="outlined">
          Test
        </Button>
        </CardContent>
      </Card>
    </center>
  );
}

export default AboutPage;

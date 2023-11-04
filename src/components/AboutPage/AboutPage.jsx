import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

function AboutPage() {

  const [value, setValue] = React.useState(30);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <center>
      <Card sx={{ width: '75%', boxShadow: 6, }}>
        <CardContent>
          <Typography variant="h2"> About </Typography>
          <h6> This is a place to practice coding with React. </h6>

          <Slider aria-label="Volume" color="primary"
            value={value} onChange={handleChange} />

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

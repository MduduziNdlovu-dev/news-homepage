import { Box, Grid } from '@mui/material';
import React from 'react';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import News from '../../components/News';
import Rankings from '../../components/Rankings';

export default function Home() {
  return (
    <Box>
      <Navbar/>
      <Grid container >
        <Grid size={{xs:12,sm:4,md:8}} >
          <Header/>
        </Grid>
        <Grid size={{xs:12,sm:4,md:4}} >
          <News/>
        </Grid>
        <Grid size={12}>
          <Rankings/>
        </Grid>
      </Grid>
    </Box>
  );
}

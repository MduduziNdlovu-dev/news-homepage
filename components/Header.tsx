import { Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <Grid container>
      <Grid >
        <Image src="/assets/images/image-web-3-desktop.jpg" width={750} height={350} alt=""/>
      </Grid>
      <Grid container>
        <Grid size={6}>
          <Typography variant="h4" sx={{
            fontSize: '3rem',
            fontWeight: 900,
            color: 'black',
            padding: '1rem 1rem 0rem 0rem',
          }}>The Bright Future of Web 3.0?</Typography>
        </Grid>
        <Grid size={6}>
          <Typography variant="body1" sx={{
            color: "hsl(236, 13%, 42%)",
            marginTop: '1rem',
            marginRight: '2rem',
          }}>
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
          </Typography>
          <Button variant="contained" sx={{
            backgroundColor: 'hsl(5, 85%, 63%)', marginTop: '2rem', color:"hsl(240, 100%, 5%)", fontWeight: 800, padding: '1rem 2rem', width: '12rem',letterSpacing:'0.2rem', height:'3rem'}}>
            Read More
          </Button>
        </Grid>

      </Grid>
    </Grid>
  )
}

export default Header
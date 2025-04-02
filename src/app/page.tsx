import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import Navbar from '../../components/Navbar';
import Image from 'next/image';

export default function Home() {
  const news = [{
    title:'Hydrogen VS Electric Cars',
    description:'Will hydrogen-fueled cars ever catch up to EVs?',
    },
    {
      title:'The Downsides of AI Artistry',
      description:'What are the possible adverse effects of on-demand AI image generation?',
    },
    {
      title:'Is VC Funding Drying Up?',
      description:'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
    }
  ]
  return (
    <Box>
      <Navbar/>
      <Grid container spacing={1}>
        <Grid size={{xs:12, md:6,lg:8}}>
          <Image src="/assets/images/image-web-3-desktop.jpg" alt="image-web-3-desktop" width={700} height={400} style={{width:'100%', height:'auto'}}/>

          <Grid container spacing={2}>
            <Grid size={{xs:12, md:6}} sx={{
                padding:'20px',
                color:'white',
              }}>
             
                <Typography variant="h4" sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 900,
                  color: 'black',
                  padding: '1rem 1rem 0rem 0rem',
                }}>
                  The Bright Future of Web 3.0?
                </Typography>
              
            </Grid>
            <Grid size={{xs:12, md:6}} >
            <Typography variant="body1" sx={{
                color: "hsl(236, 13%, 42%)",
                marginTop: '1rem',
                marginRight: '2rem',
              }}>
                  We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                  But is it really fulfilling its promise?
                </Typography>
                <Button variant="contained" sx={{
                  backgroundColor: 'hsl(5, 85%, 63%)', marginTop: '2rem', color:"hsl(240, 100%, 5%)", fontWeight: 800, padding: '1rem 2rem', width: '12rem',letterSpacing:'0.2rem', height:'3rem'}}>
                  Read More
                </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{xs:12, md:6,lg:4}}>
          <Box sx={{
            padding:'20px',
            backgroundColor:'hsl(240, 100%, 5%)',
            color:'white',
            }}>
            <Typography variant='h4' sx={{fontWeight:'bold',marginBottom:'2rem',color:'hsl(35, 77%, 62%)'}}>
              New
            </Typography>
            {news.map((item, index) => (
              <Box key={index} sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                
              }}>
                <Typography variant='h6' sx={{fontWeight:'bold', marginBottom:'0.5rem',}}>
                  {item.title}
                </Typography>
                <Typography variant='body1' sx={{marginBottom:'1.5rem', color:'hsl(233, 8%, 79%)'}}>
                  {item.description}
                </Typography>

                {index !== news.length - 1 && (<Divider sx={{ margin: '20px 0px', borderColor: 'hsl(236, 13%, 42%)' }} />)}
                
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid size={12}>
          <Grid container spacing={3}>
            {[
              { id: 'retro-pcs', title: 'Reviving Retro PCs', desc: 'What happens when old PCs are given modern upgrades.' },
              { id: 'top-laptops', title: 'Top Laptops of 2022', desc: 'Our top picks for the best laptops of the year.' },
              { id: 'gaming-growth', title: 'The Growth of Gaming', desc: 'How the pandemic has sparked fresh opportunities for gaming.' }
            ].map((item, index) => (
              <Grid size={{ xs: 12, sm: 6 }} key={index}>
                <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Image
                    src={`/assets/images/image-${item.id}.jpg`}
                    height={200}
                    width={150}
                    alt={`${item.id} image`}
                    style={{ width: 'auto', height: '100%' }}
                  />
                  <Box>
                    <Typography sx={{ color: 'hsl(5, 85%, 63%)', fontSize: '2.5rem', fontWeight: 700 }}>{`0${index + 1}`}</Typography>
                    <Typography sx={{ fontWeight: 800 }}>{item.title}</Typography>
                    <Typography sx={{ color: 'hsl(236, 13%, 42%)', marginTop: '1rem' }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

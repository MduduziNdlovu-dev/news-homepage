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
          <Box sx={{
            display: 'flex',
            
          }}>
            {/* first */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',  // Aligns items to the start (top)
              gap: '2rem',
            }}>
              <Box>
                <Image src="/assets/images/image-retro-pcs.jpg" height={200} width={150} alt='retro image'/>
              </Box>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // Align text items to the start (top)
                justifyContent: 'center',
                
              }}>
                <Typography sx={{color:'hsl(5, 85%, 63%)',fontSize:'2.5rem', fontWeight:700}}>01</Typography>
                <Typography sx={{fontWeight:800}}>Reviving Retro PCs</Typography>
                <Typography sx={{color:'hsl(236, 13%, 42%)', marginTop:'1rem',paddingRight:'2rem'}}>What happens when old PCs are given modern upgrades</Typography>
              </Box>
            </Box>
            {/* second */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',  // Aligns items to the start (top)
              gap: '2rem',
            }}>
              <Box>
                <Image src="/assets/images/image-top-laptops.jpg" height={200} width={150} alt='retro image'/>
              </Box>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // Align text items to the start (top)
                justifyContent: 'center',
              }}>
                <Typography sx={{color:'hsl(5, 85%, 63%)',fontSize:'2.5rem', fontWeight:700}}>01</Typography>
                <Typography sx={{fontWeight:800}}>Reviving Retro PCs</Typography>
                <Typography sx={{color:'hsl(236, 13%, 42%)', marginTop:'1rem',paddingRight:'2rem'}}>What happens when old PCs are given modern upgrades</Typography>
              </Box>
            </Box>
            {/* third  */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',  // Aligns items to the start (top)
              gap: '2rem',
            }}>
              <Box>
                <Image src="/assets/images/image-gaming-growth.jpg" height={200} width={150} alt='retro image'/>
              </Box>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // Align text items to the start (top)
                justifyContent: 'center',
              }}>
                <Typography sx={{color:'hsl(5, 85%, 63%)',fontSize:'2.5rem', fontWeight:700}}>01</Typography>
                <Typography sx={{fontWeight:800}}>Reviving Retro PCs</Typography>
                <Typography sx={{color:'hsl(236, 13%, 42%)', marginTop:'1rem',paddingRight:'2rem'}}>What happens when old PCs are given modern upgrades</Typography>
              </Box>
            </Box>

          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

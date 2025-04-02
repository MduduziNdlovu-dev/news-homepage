import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

const News = () => {
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
    <Box sx={{
      padding:'20px',
      backgroundColor:'hsl(240, 100%, 5%)',
      color:'white',
      height:'45vh',
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
  )
}

export default News
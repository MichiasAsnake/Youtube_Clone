import React from 'react'
import {Box,CardContent,CardMedia,Typography} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import {Link} from 'react-router-dom'
import { demoProfilePicture } from '../utils/contants'

function ChannelCard({channelDetail, marginTop,marginLeft}){
return(<Box
sx={{
  boxShadow: 'none',
  borderRadius: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width:100%{xs:'356px',md:'320px'},
  height: '326px',
  marign:'auto',
  marginTop,
  
}}>

  <Link to={`/channel/${channelDetail?.id?.channelId}`}>
    <CardContent sx={{display:'flex', flexDirection: 'column', justifyContent: 'center', textAlign:
    'center', color: 'rgb(241,241,241)'}}>
    <CardMedia
    image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
    alt={channelDetail?.snippet?.title}
    sx={{borderRadius: '50%',height: '180px', width:'180px',mb: 2}}
    />
    <Typography variant="h6">
      {channelDetail?.snippet?.title}
      <CheckCircle sx={{fontSize:20,color:'rgb(170,170,170)',ml:'5px'}}/>
    </Typography>
    {channelDetail?.statistics?.subscriberCount && (
      <Typography>
        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
      </Typography>
    )}
    </CardContent>
  </Link>
</Box>)
}

export default ChannelCard
import React from 'react'
import {Link} from 'react-router-dom'
import { Typography,Card,CardContent,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle } from '../utils/contants'

function VideoCards({video: {id: {videoId}, snippet} }) 
{

  return (
    <Card sx={{width:{xs:'100%',sm:'358px', md:'320px' },
    boxShadow:'none',borderRadius:0,border:0}}>
        
        <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
        <CardMedia 
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{width:{
                xs: '100%', sm: '358px', md:'320px'
            }, height:180}}
            />
        </Link>
        <CardContent sx={{backgroundColor:'rgb(15,15,15)', height:'106px'}}>

        <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight='500' line-height='1px' color="rgb(241,241,241)">
                {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
            </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`:demoChannelUrl}>
            <Typography variant="subtitle1" color="rgb(167,167,167)">
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircle sx={{fontSize:13,color:'rgb(170,170,170)',ml:'5px',mt:'5px'}}/>
            </Typography>
        </Link>
        </CardContent>
        
    </Card>
  )
}

export default VideoCards
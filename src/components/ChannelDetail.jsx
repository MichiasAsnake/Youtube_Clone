import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {Videos,ChannelCard} from './index'
import { fetch } from '../utils/fetch'

function ChannelDetail(){
const [channelDetail, setchannelDetail] = useState(null)
const [videos, setVideos] = useState([])
const {id} = useParams()

  useEffect(()=>{
    fetch(`channels?part="snippet&id=${id}`)
    .then((data)=> setchannelDetail(data?.items[0]))

    fetch(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=> setVideos(data?.items))
  }, [id])
  return(
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(255,107,137,1) 100%)',
          zIndex:10,
          height:'300px',
          
        }}
        />
        <ChannelCard  channelDetail = {channelDetail}
        marginTop="-110px"
        justifyContent="center"
        
        />
        <Box display="flex" p={2}>
          <Box sx={{ mr: {sm: '100px'}}}/>
          <Videos videos = {videos}/>
        </Box>
      </Box>
    </Box>
  )  
}

export default ChannelDetail
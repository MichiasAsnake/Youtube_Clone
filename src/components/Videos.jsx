import React from 'react'
import{Stack,Box} from '@mui/material'
import VideoCards from './VideoCards'
import ChannelCard from './ChannelCard'


function Videos({videos,direction}){

  if(!videos?.length) return 'Loading...'
  
  return (
   <Stack direction={direction || "row"} flexWrap="wrap"
   justifyContent="start" gap={2}>

{videos.map((item,idx)=>(
        <Box key={idx}>
        {item.id.videoId && <VideoCards video={item}/>}
        {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
    ))}
   </Stack>
  )
}

export default Videos
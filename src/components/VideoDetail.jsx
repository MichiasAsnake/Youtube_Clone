import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography,Box,Stack } from '@mui/material'
import {CheckCircle} from '@mui/icons-material'
import Videos from './Videos'
import { fetch } from '../utils/fetch'

function VideoDetail(){
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    fetch(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetch(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  if(!videoDetail?.snippet) return 'Loading...'

  const {snippet: {title,channelId,channelTitle}, statistics:{viewCount,likeCount}} = videoDetail
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{ width:'100%',marginLeft:'.4%', position: 'sticky', top: '86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player" controls/>
            <Typography color="rgb(241,241,241)" variant="h5" fontWeight="500" marginLeft={-1.7} marginTop={1} p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between"
              sx={{color: 'rgb(241,241,241)'}} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
              <Typography variant={{sm: 'subtitle1', md: 'h5'}}
              color="rgb(241,241,241)" fontSize={18}>

                {channelTitle}
                <CheckCircle sx={{fontSize: '13px', color:'rgb(170,170,170)', ml:'5px',}}/>
              </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{opacity: 0.7}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{opacity: 0.7}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box><Box px={2} py={{md:1,xs:5}} justifyContent="center" alignItems="center">
          <Videos videos={videos} direction="column"/>
      </Box>
      </Stack>
      
      
    </Box>
  )
}

export default VideoDetail
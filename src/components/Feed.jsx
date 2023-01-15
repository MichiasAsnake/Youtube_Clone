import React from 'react'
import { useState, useEffect } from 'react'
import {Box,Stack,Typography} from '@mui/material'
import {Videos,SideBar} from './index'
import { fetch } from '../utils/fetch'

function Feed(){

 const [selectedCategory,setselectedCategory] = useState('New')
 const[videos,setvideos] = useState([])

    useEffect(()=>{
       fetch(`search?part=snippet,id&q=${selectedCategory}`)
      .then((data)=> setvideos(data.items))
    },[selectedCategory])
  

  return (
    <Stack
    sx={{ flexDirection: {sx: "column", md:"row"}}}
    >
      <Box
      sx={{ height: {sx: 'auto', md: '92vh'},
      borderRight: '1px solid rgb(39,39,39)',
      px: {sx:0, md:2}}}
      > 
        <SideBar 
        selectedCategory ={selectedCategory}
        setselectedCategory={setselectedCategory}
        />
        <Typography className='footerSign'
        variant="body2" sx={{mt:1.5, color: '#fff'}}
        >
          
        </Typography>
      </Box>

      <Box p={2} sx={{overflowY: 'auto',
      height: '90vh', flex: 2}}>
        <Typography variant='h4'
           mb={2} sx={{color: 'rgb(241,241,241)'}}>
          {selectedCategory}
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed
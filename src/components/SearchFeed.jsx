import React from 'react'
import { useState, useEffect } from 'react'
import {Box,Typography} from '@mui/material'
import {Videos} from './index'
import { fetch } from '../utils/fetch'
import { useParams } from 'react-router-dom'

function SearchFeed(){
 
 const[videos,setvideos] = useState([])
 const { searchTerm} = useParams()

    useEffect(()=>{
       fetch(`search?part=snippet,id&q=${searchTerm}`)
      .then((data)=> setvideos(data.items))
    },[searchTerm])


  return (
    <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
      <Typography variant='h4' mb={3} sx={{color: 'rgb(241,241,241)'}}>
        Search Results for: <span>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos}/>
    </Box> 
  )
}

export default SearchFeed
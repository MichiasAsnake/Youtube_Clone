import React from 'react'
import {useState} from 'react'
import { useNavigate} from 'react-router-dom'
import {Paper, IconButton } from '@mui/material'
import {Search} from '@mui/icons-material'


function SearchBar(){

  const [searchTerm, setsearchTerm] = useState('')

  const navigate= useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(searchTerm) {
      navigate(`/search/${searchTerm}`)

      setsearchTerm('')
    }
  }
  return (
    <div className='searchBar'>
    <Paper
    component={'form'}
    onSubmit={handleSubmit}
    sx={{
        borderRadius: 20,
        border: '1px solid rgb(48,48,48)',
        pl: 2,
        boxShadow: 'none',
        mr: {sm:5},
        backgroundColor: 'rgb(18,18,18)',
        fontSize: '17px',    
    }}
    >
    <input
    className='search-bar'
    placeholder='Search...'
    value={searchTerm}
    onChange={(e)=> setsearchTerm(e.target.value)}
    style={{backgroundColor:'rgb(18,18,18)', color:'rgb(223,223,223)', fontSize:'17px',paddingTop:'10px'}}
    />
    <IconButton type="submit" 
    sx={{ p:'10px',color:'rgb(215,215,215)', height:'20px',marginTop:'-6px'}}>  
    <Search sx={{width:"28px"}} />    
    </IconButton>
    </Paper>
    </div>
  )
}

export default SearchBar
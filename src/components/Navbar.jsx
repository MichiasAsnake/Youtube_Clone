import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/contants'
import SearchBar from './SearchBar'

function Navbar(){
   return( 
   
   <Stack 
   direction="row" 
   alignItems="left" 
   p={2} 
   sx={{ background: '000', top: 0, justifyContent: 'space-between'}}>
  <div className='logoImage'>
  <Link to = "/">
    <img src={logo} alt="logopic" height={20}/>
  </Link>
      </div> 
  <SearchBar  />
  </Stack>
   )
  }

export default Navbar
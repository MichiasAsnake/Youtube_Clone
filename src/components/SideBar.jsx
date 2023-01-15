import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/contants'
import { height } from '@mui/system'



function SideBar({selectedCategory,setselectedCategory}){
  return (
    <Stack
    direction="row"
    sx={{
        overflow: "auto",
        height: {sx:'auto', md:'95%'},
        flexDirection: {md: 'column'},
    }}
    >
        {categories.map((category)=>(
            <button
                
                className='category-btn'
                onClick={()=> setselectedCategory(category.name)}
                style={{
                    background:category.name ===
                    selectedCategory && 'rgb(80,80,80,.8)',
                    color: 'rgb(241, 241, 241)'
                }}
                key={category.name}
            >
                <span style={{ marginRight: '18px' }}>{category.icon}</span>
                
                <span>{category.name}</span>
            </button>


        ))}
    </Stack>
  )
}

export default SideBar
import React from 'react'
import {Typography,Box, Stack,IconButton} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {useNavigate} from 'react-router-dom'

function Cart() {

    let navigate= useNavigate()

  return (
    <Box sx={{backgroundColor:'#FEF0DC',minHeight:'calc(100vh - 180px)'}}> 
  
  <Stack direction="row" marginBottom={10}> 
    <Box marginTop={10}  display="flex" direction="row" justifyContent="flex-start">
    <IconButton> <ShoppingCartIcon sx={{'&:hover':{borderBottom:'10px solid #3D2318'},borderRadius:'5px',backgroundColor:'#FEF0DC',fontSize:100, color:'#997A63'}} onClick={()=>{navigate('/cart')}}/></IconButton>
    <IconButton><FastfoodIcon sx={{ '&:hover':{borderBottom:'10px solid #3D2318'}, borderRadius:'5px',fontSize:100, color:'#997A63', backgroundColor:'#FEF0DC'}} onClick={()=>{navigate('/shoppingcart')}}/></IconButton>
    </Box> 
    <Typography marginTop={10}variant="h1" align="center" p={1} sx={{fontStyle: 'italic', fontWeight:500, color:'#956847'}}>Your Cart</Typography>
   

    </Stack>
    </Box>
  )
}

export default Cart
import React from 'react'
import {Button, Grid, Typography, Box, Stack, IconButton, Container } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../Helper/CartContext'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
 



function Cart() {


  const navigate = useNavigate()

  const { items } = useContext(CartContext)
  const {removeFromCart} = useContext(CartContext)


  /* Code to calculate cart Total */
  var priceArray = []

  for (let counter in items) {
    priceArray.push(items[counter].price)
  }

  const total = priceArray.reduce(function (passedIn, item) {
 
    return passedIn + item
  }, 0)


  return (
    /*Background size is full screen vh minus the banner and nav */
    <Box sx={{ backgroundColor: '#FEF0DC', minHeight: 'calc(100vh - 180px)' }}>

   {/*Shopping Cart and Food Icons (hoverable)  */}
      <Stack direction="row" marginBottom={10}>
        <Box marginTop={10} display="flex" direction="row" justifyContent="flex-start">
          <IconButton> <ShoppingCartIcon sx={{ '&:hover': { borderBottom: '10px solid #3D2318' }, borderRadius: '5px', backgroundColor: '#FEF0DC', fontSize: 100, color: '#997A63' }} onClick={() => { navigate('/cart') }} /></IconButton>
          <IconButton><FastfoodIcon sx={{ '&:hover': { borderBottom: '10px solid #3D2318' }, borderRadius: '5px', fontSize: 100, color: '#997A63', backgroundColor: '#FEF0DC' }} onClick={() => { navigate('/shoppingcart') }} /></IconButton>
        </Box>
        <Typography marginTop={10} variant="h1" align="center" p={1} sx={{ fontStyle: 'italic', fontWeight: 500, color: '#956847' }}>Your Cart</Typography>
      </Stack>
    
    {/*Iterate over items in the items Cart Context */}
      <Stack direction="column">
      
        {items.map((item) => {
     
          return <Container key={item.id}>
  
            <Stack direction="row" spacing={3} justifyContent="space-between">
              <Typography variant="h6" p={1}>{item.title}</Typography>
              <Typography variant="h6" p={1}> ${item.price} </Typography>
              <IconButton onClick={()=>{removeFromCart(item)}} sx={{ padding: 0, '&:hover':  { color: 'red' } }}><RemoveCircleOutlineIcon sx={{ padding: 0, fontSize: 50 }}> </RemoveCircleOutlineIcon></IconButton>
            </Stack>

          </Container>
        })}

{/*Total of All Cart items */}
        <Container sx={{paddingLeft:0, paddingRight: 0,width:'50%'}}>
          <Typography align="center" variant="h6" sx={{ padding: 3, marginBottom: 1, border: '4px', backgroundColor: 'white'}}> Total Cost: ${total} </Typography>
          <Button variant="outlined" size="large" sx={{margin:'auto',width: '100%'}}onClick={()=>{navigate('/Cart')}}> See Cart</Button>
        </Container>
     
      </Stack>

    </Box>


  )
}

export default Cart
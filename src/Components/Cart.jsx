import React from 'react'
import {Grid,Typography,Box, Stack,IconButton, Container} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {useNavigate} from 'react-router-dom'
import {useContext} from 'react'
import CartContext from '../Helper/CartContext'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';



function Cart() {

 
    const navigate= useNavigate()

    const {items} = useContext(CartContext)

    var priceArray = []
    
    for(let counter in items){
      console.log(items[counter].price)
      priceArray.push( items[counter].price)
    }


    
    const total = priceArray.reduce(function(passedIn, item){
      console.log(passedIn)
      console.log(item.price)
      return passedIn + item
    }, 0)
     
    console.log(total)
    
 
   

  return (
    <Box sx={{backgroundColor:'#FEF0DC',minHeight:'calc(100vh - 180px)'}}> 
  
  <Stack direction="row" marginBottom={10}> 
    <Box marginTop={10}  display="flex" direction="row" justifyContent="flex-start">
    <IconButton> <ShoppingCartIcon sx={{'&:hover':{borderBottom:'10px solid #3D2318'},borderRadius:'5px',backgroundColor:'#FEF0DC',fontSize:100, color:'#997A63'}} onClick={()=>{navigate('/cart')}}/></IconButton>
    <IconButton><FastfoodIcon sx={{ '&:hover':{borderBottom:'10px solid #3D2318'}, borderRadius:'5px',fontSize:100, color:'#997A63', backgroundColor:'#FEF0DC'}} onClick={()=>{navigate('/shoppingcart')}}/></IconButton>
    </Box> 
    <Typography marginTop={10}variant="h1" align="center" p={1} sx={{fontStyle: 'italic', fontWeight:500, color:'#956847'}}>Your Cart</Typography>
   

    </Stack>
 {/* sx={{ padding: 3,marginTop: 3, marginBottom:1, border: '4px solid gray', backgroundColor: 'white', width:'25%'}}*/}
    <Stack direction="column"> 

<Grid> </Grid>
{items.map((item)=>{ 
  return <Container key={item.title}>
  
<Stack direction="row" spacing={3}justifyContent="space-evenly"> 
  <Typography variant="h6" p={1}>{item.name}</Typography>
  <Typography variant="h6" p={1}> {item.price} </Typography>
  <IconButton sx={{padding:0, '&:hover':{color:'red'}}}><RemoveCircleOutlineIcon sx={{padding:0,fontSize:50}}> </RemoveCircleOutlineIcon></IconButton>
  </Stack>
    
    </Container>
})}
<Container>
 <Typography variant="h6" sx={{ padding: 3,marginTop: 3, marginBottom:1, border: '4px solid gray', backgroundColor: 'white', width:'25%'}}> {total} </Typography> 
</Container>
</Stack>

    </Box>

  
  )
}

export default Cart
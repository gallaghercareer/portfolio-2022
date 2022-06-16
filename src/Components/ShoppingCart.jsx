import { Stack,Typography,Box,IconButton} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {React} from 'react'
import {useNavigate} from 'react-router-dom' 
import FastfoodIcon from '@mui/icons-material/Fastfood';
import image from '../media/foodImage.jpg'
import Carousel from 'react-material-ui-carousel'
import FoodItems from './foodItems'
import foodImage1 from '../media/sun.jpg'

function ShoppingCart() {
    let navigate = useNavigate()
    
    const cartItems=[
    {id:1,title:'Tomatoes',description:'Sun-Dried tomatoes from Italy',price:'1.00', image:foodImage1},
    {id:2,title:'Oranges',description:'Sun-Dried tomatoes from Italy',price:'1.00',image:foodImage1},
    {id:3,title:'Bananas',description:'Sun-Dried tomatoes from Italy',price:'1.00',image:foodImage1},
    {id:4,title:'Tomatoes',description:'Sun-Dried tomatoes from Italy',price:'1.00',image:foodImage1},
    {id:5,title:'Tomatoes',description:'Sun-Dried tomatoes from Italy',price:'1.00',image:foodImage1}
    ]

  
  return (
    <Box sx={{minHeight:'calc(100vh - 180px)', backgroundImage: `url(${image})`,backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",}}> 
   
   

    <Stack direction="row" marginBottom={10}> 
    <Box marginTop={10}  display="flex" direction="row" justifyContent="flex-start">
    <IconButton> <ShoppingCartIcon sx={{'&:hover':{borderBottom:'10px solid #3D2318'},borderRadius:'5px',backgroundColor:'#FEF0DC',fontSize:100, color:'#997A63'}} onClick={()=>{navigate('/cart')}}/></IconButton>
    <IconButton><FastfoodIcon sx={{ '&:hover':{borderBottom:'10px solid #3D2318'}, fontSize:100, color:'#997A63', backgroundColor:'#FEF0DC'}} onClick={()=>{navigate('/shoppingcart')}}/></IconButton>
    </Box> 
    <Typography marginTop={10}variant="h1" align="center" p={1} sx={{fontStyle: 'italic', fontWeight:500, color:'#FEF0DC'}}>Add Food To Cart</Typography>
   

    </Stack>
   
   



<Carousel  navButtonsAlwaysVisible={true} navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
            backgroundColor: 'cornflowerblue',
            borderRadius: 0,
            
        }
    }} sx={{marginTop:35, margin:'auto',width:'35%'}}>


{cartItems.map((item)=>{return <FoodItems key={item.id} title={item.title} price={item.price} description={item.description} image={item.image}/>})}
</Carousel>

</Box>
   
    
  )
}

export default ShoppingCart
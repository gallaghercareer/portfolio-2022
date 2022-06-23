import { Stack, Typography, Box, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { React } from 'react'
import { useNavigate } from 'react-router-dom'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import image from '../media/foodImage.jpg'
import Carousel from 'react-material-ui-carousel'
import FoodItems from './foodItems'
import foodImage1 from '../media/sun.jpg'
import mango from '../media/mango(400x400).jpg'
import { v4 as uuidv4 } from 'uuid';


function ShoppingCart() {


  let navigate = useNavigate()


  const cartItems = [
    {id:0,title: 'Tomatoes', description: 'Sun-Dried tomatoes from Italy', price: 1, quantity: 0, image: foodImage1 },
    {id:1,title: 'Oranges', description: 'As well as vitamin C, oranges contain fiber, potassium and choline, all of which are good for your heart.', price: 1.50, quantity: 0, image: mango },
    {id:2,title: 'Bananas', description: 'Bananas are one of the most popular fruits worldwide. They contain essential nutrients that can have a protective impact on health', price: 1.00, quantity: 0, image: mango },
    {id:3,title: 'Mangos', description: 'Mango is rich in vitamins, minerals, and antioxidants, and it has been associated with many health benefits, including potential anticancer effects', price: 2.50, quantity: 0, image: mango },
    {id:4,title: 'Grapes', description: 'Cultivated for thousands of years, grapes are packed with nutrients, antioxidants, and powerful plant compounds.', price: 3.00, quantity: 0, image: mango }
  ]


  return (
    <Box sx={{
      minHeight: 'calc(100vh - 180px)', backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
    }}>



      <Stack direction="row" marginBottom={10}>
        <Box marginTop={10} display="flex" direction="row" justifyContent="flex-start">
          <IconButton> <ShoppingCartIcon sx={{ '&:hover': { borderBottom: '10px solid #3D2318' }, borderRadius: '5px', backgroundColor: '#FEF0DC', fontSize: 100, color: '#997A63' }} onClick={() => { navigate('/cart') }} /></IconButton>
          <IconButton><FastfoodIcon sx={{ '&:hover': { borderBottom: '10px solid #3D2318' }, fontSize: 100, color: '#997A63', backgroundColor: '#FEF0DC' }} onClick={() => { navigate('/shoppingcart') }} /></IconButton>
        </Box>

        <Typography marginTop={10} variant="h1" align="center" p={1} sx={{ fontStyle: 'italic', fontWeight: 500, color: '#FEF0DC' }}>Add Food To Cart</Typography>


      </Stack>





      <Carousel autoPlay={false} navButtonsAlwaysVisible={true} navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: 'cornflowerblue',
          borderRadius: 0,

        }
      }} sx={{ marginTop: 35, margin: 'auto', width: '35%' }}>


        {cartItems.map((item) => { return <FoodItems key={item.id} title={item.title} price={item.price} description={item.description} image={item.image} quantity={item.quantity} /> })}
      </Carousel>

    </Box>


  )
}

export default ShoppingCart
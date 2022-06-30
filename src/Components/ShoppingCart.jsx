import { Stack, Typography, Box, IconButton,Grid ,Container} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { React } from 'react'
import { useNavigate } from 'react-router-dom'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import image from '../media/foodImage.jpg'
import Carousel from 'react-material-ui-carousel'
import FoodItems from './foodItems'
import foodImage1 from '../media/sun.jpg'
import mango from '../media/mango(400x400).jpg'


function ShoppingCart() {

  let navigate = useNavigate()


  const cartItems = [
    {id:0,title: 'Tomatoes', description: 'Sun-Dried tomatoes from Italy', price: 1, quantity: 0, image: foodImage1 },
    {id:1,title: 'Oranges', description: 'Juicy Oranges from Florida', price: 1.50, quantity: 0, image: mango },
    {id:2,title: 'Bananas', description: 'Ripe bananas from Africa', price: 1.00, quantity: 0, image: mango },
    {id:3,title: 'Mangos', description: 'Delicious Mango from Brazil', price: 2.50, quantity: 0, image: mango },
    {id:4,title: 'Grapes', description: 'Cultivated grapes from Rome', price: 3.00, quantity: 0, image: mango }
  ]


  return (
    <Box id="shopheader" sx={{
      minHeight: 'calc(100vh - 180px)', backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
    }}>



      <Stack direction="row" marginBottom={10}>
        <Box marginTop={10} display="flex" direction="row" justifyContent="flex-start">
          <IconButton> <ShoppingCartIcon sx={{ '&:hover': { borderBottom: '10px solid #3D2318' }, borderRadius: '5px', backgroundColor: '#FEF0DC', fontSize: 100, color: '#997A63' }} onClick={() => { navigate('/cart') }} /></IconButton>
          <IconButton><FastfoodIcon sx={{ '&:hover': { borderBottom: '10px solid #3D2318' }, fontSize: 100, color: '#997A63', backgroundColor: '#FEF0DC' }} onClick={() => { navigate('/shoppingcart') }} /></IconButton>
        </Box>

        <Typography  marginTop={10} variant="h1" align="center" p={1} sx={{ fontStyle: 'italic', fontWeight: 500, color: '#FEF0DC' }}>Add Food To Cart</Typography>


      </Stack>





      <Container sx={{ py: 8}} maxWidth="lg">
      <Grid container sx={{py: 8}} spacing={4}>          
             

        {cartItems.map((item) => { return <FoodItems key={item.id} title={item.title} price={item.price} description={item.description} image={item.image} quantity={item.quantity} /> })}
     
    </Grid>
    </Container>
    </Box>


  )
}

export default ShoppingCart
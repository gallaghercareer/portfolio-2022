import React from 'react'
import {Container,Card, CardMedia,CardContent,Button,Typography,CardActions} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import {useContext} from 'react'
import CartContext from '../Helper/CartContext'

function FoodItems(props) {
  let navigate = useNavigate()
     
    const {addToCart} = useContext(CartContext)
    const {items} = useContext(CartContext)
    console.log("My cart" + items)
 
    return (
    <Card >
    <CardMedia
    component="img"
    
    height="300"
    image={props.image}
    alt="food image"
  />

<CardContent sx={{ }}>
    <Typography gutterBottom variant="h5" component="h2">
      {props.title}
    </Typography>
    <Typography>
      {props.description}
    </Typography>
    <Typography>
      {props.price}
    </Typography>
  </CardContent>     
  <CardActions>
      <Container> 
    <Button alignment="center" variant="contained" size="large" onClick={()=>{navigate('/')}}>Add Food</Button>
    </Container>
  </CardActions>

</Card>
  )
}

export default FoodItems
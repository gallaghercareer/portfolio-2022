import {React} from 'react'
import {Container,Card, CardMedia,CardContent,Typography,CardActions} from '@mui/material'
import {useContext} from 'react'
import CartContext from '../Helper/CartContext'
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'



function FoodItems(props) {


  let navigate = useNavigate()

  const {addToCart} = useContext(CartContext)

 
    return (
    <Card >
    <CardMedia
    component="img"
    
    height="300"
    image={props.image}
    alt="food image"
  />

<CardContent>
    <Typography gutterBottom  variant="h2">
      {props.title}
    </Typography>
    <Typography variant="h5">
      {props.description}
    </Typography>
    <Typography marginTop={3} variant="h6">
      {props.price}
    </Typography>
  </CardContent>     
  <CardActions>
      <Container> 
    <Button alignment="center" variant="contained" size="large" onClick={()=>{addToCart(props.title, props.price, props.quantity)}}>Add Food</Button>
<Button variant="outlined" size="large" onClick={()=>{navigate('/Cart')}}> See Cart</Button>
    </Container>
  </CardActions>

</Card>
  )
}

export default FoodItems
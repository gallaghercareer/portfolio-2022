import {React, useState} from 'react'
import {Box,IconButton,  Snackbar,Grid,Container,Card, CardMedia,CardContent,Typography,CardActions} from '@mui/material'
import {useContext} from 'react'
import CartContext from '../Helper/CartContext'
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';



function FoodItems(props) {


  let navigate = useNavigate()

  const {addToCart} = useContext(CartContext)

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <> 

      <IconButton
        size="small"
        aria-label="close"
        color="primary"
        onClick={handleClose}
        
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>  
  );
 
    return (
<Grid item xs={12} sm={6} md={4}>
    <Card   >
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
     ${props.price}
    </Typography>
  </CardContent>     
  <CardActions sx={{justifyContent: 'space-between'}}>
  
    <Button alignment="center" variant="contained" size="large"onClick={()=>{
      addToCart(uuidv4(),props.title, props.price)
      handleClick()
      }}>Add Food</Button>
<Button variant="outlined" size="large" onClick={()=>{navigate('/Cart')}}> See Cart</Button>
<Snackbar
       
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Food Item Added!"
        action={action}
      />
   
  </CardActions>

</Card>
</Grid>
  )
}

export default FoodItems
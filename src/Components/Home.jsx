import * as React from 'react';
import {useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material';
import video2 from '../media/video2.mp4'
import cardImage_Sun from '../media/sun.jpg'
import cardImage_Bullseye from '../media/bullseye.jpg'
import cardImage_Shoppingcart from '../media/shoppingcart.jpg'
import {CardActionArea} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
const theme = createTheme();



export default function Home() {

  let navigate = useNavigate()
  const [autoPlay, setAutoPlay] = useState(false)
  
  
  useEffect(()=>{

   if(window.innerWidth >= 1200){
    setAutoPlay(true)
  }
  }, []);

  return ( 
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box id="home"></Box>
      {/*Video banner*/}
      <Box position='relative'  sx={{display: {xs:'none',  lg:'block'}}}>
       
        {autoPlay ?
          <Card>
          <CardMedia component='video' autoPlay src={video2}  muted loop sx={{ display: 'in-line', zIndex: -1}}>
          </CardMedia>
          </Card> : 
          
          <Card>
          <CardMedia component='video' src={video2}  muted loop sx={{ display: 'in-line', zIndex: -1}}>
          </CardMedia>
          </Card>  } 
    

        <Box sx={{
          position: 'absolute',
          color: 'white',
          top: 100,
          left: '50%',
          transform: 'translateX(-50%)'
        
        }}>
          <Typography sx={{ typography: { sm: 'h6', md: 'h2', lg: 'h1' }, h1: { "fontWeight": 400 }, h2: { "fontWeight": 400 }, h3: { "fontWeight": 400 } }}>I build wonderful exeriences for the <Typography component="div" sx={{ typography: { xs: 'h5', md: 'h3', lg: 'h1' }, fontWeight: 450, color: '#237FFF' }}>web</Typography></Typography>

        </Box>

        <Box sx={{
          position: 'absolute',
          color: 'white',
          top: 600,
          left: '75%',
          transform: 'translateX(-50%)'

        }}>

          <Button sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }} href="#portfolio" variant="contained" >
            <Typography variant='h4' align="center" sx={{ width: 300, padding: 3, fontWeight: 450 }}>Portfolio</Typography>
          </Button>
        </Box>

      </Box>

      {/* Welcome to My Portfolio */}

      <Box id="about"
        sx={{

          bgcolor: '#F0F2F5',
          pt: 8,
          pb: 6,
        }}
      >

        <Container maxWidth="md">
          <Typography

            variant="h2"
            align="center"
            color="text.primary"
            fontWeight="350"
            gutterBottom
          >
            Welcome to My Portfolio!
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            I am a software developer with 6 years professional experience. I am searching for a job requiring proficiency as a full stack developer.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
          </Stack>
        </Container>
      </Box>

      {/*BEGIN CARDS GRID*/}
      <Container sx={{ py: 8 }} maxWidth="lg" id="portfolio">
        <Typography align="center" variant='h3'>Software Applications</Typography>
        <Grid container sx={{ py: 8 }} spacing={4}>
          <Grid item xs={12} sm={12} md={12} lg={4}>

            {/*CARD 1*/}
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardActionArea component={Link} to="/shoppingcart">
              <CardMedia
                component="img"
                sx={{
                  pt: 10
                }}
                height="300"
                image={cardImage_Shoppingcart}
                alt="random"
                
              />
               </CardActionArea>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Shopping Cart 
                </Typography>
                <Typography>
                  Context API---Props--Lists---Advanced Functions--Conditional Rendering
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => { navigate('/shoppingcart/#shopheader') }}>View</Button>
                <Button size="small"onClick={() => { window.open('https://github.com/gallaghercareer/portfolio-2022/blob/main/src/Components/ShoppingCart.jsx') }}>GitHub</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>

            {/* CARD 2 */}
             <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                                <CardActionArea component={Link} to="/login">

                  <CardMedia
                    component="img"
                    sx={{
                     pt:10
                    }}
                    height="300"
                    image={cardImage_Bullseye}
                    alt="random"
                  />
                   </CardActionArea>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                     C#/.NET Ticketing Application
                    </Typography>
                    <Typography>
                      Full Stack Project--Azure Deployed, ASP.NET MVC Application
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button size="small" onClick={() => { window.open('https://github.com/gallaghercareer/heroku-node-app-1') }}>View</Button>
                  <Button size="small" onClick={() => { window.open('https://github.com/gallaghercareer/heroku-node-app-1') }}>GitHub</Button>
                  </CardActions> 
                </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            
                        {/* CARD 3 */}
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
               <CardActionArea component={Link} to="/weather">  
              <CardMedia
                component="img"
                sx={{
                  pt: 10
                }}
                height="300"
                image={cardImage_Sun}
                alt="random"
              />
              </CardActionArea>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Weather App
                </Typography>
                <Typography>
                  Axios--Consumes Weather App API--React--MUIv5
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => { navigate('/weather') }}>  View </Button>
                <Button size="small" onClick={() => { window.open('https://github.com/gallaghercareer/portfolio-2022/blob/main/src/Components/Weather.jsx') }}>GitHub</Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
      </Container>



      {/* Footer */}

      {/* End footer */}
    </ThemeProvider>
  );
}
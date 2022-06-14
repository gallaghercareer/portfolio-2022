import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider, styled ,ButtonGroup, IconButton} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import video2 from './media/video2.mp4'
import cardImage_Sun from './media/sun.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { NoEncryption } from '@mui/icons-material';




const theme = createTheme();

const navigateGitHub = () =>{
  window.open('https://github.com/gallaghercareer?tab=repositories')
}

const navigateLinkedIn = () =>{
  window.open('https://www.linkedin.com/in/johngallagher00/')
}

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
     
      <AppBar position="sticky" >
        <Toolbar >
          <IconButton  href="#home" sx={{color:'white', fontSize:40}}> <HomeIcon hsx={{fontSize:40, mr: 2 }} /></IconButton>
          
          <Button href="#portfolio" sx={{color:'white', fontSize: 25}}>
            Portfolio 
          </Button>
          <Box width="100%" sx={{}}>
          <Stack gap={5} flexDirection="row" justifyContent="flex-end" > 
        
        <ButtonGroup> 
            <Button target="_blank"href="https://docs.google.com/document/d/1eh-c7nNmuU6CRv5ZS2dTp5LpFqJEkoIwypHCYVvm_4I/edit?usp=sharing" sx={{color:'white', fontSize: 25}}>Resume</Button>
          
            <Button href="#about" sx={{color:'white', fontSize: 25}}>About</Button>
        </ButtonGroup>
          </Stack>
          </Box>
        </Toolbar>
      </AppBar>

<Box position='relative'> 
<Card id="home"> 
  <CardMedia component='video' src={video2} autoPlay muted loop sx={{display: 'in-line', zIndex:-1}}>
  
  </CardMedia>
  </Card>

<Box sx={{position: 'absolute', 
                          color: 'white',                           
                          top: 100, 
                          left: '50%',
                          transform: 'translateX(-50%)'
                         
}}> 
<Typography sx={{typography:{sm:'h6',md:'h2', lg:'h1'},h1:{"fontWeight":400},h2:{"fontWeight": 400},h3:{"fontWeight": 400} }}>I build wonderful exeriences for the <Typography component="div" sx={{typography:{xs:'h5',md:'h3',lg:'h1'},fontWeight:450,color:'#237FFF'}}>web</Typography></Typography>

</Box>

<Box sx={{position: 'absolute', 
                          color: 'white',                           
                          top: 600, 
                          left: '75%',
                          transform: 'translateX(-50%)'
                         
}}> 

<Button sx={{display:{xs:"none", sm:"none", md:"none", lg:"block"}}} href="#portfolio" variant="contained" > 
<Typography variant='h4' sx={{width: 300,padding:3,fontWeight: 450}}>Portfolio</Typography>
</Button>
</Box>

</Box>
      
{/* About Me Section */}
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
            I am a software developer with 3 years professional experience. I am searching for a job requiring proficiency as a full stack developer in ReactJS and NodeJs.
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

{/*BEGIN CARDS */}
        <Container sx={{ py: 8}} maxWidth="lg" id="portfolio">
          <Typography align="center" variant='h3'>Software Applications</Typography>
          <Grid container sx={{py: 8}} spacing={4}>          
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                     pt:10
                    }}
                    height="300"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">GitHub</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                     pt:10
                    }}
                    height="300"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Ticketing System
                    </Typography>
                    <Typography>
                      User based role permissions--MongoDB--Node express server--React Context API
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">GitHub</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                     pt:10
                    }}
                    height="300"
                    image={cardImage_Sun}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Weather App
                    </Typography>
                    <Typography>
                      Axios--Consumes Weather App API--React--MUIv5
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View </Button>
                    <Button size="small">Github</Button>
                  </CardActions>
                </Card>
              </Grid>
           
          </Grid>
        </Container>



      {/* Footer */}
      <Box sx={{bgcolor: '#2C2C2C'}} display="flex" justifyContent="center" gap={10}>
     <IconButton  onClick={navigateGitHub}component="div" component="div"><GitHubIcon sx={{fontSize:100,color:'white'}}/></IconButton>
     <IconButton onClick={navigateLinkedIn} component="span"><LinkedInIcon sx={{fontSize:100,color:'white'}}/></IconButton>

      </Box >
    
      {/* End footer */}
    </ThemeProvider>
  );
}
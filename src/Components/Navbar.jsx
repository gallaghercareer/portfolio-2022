import React from 'react'
import {AppBar, Toolbar, Button,  Stack, Box, ButtonGroup} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';

import {StyledHashButton} from '../Helper/StyledHashScroll'




function Navbar(props) {
  return (
    <AppBar position="sticky" >
    <Toolbar >
      <StyledHashButton smooth to="/#home"><HomeIcon sx={{fontSize:40, mr: 2 }} /></StyledHashButton>      
      <StyledHashButton smooth to="/#portfolio">PORTFOLIO</StyledHashButton>
         
    
      <Box width="100%" sx={{}}>
      <Stack gap={5} flexDirection="row" justifyContent="flex-end" > 
    
    <ButtonGroup sx={{display:'flex', alignItems:"center"}}> 
        <Button target="_blank"href="https://docs.google.com/document/d/1eh-c7nNmuU6CRv5ZS2dTp5LpFqJEkoIwypHCYVvm_4I/edit?usp=sharing" sx={{color:'white', fontSize: 25}}>Resume</Button>
      
        <StyledHashButton smooth to="/#about">
        ABOUT
        </StyledHashButton> 

       
    
    </ButtonGroup>
   
      </Stack>
      </Box>
    </Toolbar>
  </AppBar>
  )
}

export default Navbar
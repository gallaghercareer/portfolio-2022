import React from 'react'
import {AppBar, Toolbar, Button,  Stack, Box, ButtonGroup} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import {HashLink} from 'react-router-hash-link'
import {styled} from '@mui/system'

const StyledButton = styled(HashLink,{})({
    
    color: 'white',
    '&::visited' : {
        color:'white'
    },  
    paddingTop: 5,
    paddingBottom:5,
    paddingLeft:15,
    paddingRight:15,
    textDecoration: "none",
    fontSize:25    ,
    fontWeight:500    
});




function Navbar(props) {
  return (
    <AppBar position="sticky" >
    <Toolbar >
      <StyledButton smooth to="/#home"><HomeIcon sx={{fontSize:40, mr: 2 }} /></StyledButton>
      
      <StyledButton smooth to="/#portfolio">PORTFOLIO</StyledButton>
         
    
      <Box width="100%" sx={{}}>
      <Stack gap={5} flexDirection="row" justifyContent="flex-end" > 
    
    <ButtonGroup sx={{display:'flex', alignItems:"center"}}> 
        <Button target="_blank"href="https://docs.google.com/document/d/1eh-c7nNmuU6CRv5ZS2dTp5LpFqJEkoIwypHCYVvm_4I/edit?usp=sharing" sx={{color:'white', fontSize: 25}}>Resume</Button>
      
        <StyledButton smooth to="/#about">
        ABOUT
        </StyledButton> 

       
    
    </ButtonGroup>
   
      </Stack>
      </Box>
    </Toolbar>
  </AppBar>
  )
}

export default Navbar
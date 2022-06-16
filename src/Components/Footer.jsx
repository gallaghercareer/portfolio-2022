import React from 'react'
import {Typography,Box, IconButton} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



function Footer() {

    const navigateGitHub = () =>{
        window.open('https://github.com/gallaghercareer?tab=repositories')
      }
      
      const navigateLinkedIn = () =>{
        window.open('https://www.linkedin.com/in/johngallagher00/')
      }


  return (
 
    <> 
  
    <Box sx={{bgcolor: '#2C2C2C'}} display="flex" justifyContent="center" gap={10}>
    <IconButton  onClick={navigateGitHub}component="div" ><GitHubIcon sx={{fontSize:100,color:'white'}}/></IconButton>
    <IconButton onClick={navigateLinkedIn} component="span"><LinkedInIcon sx={{fontSize:100,color:'white'}}/></IconButton>
    <Typography variant="h5" sx={{color:'white',fontSize:'80',fontWeight:'200',alignSelf:'center'}}>gallaghercareer@gmail.com</Typography>
    </Box >

    </>

) 
}

export default Footer
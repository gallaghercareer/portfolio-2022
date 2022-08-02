import axios from 'axios'
import React from 'react'
import {Box,Stack,IconButton} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

function Goals(props) {

 const deleteGoal = () =>{
    
    console.log(props.id)
   
    const token = JSON.parse(localStorage.getItem('token'))
    
    const config = {
      headers: {
          "Content-type": "application/json",
           "Authorization": `Bearer ${token}`,
      },
    }

axios.delete(`https://heroku-app-012.herokuapp.com/api/goals/${props.id}`, config)
.then((response)=>{
   props.deleteGoal(props.id)}
    
   

).catch((error)=>{
 console.log(error)
})}
  return (
  <>
  <Box justifyContent="space-between" display="flex" bgcolor="#F1F3F4" sx={{borderRadius:1,marginTop:1,padding:1}}> 
 {props.goalText}<IconButton onClick={deleteGoal} sx={{margin:0, padding:0}}>
        <CloseIcon sx={{margin:0, padding:0}}></CloseIcon>
    </IconButton>
 </Box>
    </>
  )
}

export default Goals
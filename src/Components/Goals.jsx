import axios from 'axios'
import React from 'react'

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

axios.delete(`http://localhost:8000/api/goals/${props.id}`, config)
.then((response)=>{
   props.deleteGoal(props.id)}
    
    //props.setGoals((goals.filter((goal)=>{goal.id !== goals.id}))

).catch((error)=>{
 console.log(error)
})}
  return (
    <div>
 {props.goalText}
 </div>
  )
}

export default Goals
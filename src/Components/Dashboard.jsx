import axios from 'axios'
import { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Goals from './Goals'
import ClipLoader from "react-spinners/ClipLoader";
import {Grid,FormControl,TextField,Button,Stack} from '@mui/material'
import { LocalConvenienceStoreOutlined } from '@mui/icons-material';
const {v4: uuid} = require('uuid')

const override = {
  display: "block",
  margin: "50px auto",
  
};

function Dashboard() {
  
const [goals, setGoals] = useState([])  
const [formData, setFormData] = useState({
  newGoal : ''
})
let [isLoading, setLoading] = useState(true);


const {newGoal} = formData

const navigate = useNavigate()

useEffect(()=>{   
    const token = JSON.parse(localStorage.getItem('token'))
    const config = {
      headers: {
          "Content-type": "application/json",
           "Authorization": `Bearer ${token}`,
      },
    }

  axios.get('https://heroku-app-012.herokuapp.com/api/goals',config)
    .then(function (response) {
       setLoading(false)

       setGoals(response.data)
          })
    .catch(function (error) {
        console.log("error isss:" + error);
        setLoading(false)

      });
  
  },[])
  

  const createGoal = (e) =>{
   
  e.preventDefault()

    console.log("goal equals :" + newGoal)
    const token = JSON.parse(localStorage.getItem('token'))

    const config = {
      headers: {
          "Content-type": "application/json",
           "Authorization": `Bearer ${token}`,
      },
    }

    axios.post('https://heroku-app-012.herokuapp.com/api/goals', {
      text : newGoal,
    },config)
    .then(function (response) {
     console.log(response)
    setGoals([...goals,{text: response.data.goal.text, _id: response.data.goal._id}])
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  
  const onChange= (e) =>{

    setFormData((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  }

  const deleteGoal = (goal)=>{
    setGoals(goals.filter((filteredGoal)=>{
      console.log(goal)
      return filteredGoal._id !== goal  }))
  }

  const logout =()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
  <>
 
  { isLoading && <ClipLoader color="#000000" loading={isLoading} cssOverride={override} size={150} />}
  
  {/*Grid Container*/}
  <Grid container spacing={1} sx={{minHeight:'calc(100vh - 180px)'}}>

  {/*Grid item 1*/}
  <Grid item xs={12} sx={{display:'flex', alignItems:'center',justifyContent:'center'}}>  

 
    <Stack sx={{fontSize:20,width:'30%'}}> 
    {goals.map(goal=><Goals key={uuid()} id={goal._id}goalText={goal.text} deleteGoal={deleteGoal}> </Goals>)}
    </Stack>
</Grid>
  {/*Grid item 2*/}
    <Grid item xs={12} sx={{display:'flex', alignItems:'center',justifyContent:'center'}}>  

<Stack sx={{width:'30%'}}>
  <FormControl>
    <TextField  type="string" variant="standard" label="Goal" name="newGoal" value={newGoal} onChange={onChange}>

    </TextField>

  </FormControl>
  
  <Button  sx={{marginTop:2}} color="success" variant="contained" onClick={createGoal}>Add Goal</Button>
  <Button  sx={{marginTop:2}}variant="contained" onClick={logout}>LogOut</Button>
  </Stack>
  </Grid>
    {/*Grid item 3*/
  <Grid item xs={12} sx={{display:'flex', alignItems:'center',justifyContent:'center'}}>  

  </Grid>}
  </Grid>
  </>
  )
}

export default Dashboard
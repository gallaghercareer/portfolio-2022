import axios from 'axios'
import { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Goals from './Goals'
import ClipLoader from "react-spinners/ClipLoader";

const {v4: uuid} = require('uuid')

const override = {
  display: "block",
  margin: "0 auto",
 
};

function Dashboard() {
  
const [goals, setGoals] = useState([])  
const [form, setFormData] = useState('')
const[isError,setErrorMessage] = useState(false)
let [isLoading, setLoading] = useState(true);


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

        setErrorMessage(true) 
      });
  
  },[])
  

  const createGoal = (e) =>{
    e.preventDefault()
    const token = JSON.parse(localStorage.getItem('token'))

    const config = {
      headers: {
          "Content-type": "application/json",
           "Authorization": `Bearer ${token}`,
      },
    }

    axios.post('https://heroku-app-012.herokuapp.com/api/goals', {
      text: form

    },config)
    .then(function (response) {
       
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
  <div>
  { isLoading && <ClipLoader color="#000000" loading={isLoading} cssOverride={override} size={150} />}

    {
    
    isError && <div>  Please login!</div>
    }
    <div>   
    
    </div>
    
    {goals.map(goal=><Goals key={uuid()} id={goal._id}goalText={goal.text} deleteGoal={deleteGoal}> </Goals>)}
  </div>
  
  <form onSubmit={createGoal}>
    <input onChange={onChange} name="text" type="string" placeholder="Add a new goal..."></input>
    <button type="submit">Submit</button>
  </form>
  <button onClick={logout}>Logout</button>

  </>
  )
}

export default Dashboard
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Button,FormControl,Input,FormHelperText,InputLabel, TextField} from '@mui/material';
import { useEffect } from 'react';

function Login() {
  const navigate = useNavigate()
 
  const [formData, setFormData] = useState({
 
    email: '',
    password: '',

  })

  const { email, password} = formData
  

  const onChange= (e) =>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  }

  const postUp = (e) =>{
    e.preventDefault()
    navigate('/dashboard')
    axios.post('https://heroku-app-012.herokuapp.com/api/users/login', {
      email: email,
      password: password
    })
    .then(function (response) {
      console.log(response.data)
      localStorage.setItem('token',JSON.stringify(response.data.token))
   
    })
    .catch(function (error) {
      console.log(error);
    });

  }



  return (
   <Grid container sx={{minHeight:'calc(100vh - 180px)'}}>
    <Grid item xs={12} sx={{display:'flex', alignItems:'center',justifyContent:'center'}}> 
    
    <FormControl>
<TextField type="email" variant="standard" label="Email" name="email" value={email} onChange={onChange}> Email</TextField>
<TextField type="password" variant="standard" label="password" name="password" value={password} onChange={onChange}>Password</TextField>
  <FormHelperText>User: John@gmail.com Password:Hired</FormHelperText>
  <Button  onClick={postUp}>Login</Button>
</FormControl>

    </Grid>
    </Grid>
  )
}

export default Login
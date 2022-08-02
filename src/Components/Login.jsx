import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Button,FormControl,Input,FormHelperText,InputLabel, TextField} from '@mui/material';
import { useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

function Login() {
  const navigate = useNavigate()
 
  const [formData, setFormData] = useState({
 
    email: '',
    password: '',

  })
  const [isError, setError] = useState(false)
  const {email, password} = formData
  let [isLoading, setLoading] = useState(false);
     

const override = {
  display: "block",
  margin: "50px auto",
  
};
  const onChange= (e) =>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  }

  const postUp = (e) =>{
    e.preventDefault()
   setLoading(true)

    axios.post('https://heroku-app-012.herokuapp.com/api/users/login', {
      email: email,
      password: password
    })
    .then(function (response) {
      setError(false)
      setLoading(false)
      console.log(response.data)
      localStorage.setItem('token',JSON.stringify(response.data.token))
      navigate('/dashboard')

    })
    .catch(function (error) {
      setLoading(false)
      setError(true)
      console.log(error);
    });

  }



  return (
    <> 
  { isLoading && <ClipLoader color="#000000" loading={isLoading} cssOverride={override} size={150} />}

   <Grid container sx={{minHeight:'calc(100vh - 180px)'}}>
    <Grid item xs={12} sx={{display:'flex', alignItems:'center',justifyContent:'center'}}> 
    
      <FormControl>
      <TextField helperText={isError ? 'Email is john@gmail.com' : '' }error={isError}type="email" variant="standard" label="Email" name="email" value={email} onChange={onChange}> Email</TextField>
      <TextField helperText={isError ? 'Password is Hired' : '' }error={isError} type="password" variant="standard" label="Password" name="password" value={password} onChange={onChange}>Password</TextField>
      <FormHelperText>User:John@gmail.com Password:Hired</FormHelperText>
      <Button sx={{marginTop:2}}color="success" variant="contained" onClick={postUp}>Login</Button>
      </FormControl>

    </Grid>
    </Grid>
    </>
  )
}

export default Login
import {React, useState} from 'react'
import {Typography, Box, Container,Button,FormControl, Input,FormHelperText} from '@mui/material'
import axios from 'axios'

function Weather() {

 const [temperature, setTemperature] = useState(0)
 const [location, setLocation] = useState("London")
 const [error, setError]= useState(false)
 const [country, setCountry] = useState('')
 
const updateLocation = (ev) =>{
    setLocation(ev.target.value)   
    setError(false)
}
 const getWeather = (e) =>{
e.preventDefault()
     console.log("getWeather ran")
     console.log("Location is:" + location)
    axios.get(`http://api.weatherapi.com/v1/current.json?key=518f8f8462544081a7e132637221406&q=${location}&aqi=no`)
    .then(function (response) {
      // handle success
      
      console.log(response.data);
      setTemperature(response.data.current.temp_f)
      setCountry(response.data.location.country)
      setLocation('London')
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      setError(true)
    })
    
 }

    return (
    <>



<Box sx={{minHeight:'calc(100vh - 180px)'}}> 

<Container> 
<Typography align="center" sx={{fontSize:200}}> {temperature}&deg;F </Typography>
<Typography align="center" sx={{fontStyle: 'italic',fontSize:25}}>{country}</Typography>
</Container>

<Box component="form" display="flex" justifyContent="center" p={10}> 
 <FormControl >
  
  <Input error={error}sx={{fontSize:50,height:100}}inputProps={{min: 0, style: { textAlign: 'center' }}} defaultValue="London" id="my-input" onChange={updateLocation} aria-describedby="my-helper-text" />
  <FormHelperText error={error} sx={{fontSize:25}}id="my-helper-text">Choose a valid city location</FormHelperText>
  <Button size="large" type="submit" variant="contained" onClick={getWeather}>Get Weather </Button> 

</FormControl>
</Box>
</Box>

</>
  )
}

export default Weather
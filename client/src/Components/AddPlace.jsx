import * as React from 'react';
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { AppBar, Checkbox, Container, FormControl, FormControlLabel, FormGroup, FormHelperText, Grid, IconButton, Input, InputLabel, MenuItem, Rating, Select, TextField, Toolbar, Typography } from '@mui/material';
import NavBar from './NavBar';


const StyledForm = styled(FormGroup)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '20px 10%',
  padding: '30px',
  border: '0px solid black',
  borderRadius: '20px',
  boxShadow: '15px 15px 60px 0.1px'

});

const StyledTextInput =styled(TextField)({
  width: '100%',
  paddingBottom: '10px',
  paddingRight: '10px'
})

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent: "space-between"
})

const AddPlace = () => {

  const destination = [
    'Beach',
    'City',
    'Desert',
    'Mountain'
  ];

  const [image, setImage] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [continent, setContinent] = useState("");
  const [budget, setBudget] = useState("");
  const [month, setMonth] = useState("");
  const [weather, setWeather] = useState("");
  const [food, setFood] = useState("");
  const [activity, setActivity] = useState("");
  const [type, setType] = useState(destination[0]);
  const [isSafe, setIsSafe] = useState(false);
  const [isHealth, setIsHealth] = useState(false);
  const [isFamily, setIsFamily] = useState(false);
  const [isLgbt, setIsLgbt] = useState(false);
  const [isTransportation, setIsTransportation] = useState(false);
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();


  const handleSubmit = (e) => {
      e.preventDefault();
      
      const postObject = {
          image, city, country, continent, budget, month, weather, food, activity, type, isSafe, isHealth, isFamily, isLgbt, isTransportation, description, rating
      };

      axios.post('http://localhost:8000/api/places', postObject)
          .then((response) => {
              console.log(response.data)
              navigate("/places")
          })
          .catch((err) => {
              console.log("XXX SERVER ERR XXX", err)
              // Get the errors from err.response.data
              const errorResponse = err.response.data.errors;
              // Define a temp error array to push the messages in
              const errorArr = []; 
              // Loop through all errors and get the messages
              for (const key of Object.keys(errorResponse)) { 
                  errorArr.push(errorResponse[key].message)
              }
              // Set Errors
              setErrors(errorArr);
          });

  };

  return (
    <>
      <CssBaseline />
      <NavBar/>
      <form onSubmit={handleSubmit}>

      <StyledForm>
        <Typography variant='h4' marginBottom='20px' fontWeight='bold' color='primary'>
          Add a new Place
        </Typography>
        <Grid container >
          <Grid item sm={6} paddingRight={'150px'}>
            <StyledTextInput
              variant="standard"
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}/>
            <StyledTextInput
              variant="standard"
              label="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}/>
            <StyledTextInput
              variant="standard"
              label="Continent"
              value={continent}
              onChange={(e) => setContinent(e.target.value)}/>
            <StyledTextInput
              variant="standard"
              label="What is the average daily expenses for one person?"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}/>
            <StyledTextInput
              variant="standard"
              label="When is the best time to visit it?"
              value={month}
              onChange={(e) => setMonth(e.target.value)}/>
            <StyledTextInput
              variant="standard"
              label="How is the weather there?"
              value={weather}
              onChange={(e) => setWeather(e.target.value)}/>
            <StyledTextInput
              variant="standard"
              label="What type of food are there?"
              value={food}
              onChange={(e) => setFood(e.target.value)}/>
            <StyledTextInput
              variant="standard"
              label="What are the activities people can do there?"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}/>
          </Grid>
          <Grid item sm={6}>
            <FormControl fullWidth>
              <InputLabel>Destination type:</InputLabel>
              <Select
                variant='standard'
                value={type}
                label="destination"
                onChange={(e) => setType(e.target.value)}
                >
                {destination.map( (dest, idx) => 
                  <MenuItem key={idx} value={dest}>{dest}</MenuItem>
                  )}
              </Select>
              <FormControlLabel  label="Is it safe?" control={<Checkbox checked={isSafe} onChange={(e) => setIsSafe(e.target.checked)}/>}/>
              <FormControlLabel  label="Is there public transportation?" control={<Checkbox checked={isTransportation} onChange={(e) => setIsTransportation(e.target.checked)}/>}/>
              <FormControlLabel  label="Is there easy access to health care?" control={<Checkbox checked={isHealth} onChange={(e) => setIsHealth(e.target.checked)}/>}/>
              <FormControlLabel  label="Is it family friendly?" control={<Checkbox checked={isFamily} onChange={(e) => setIsFamily(e.target.checked)}/>}/>
              <FormControlLabel  label="Is it LGBT friendly?" control={<Checkbox checked={isLgbt} onChange={(e) => setIsLgbt(e.target.checked)}/>}/>
              <StyledTextInput
              variant="standard"
              label="Write a small description for it:"
              value={description}
              onChange={(e) => setDescription(e.target.value)}/>
            </FormControl>
            <Typography component="legend">How would you rate this place?</Typography>
            <Rating
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            <StyledTextInput
              variant="standard"
              label="Please, provide a URL image of this place (jpg)"
              value={image}
              onChange={(e) => setImage(e.target.value)}/>
          </Grid>
        </Grid>
        <Button variant="contained" type="submit" color="success">Submit</Button>
      </StyledForm>
      </form>

      {/* <AppBar position="sticky">
            <StyledToolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                >
                <MenuIcon sx={{ display: { xs: 'block', sm: 'none' } }}/>
            </IconButton>
            <Typography
                variant="h4"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >
                Traveledge
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: 'flex' , gap: '10px', alignItems: 'center' }}>
                  <Typography
                  variant="p"
                  noWrap
                  component="div"
                  sx={{ display: { xs: 'block', sm: 'none' } }}
                  >
                  Traveledge
                  </Typography>
              </Box>
            </StyledToolbar>
        </AppBar> */}

        {/* <form onSubmit={handleSubmit}>
            <div>
                <p style={{color: 'red', fontWeight: 'bold'}}>{errors[0]}</p>
                <label>Please, provide a url image for this place (jpg):  </label>
                <input type="text" onChange={(e) => setImage(e.target.value)} value={image}></input>
            </div>
            <br/>
            <div>
                <p style={{color: 'red', fontWeight: 'bold'}}>{errors[3]}</p>
                <label>City:  </label>
                <input type="text" onChange={(e) => setCity(e.target.value)} value={city}></input>
            </div>
            <br/>
            <div>
                <p style={{color: 'red', fontWeight: 'bold'}}>{errors[2]}</p>
                <label>Country:  </label>
                <input type="text" onChange={(e) => setCountry(e.target.value)} value={country}></input>
            </div>
            <br/>
            <div>
                <p style={{color: 'red', fontWeight: 'bold'}}>{errors[1]}</p>
                <label>Continent:  </label>
                <input type="text" onChange={(e) => setContinent(e.target.value)} value={continent}></input>
            </div>
            <br/>
            <div>
                <p style={{color: 'red', fontWeight: 'bold'}}>{errors[4]}</p>
                <label>What is the average daily expenses for one person?  </label>
                <input type="number" onChange={(e) => setBudget(e.target.value)} value={budget}></input>
            </div>
            <br/>
            <div>
                <p style={{color: 'red', fontWeight: 'bold'}}>{errors[5]}</p>
                <label>When is the best time to visit it?  </label>
                <input type="text" onChange={(e) => setMonth(e.target.value)} value={month}></input>
            </div>
            <br/>
            <div>
                <p style={{color: 'red', fontWeight: 'bold'}}>{errors[6]}</p>
                <label>How is the weather there?  </label>
                <input type="text" onChange={(e) => setWeather(e.target.value)} value={weather}></input>
            </div>
            <br/>
            <div>
                <p style={{color: 'red', fontWeight: 'bold'}}>{errors[7]}</p>
                <label>What type of food are there?  </label>
                <input type="text" onChange={(e) => setFood(e.target.value)} value={food}></input>
            </div>
            <br/>
            <div>
                <p style={{color: 'red', fontWeight: 'bold'}}>{errors[8]}</p>
                <label>What are the activities people can do there?  </label>
                <input type="text" onChange={(e) => setActivity(e.target.value)} value={activity}></input>
            </div>
            <br/>
            <div>
                <label>Destination type:  </label>
                <select name="destinations" id="type" onChange={(e) => setType(e.target.value)} value={type}>
                  {destination.map( (dest, idx) => 
                      <option key={idx} value={dest}>{dest}</option>
                  )}
                </select>
            </div>
            <br/>
            <div>
                <input type="checkbox" onChange={(e) => setIsSafe(e.target.checked)} checked={isSafe}></input>
                <label>Is it safe?  </label>
            </div>
            <br/>
            <div>
                <input type="checkbox" onChange={(e) => setIsTransportation(e.target.checked)} checked={isTransportation}></input>
                <label>Is there public transportation?  </label>
            </div>
            <br/>
            <div>
                <input type="checkbox" onChange={(e) => setIsHealth(e.target.checked)} checked={isHealth}></input>
                <label>Is there easy access to health care?  </label>
            </div>
            <br/>
            <div>
                <input type="checkbox" onChange={(e) => setIsFamily(e.target.checked)} checked={isFamily}></input>
                <label>Is it family friendly?  </label>
            </div>
            <br/>
            <div>
                <input type="checkbox" onChange={(e) => setIsLgbt(e.target.checked)} checked={isLgbt}></input>
                <label>Is it LGBT friendly?  </label>
            </div>
            <br/>
            <div>
                <label>Write a description for it:  </label>
                <textarea onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
            </div>
            <br/>
            <div>
                <label>How would you rate this place?  </label>
                <input type="number" onChange={(e) => setRating(e.target.value)} value={rating}></input>
            </div>
            <br/>
            <div>
                <button>Create</button>
            </div>
        </form> */}
    </>
  )
}

export default AddPlace
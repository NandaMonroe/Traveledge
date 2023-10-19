import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Rating, Slider, Typography } from '@mui/material';

const RadioFilter = styled(Box)({
    display: 'flex',
    flexDirection: 'column'

});



const SideBar = () => {
  return (
    <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }} p="30px">
        <Box postion="fixed" >
            <Typography variante="h5" fontWeight="bold" sx={{marginTop: '20px'}}>
                Filter your search:
            </Typography>
            <br/>
            <RadioFilter>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Continent</FormLabel>
                    <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="All"
                    name="radio-buttons-group"
                    sx={{marginLeft: '20px'}}
                    >
                        <FormControlLabel value="All" control={<Radio />} label="All" />
                        <FormControlLabel value="Africa" control={<Radio />} label="Africa" />
                        <FormControlLabel value="Antartic" control={<Radio />} label="Antartic" />
                        <FormControlLabel value="Asia" control={<Radio />} label="Asia" />
                        <FormControlLabel value="Central America" control={<Radio />} label="Central America" />
                        <FormControlLabel value="Europe" control={<Radio />} label="Europe" />
                        <FormControlLabel value="North America" control={<Radio />} label="North America" />
                        <FormControlLabel value="South America" control={<Radio />} label="South America" />
                    </RadioGroup>
                </FormControl>
            </RadioFilter>
            <br/>
            <RadioFilter>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
                    <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="All"
                    name="radio-buttons-group"
                    sx={{marginLeft: '20px'}}
                    >
                        <FormControlLabel value="All" control={<Radio />} label="All"/>
                        <FormControlLabel value="City" control={<Radio />} label="City" />
                        <FormControlLabel value="Beach" control={<Radio />} label="Beach" />
                        <FormControlLabel value="Desert" control={<Radio />} label="Desert" />
                        <FormControlLabel value="Mountain" control={<Radio />} label="Mountain" />

                    </RadioGroup>
                </FormControl>
            </RadioFilter>
            <br/>
            <Box>
                <Typography variante="h6" color="gray">
                    Budget $/day
                </Typography>
                <Slider
                    aria-label="Budget"
                    defaultValue={100}
                    valueLabelDisplay="auto"
                    step={100}
                    marks
                    min={50}
                    max={1000}
                    />
            </Box>
            <br/>
            <Box>
                <Typography variante="h6" color="gray">
                    Rating
                </Typography>
                <Rating
                    name="filtered-rating"
                    // value={value}
                    // onChange={(event, newValue) => {
                    // setValue(newValue);
                    // }}
                />
            </Box>
            <br/>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Public Transportation" />
                <FormControlLabel control={<Checkbox  />} label="Family friendly" />
                <FormControlLabel control={<Checkbox />} label="LGBT friendly" />
            </FormGroup>
        </Box>
    </Box>
  )
}

export default SideBar
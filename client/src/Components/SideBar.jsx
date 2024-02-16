import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Rating, Slider, Typography } from '@mui/material';

const RadioFilter = styled(Box)({
    display: 'flex',
    flexDirection: 'column'

});



const SideBar = ({handleChange}) => {

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
                    <RadioGroup sx={{marginLeft: '20px'}}
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        onChange={handleChange}
                    >
                        <FormControlLabel value="All" control={<Radio size='small'/>} label="All" />
                        <FormControlLabel value="Africa" control={<Radio size='small' />} label="Africa" />
                        <FormControlLabel value="Asia" control={<Radio size='small' />} label="Asia" />
                        <FormControlLabel value="Central America" control={<Radio size='small' />} label="Central America" />
                        <FormControlLabel value="Europe" control={<Radio size='small' />} label="Europe" />
                        <FormControlLabel value="Oceania" control={<Radio size='small' />} label="Oceania" />
                        <FormControlLabel value="North America" control={<Radio size='small' />} label="North America" />
                        <FormControlLabel value="South America" control={<Radio size='small' />} label="South America" />
                    </RadioGroup>
                </FormControl>
            </RadioFilter>
            <br/>
            <RadioFilter>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
                    <RadioGroup sx={{marginLeft: '20px'}}
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        
                        onChange={handleChange}
                    >
                        <FormControlLabel value="All" control={<Radio size='small' />} label="All"/>
                        <FormControlLabel value="City" control={<Radio size='small' />} label="City" />
                        <FormControlLabel value="Beach" control={<Radio size='small' />} label="Beach" />
                        <FormControlLabel value="Desert" control={<Radio size='small' />} label="Desert" />
                        <FormControlLabel value="Mountain" control={<Radio size='small' />} label="Mountain" />

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
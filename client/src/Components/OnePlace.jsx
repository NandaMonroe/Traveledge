import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import { Box, Container, CssBaseline, Grid, Rating, Typography } from '@mui/material';

const OnePlace = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const [onePlace, setOnePlace] = useState(null);

  useEffect(() => {
    axios.get("https://traveledge.onrender.com/api/places/view/" + id)
        .then(res => {
            console.log(res.data);
            setOnePlace(res.data);
        })
        .catch(err => console.log(err));
  }, []);

  return (
        <>
          <CssBaseline/>
          <NavBar/>
          {
            onePlace && (
                <>
                <Container >
                <Box>
                      <Typography variant='h4' fontWeight='bold' gutterBottom marginTop={4}>
                        {onePlace.city}, {onePlace.country} ({onePlace.continent})
                      </Typography>
                      <Rating name="read-only" readOnly value={onePlace.rating} />
                </Box>

                  <Grid container marginTop={1} spacing={4}>
                    <Grid item sm={4}>
                      <img src={onePlace.image} alt="" width="300px" />
                      <p>{onePlace.description}</p>
                      <Typography variant='h6' fontWeight='bold'>Activitites available:</Typography>
                      <p>{onePlace.activity}</p>
                    </Grid>
                    <Grid item sm={4}>
                      <Typography variant='h6' fontWeight='bold'>Destination type:</Typography>
                      <p>{onePlace.type}</p>
                      <Typography variant='h6' fontWeight='bold'>Budget for one person per day:</Typography>
                      <p>Around ${onePlace.budget}.00</p>
                      <Typography variant='h6' fontWeight='bold'>Weather overview:</Typography>
                      <p> {onePlace.weather}</p>
                      <Typography variant='h6' fontWeight='bold'>Best time to visit it:</Typography>
                      <p>{onePlace.month}</p>
                      <Typography variant='h6' fontWeight='bold'>Food scene:</Typography>
                      <p>{onePlace.food}</p>
                    </Grid>
                    <Grid item sm={4}>
                      <Typography variant='h6' fontWeight='bold'>Is it safe?</Typography>
                      <p> {onePlace.safe ? "Yes, it is!!" : "You gotta be cautious!"}</p>
                      <Typography variant='h6' fontWeight='bold'>Is there public transportation?</Typography>
                      <p> {onePlace.transportation ? "Public transportation is very acessible!" : "You shouldn't count on that!"}</p>
                      <Typography variant='h6' fontWeight='bold'>Is there easy access to health care?</Typography>
                      <p> {onePlace.health ? "Yes, no worries about it!" : "You probably won't get it easy!"}</p>
                      <Typography variant='h6' fontWeight='bold'>Is it family friendly? Can I take my kids?</Typography>
                      <p> {onePlace.family ? "Perfect spot for a family vacation!" : "It's better for grown ups."}</p>
                      <Typography variant='h6' fontWeight='bold'>Is it LGBT friendly?</Typography>
                      <p> {onePlace.lgbt ? "You won't have any issues related to that!" : "It is a more conservative place."}</p>
                    </Grid>
                  </Grid>
          </Container>
                </>
            )
          }
        </>
  )
}

export default OnePlace
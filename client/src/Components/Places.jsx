import * as React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Grid, Rating } from "@mui/material";

const Places = ({ query }) => {
  const [placeList, setPlaceList] = useState([]);

  useEffect(() => {
    axios
      .get("https://traveledge.onrender.com/api/places")
      .then((res) => {
        console.log(res.data);
        setPlaceList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box flex={6}>
      <Container sx={{ py: 10 }}>
        <Grid container spacing={3}>
            {
                placeList.filter((place) => place.country.toLowerCase().includes(query)).map((place) => {
                    return (
                        <Grid item sm={3} key={place._id}>
                        <Card sx={{ borderRadius: "20px" }}>
                        <CardMedia
                            component="div"
                            sx={{ pt: "80%" }}
                            image={place.image}
                        />
                        <CardContent>
                            <Typography
                            gutterBottom
                            variant="h5"
                            fontWeight="bold"
                            component="h2"
                            >
                            {place.city},
                            </Typography>
                            <Typography
                            gutterBottom
                            variant="h5"
                            fontWeight="bold"
                            component="h2"
                            >
                            {place.country}
                            </Typography>
                            <Typography gutterBottom variant="h6">
                            Budget ${place.budget}/person/day
                            </Typography>
                            <Box display="flex">
                            <Typography gutterBottom variant="p">
                                Rating:
                            </Typography>
                            <Rating
                                name="read-only"
                                readOnly
                                value={place.rating}
                            />
                            </Box>
                        </CardContent>
                        <CardActions>
                            <Button
                            variant="contained"
                            size="small"
                            color="success"
                            href={`/places/view/${place._id}`}
                            >
                            View
                            </Button>
                        </CardActions>
                        </Card>
          </Grid>
                    );
                    }
                )
            }
        </Grid>
      </Container>
    </Box>
  );
};

export default Places;

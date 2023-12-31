import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Box, Rating } from '@mui/material';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Places = () => {
    return (
        <Box flex={6}>
            <Container sx={{ py: 8 }}>
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={3}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                            component="div"
                            sx={{
                                // 3:2
                                pt: '80%',
                            }}
                            image="https://source.unsplash.com/random?wallpapers"
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Heading
                            </Typography>
                            <Typography>
                                Budget $/day
                            </Typography>
                            </CardContent>
                            <CardActions>
                            <Rating name="read-only" readOnly/>
                            <Button size="small" color="success" edge="end">View</Button>
                            </CardActions>
                        </Card>
                        </Grid>
                    ))}
                    </Grid>
            </Container>
        </Box>
    )
}

export default Places
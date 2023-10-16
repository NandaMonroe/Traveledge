import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Dash = () => {

    const imageURL = "https://images.pexels.com/photos/1229846/pexels-photo-1229846.jpeg"

    return (
        <>
            {/* Hero unit */}
            <Box
            sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundImage: `url(${imageURL})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'flex-column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="white"
                    fontWeight="bold"
                    letterSpacing="1rem"
                    gutterBottom
                >
                    TRAVELEDGE
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="white"
                    fontStyle='italic'
                    paragraph
                >
                    Find your next adventure here
                </Typography>
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button variant="contained" color="success" href="/places">Get Started</Button>
                </Stack>
                </Container>
            </Box>
        </>
    )
}

export default Dash

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          Traveledge
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const Footer = () => {
  return (
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                We give you the push you need to fall into your dreams!
            </Typography>
            <Copyright />
        </Box>
  )
}

export default Footer
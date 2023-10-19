import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Places from './Places';
import Footer from './Footer';


const Main = () => {
    return (
        <Box>
            <CssBaseline />
            <NavBar/>
            <Stack direction='row' spacing={1}>
                <SideBar/>
                <Places/>
            </Stack>
            <Footer/>
        </Box>
    );
}

export default Main
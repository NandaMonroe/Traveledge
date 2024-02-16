import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Places from './Places';
import Footer from './Footer';
import Cards from './Cards';


const Main = () => {

    const [query, setQuery] = useState("")
    
    return (
        <Box>
            <CssBaseline />
            <NavBar  setQuery={setQuery}/>
            <Stack direction='row' spacing={2}>
                <SideBar />
                <Places query={query}/>
            </Stack>
            <Footer/>
        </Box>
    );
}

export default Main
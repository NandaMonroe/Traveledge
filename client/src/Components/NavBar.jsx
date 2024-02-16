import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';


const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent: "space-between"
})

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
padding: theme.spacing(0, 2),
height: '100%',
position: 'absolute',
pointerEvents: 'none',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
color: 'inherit',
'& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
    width: '20ch',
    },
},
}));


const NavBar = ({setQuery}) => {


    return (
        <AppBar position="sticky">
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
            <a href="/places" style={{ textDecoration: "none", color: "white"}}><Typography
                href="/places"
                variant="h3"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >
                Traveledge
            </Typography></a>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                inputProps={{ 'aria-label': 'search' }}
                placeholder="Search a country…"
                onChange={(e) => setQuery((e.target.value).toLowerCase())}
                />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: 'flex' , gap: '10px', alignItems: 'center' }} href="#">
                <Typography
                variant="p"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                Add a place
                </Typography>
                <Fab size="small" aria-label="add" href="/places/add">
                    <AddIcon/>
                </Fab>
            </Box>
            </StyledToolbar>
        </AppBar>
    );
}

export default NavBar
import React, { useState } from 'react';
import { Box, Button, Typography, AppBar, Toolbar, IconButton, Menu, MenuItem, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import resume from '../images/resume.jpg';
import background from '../images/background.jpg'
import Strip from '../Components/Strip';
import Description from '../Components/Description';
import CreateResume from '../Components/CreateResume';
import Review from '../Components/Reviews'
import Blue from '../Components/Blue'
import Footer from '../Components/Footer'

function App() {
  const [anchorEl, setAnchorEl] = useState(null);

  // Handle opening of the mobile menu
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle closing the mobile menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Box borderBottom='1px solid #B7B7B7'>
      {/* Header Navbar */}
      <AppBar position="sticky" sx={{ bgcolor: 'white', borderBottom: '2px solid #ccc' }}>
        <Toolbar sx={{ bgcolor: 'white' }}>
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'black' }}>
            My Resume Builder
          </Typography>

          {/* Desktop Buttons */}
          <Box sx={{ display: { xs: 'none', md: 'flex', }, gap: 2 }}>
            <Button color="textPrimary" sx={{ color: 'black' }}>Home</Button>
            <Button color="inherit" sx={{ color: 'black' }}>Features</Button>
            <Button color="inherit" sx={{ color: 'black' }}>Pricing</Button>
            <Button color="inherit" sx={{ color: 'black' }}>Login</Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            edge="end"
            aria-label="menu"
            onClick={handleMenuClick}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>Features</MenuItem>
            <MenuItem onClick={handleMenuClose}>Pricing</MenuItem>
            <MenuItem onClick={handleMenuClose}>Login</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box display="flex" justifyContent="space-between" alignItems="center" height="100vh" width="100%" bgcolor="white">
        {/* Left Section */}
        <Box padding={3}  width="50%" height="90vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography variant="h1" gutterBottom textAlign="center" letterSpacing="0.05em" lineHeight="1.4" width="450px">
            AI Powered Resume Builder and Analyzer
          </Typography>
          <Typography variant="body1" textAlign="center" color="textSecondary" letterSpacing="0.05em" lineHeight="1.4" width="450px">
          Our ATS bridges the gap between talent and opportunity, making recruitment smarter and fairer while helping candidates showcase their best selves.
          </Typography>
          <Box margin={5} width="100%" display="flex" justifyContent="center">
          <Button 
    variant="contained" 
    color="primary" 
    sx={{ marginX: 2, color: 'white' }} // Change text color to white
  >
    Try Now
  </Button>
            <Button variant="contained" color="background" sx={{ marginX: 2, color: 'black' }}>
              Contact Us
            </Button>
          </Box>
        </Box>

        {/* Right Section */}
        <Box width="50%" height="100vh" display="flex" justifyContent="center" alignItems="center">
          <img src={resume} alt="Resume" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
      </Box>
    </Box>
    <Strip />
    <Description />
    <CreateResume />
    <Review />
    <Blue />
    <Footer />
    </>
  );
}

export default App;

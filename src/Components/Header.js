// Components/Header.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'white', borderBottom: '2px solid #ccc' }}>
      <Toolbar sx={{ bgcolor: 'white' }}>
        <Typography variant="h6" sx={{ flexGrow: 1, color: 'black' }}>
          Resume Analyzer
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button sx={{ color: 'black' }} onClick={() => navigate('/')}>
            Home
          </Button>
          <Button sx={{ color: 'black' }} onClick={() => navigate('/features')}>
            Features
          </Button>
          <Button sx={{ color: 'black' }} onClick={() => navigate('/login')}>
            Login
          </Button>
        </Box>
        <IconButton
          color="inherit"
          edge="end"
          aria-label="menu"
          onClick={handleMenuClick}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={() => navigate('/')}>Home</MenuItem>
          <MenuItem onClick={() => navigate('/features')}>Features</MenuItem>
          <MenuItem onClick={() => navigate('/login')}>Login</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

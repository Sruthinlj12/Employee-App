import React from 'react';
import Button from '@mui/material/Button';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        width: '100%', // Full width
        maxWidth: '12000px', // Set a maximum width for larger screens
        height: '64px', // Adjust the height as needed
        borderRadius: 1, 
        boxShadow: 3, 
        backgroundColor: 'rgb(46, 46, 107)', // Dark background
        top: 0, // Align to the top
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Employee App
        </Typography>
        <Button 
          component={Link} 
          to="/"  // Link to the Home component
          color="inherit" 
          sx={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            borderRadius: 1, 
            px: 2, 
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.2)'
            }
          }}
        >
          Home
        </Button>
        <Button 
          component={Link} 
          to="/add"  // Link to the Add component
          color="inherit" 
          sx={{ 
            ml: 1, 
            background: 'rgba(255, 255, 255, 0.1)', 
            borderRadius: 1, 
            px: 2, 
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.2)'
            }
          }}
        >
          Add
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

import React from 'react';
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { Box } from '@mui/material'; // Import Box from Material-UI


function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh', // Ensure it covers the full height of the viewport
        backgroundImage: 'url("https://img.freepik.com/free-photo/japan-background-digital-art_23-2151546131.jpg")', // Replace with your image path
        backgroundSize: 'cover', // Cover the entire area
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Do not repeat the image
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Box>
  );
}

export default App;

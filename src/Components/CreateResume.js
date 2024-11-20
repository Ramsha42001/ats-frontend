import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import resume from '../images/pic1.jpg';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function CreateResume() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleTryNowClick = () => {
    navigate('/login'); // Redirect to /login
  };

  return (
    <>
      <Box width="100%" height="90vh" display="flex">
        {/* Left side - Image */}
        <Box
          flex="1"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="50%"
          bgcolor="black"
        >
          <img
            src={resume}
            alt="Resume"
            style={{
              width: '100%', // Ensures the image spans the full width of its container
              height: '100%', // Ensures the image fills its container's height
              objectFit: 'cover', // Maintains aspect ratio and covers the container
              opacity: '0.5',
              boxShadow: '10px 0px 15px -5px rgba(0, 0, 0, 0.75)',
            }}
          />
        </Box>

        {/* Right side */}
        <Box
          flex="1"
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          padding="5%"
          borderBottom="1px solid #B7B7B7"
          bgcolor="#f5f5f5"
        >
          <Typography variant="h1" textAlign="left" margin="10px">
            Start with Professional Resume Design Template
          </Typography>
          <Typography
            variant="h6"
            textAlign="left"
            color="textSecondary"
            margin="10px"
          >
            Customisable resume templates provide well-optimised designs that
            can be adjusted as per your needs in this AI resume builder
          </Typography>
          {/* Highlighted Box */}
          <Box
            display="flex"
            width="80%"
            border="2px solid #FF6229"
            borderRadius="15px"
            padding="10px"
            bgcolor="#ffd9cc"
          >
            <StarRateIcon sx={{ color: '#FF6229', fontSize: '30px' }} />
            <Typography variant="h6" color="textSecondary">
              Your Dream Job Starts with a Perfect Resume – Let Us Help You
              Build It!
            </Typography>
          </Box>
          {/* Create Now Button */}
          <Button
            variant="contained"
            sx={{
              width: '200px', // Fixed width for the button
              marginTop: '20px', // Adds spacing from the text above
            }}
            onClick={handleTryNowClick}
          >
            Create Now
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default CreateResume;

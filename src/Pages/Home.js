import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import resume from '../images/pic2.jpeg';
import Strip from '../Components/Strip';
import Description from '../Components/Description';
import CreateResume from '../Components/CreateResume';
import Review from '../Components/Reviews';
import Blue from '../Components/Blue';
import Footer from '../Components/Footer';
import Header from '../Components/Header'; // Import Header

function App() {
  const navigate = useNavigate();

  const handleTryNowClick = () => {
    navigate('/login');
  };

  return (
    <>
      <Header /> {/* Call the Header component */}
      <Box display="flex" justifyContent="space-between" alignItems="center" height="100vh" width="100%" bgcolor="white">
        <Box
          padding={3}
          width="50%"
          height="90vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h1" gutterBottom textAlign="center" letterSpacing="0.05em" lineHeight="1.4" width="450px">
            AI Powered Resume Builder and Analyzer
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            color="textSecondary"
            letterSpacing="0.05em"
            lineHeight="1.4"
            width="450px"
          >
            Our ATS bridges the gap between talent and opportunity, making recruitment smarter and fairer while helping
            candidates showcase their best selves.
          </Typography>
          <Box margin={5} width="100%" display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              sx={{ marginX: 2, color: 'white' }}
              onClick={handleTryNowClick}
            >
              Try Now
            </Button>
            <Button
              variant="contained"
              color="background"
              sx={{ marginX: 2, color: 'black' }}
              onClick={() =>
                window.location.href = 'mailto:support@example.com?subject=Contact%20Us&body=Hello'
              }
            >
              Contact Us
            </Button>
          </Box>
        </Box>
        <Box
          width="50%"
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="black"
        >
          <img
            src={resume}
            alt="Resume"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: '0.5',
              boxShadow: '-10px 0px 15px -5px rgba(0, 0, 0, 0.75)',
            }}
          />
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

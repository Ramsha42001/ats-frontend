import React from 'react';
import { Box, Typography } from '@mui/material';

function Strip() {
  return (
    <>
      <Box
        width="100%"
        height="auto"
        borderBottom="1px solid #B7B7B7"
        display="flex"
        bgcolor="#f5f5f5"
      >
        {/* First Box */}
        <Box
          flex="1"
          height="250px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography fontSize="3rem" textAlign="center" fontWeight="bolder">
            85%
          </Typography>
          <Typography fontSize="1rem" textAlign="center" color="textSecondary">
            Successful Matches
          </Typography>
          {/* <Typography fontSize="0.9rem" textAlign="center" mt={1} color="gray">
            Helping employers find the perfect candidates faster.
          </Typography> */}
        </Box>

        {/* Second Box */}
        <Box
          flex="1"
          height="250px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography fontSize="3rem" textAlign="center" fontWeight="bolder">
            9.2/10
          </Typography>
          <Typography fontSize="1rem" textAlign="center" color="textSecondary">
            AI Scoring Accuracy
          </Typography>
          {/* <Typography fontSize="0.9rem" textAlign="center" mt={1} color="gray">
            Providing intelligent resume analysis and scoring to match job requirements.
          </Typography> */}
        </Box>

        {/* Third Box */}
        <Box
          flex="1"
          height="250px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography fontSize="3rem" textAlign="center" fontWeight="bolder">
            70%
          </Typography>
          <Typography fontSize="1rem" textAlign="center" color="textSecondary">
            Time Saved
          </Typography>
          {/* <Typography fontSize="0.9rem" textAlign="center" mt={1} color="gray">
            Streamlining the recruitment process with automation and efficiency.
          </Typography> */}
        </Box>
      </Box>
    </>
  );
}

export default Strip;

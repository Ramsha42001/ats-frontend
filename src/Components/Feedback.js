import React, { useState } from 'react';
import { Box, Stack, Typography, TextField, Button, Rating, Paper } from '@mui/material';

function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Rating: ${rating}\nFeedback: ${feedback}`);
    setRating(0);
    setFeedback('');
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Paper sx={{ padding: 4, backgroundColor: '#f9f9f9', boxShadow: 3 }}>
        <Stack spacing={3}>
          <Typography variant="h4" fontWeight="bold" color="primary" align="center">
            We Value Your Feedback
          </Typography>

          {/* Rating Section */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="h6">Rate Us:</Typography>
            <Rating
              name="feedback-rating"
              value={rating}
              onChange={handleRatingChange}
              size="large"
            />
          </Stack>

          {/* Feedback Section */}
          <TextField
            label="Your Feedback"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            value={feedback}
            onChange={handleFeedbackChange}
            sx={{ backgroundColor: 'white' }}
          />

          {/* Submit Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{
              alignSelf: 'center',
              padding: '10px 30px',
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #0569E3, #FF6229)',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(90deg, #FF6229, #0569E3)',
              },
            }}
          >
            Submit Feedback
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}

export default FeedbackPage;

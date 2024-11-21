import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography, TextField, Button, Rating, Paper } from '@mui/material';
import { useLocation } from 'react-router-dom';

function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  
  // Retrieve email from location state
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = async () => {
    const payload = {
      email,
      rating,
      feedback,
    };

    try {
      const response = await fetch('https://resume-analysis-service-166527752013.us-central1.run.app/add-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert('Feedback submitted successfully!');
        setRating(0);
        setFeedback('');
      } else {
        const errorData = await response.json();
        console.error('Error submitting feedback:', errorData);
        alert('Failed to submit feedback. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('An error occurred while submitting feedback. Please check your connection.');
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Paper sx={{ padding: 4, backgroundColor: '#f9f9f9', boxShadow: 3 }}>
        <Stack spacing={3}>
          <Typography variant="h4" fontWeight="bold" color="primary" align="center">
            We Value Your Feedback
          </Typography>

          {/* Display email */}
          {email && (
            <Typography variant="subtitle1" color="textSecondary" align="center">
              Feedback for: {email}
            </Typography>
          )}

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

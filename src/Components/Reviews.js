import React from "react";
import { Box, Typography, Button, Card, CardContent, Avatar, Grid } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";

function Reviews() {
  const reviews = [
    {
      name: "Maliks January",
      title: "Product Designer",
      review:
        "The amount of interviews I got post using Cadenz versus my own resume, it’s a stark difference. I’d guesstimate roughly 300% increase in responses, interviews, and feedback.",
      stars: 5,
      avatar: "https://via.placeholder.com/50",
    },
    {
      name: "Rentt Vivie",
      title: "Front-End Developer",
      review:
        "I had a near-zero interview rate using my old resume to apply for positions all over the web. Within just one month using Cadenz, I was contacted by nearly half of all the positions I applied for. Thanks Cadenz!",
      stars: 5,
      avatar: "https://via.placeholder.com/50",
    },
  ];

  return (
    <Box padding="50px" bgcolor="#f9f9f9"  borderBottom="1px solid #B7B7B7">
      {/* Header Section */}
      <Box textAlign="center" marginBottom="30px">
        <Typography variant="h4" fontWeight="bold">
          Our Customers Love
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Here’s what some of our customers say about our platform
        </Typography>
      </Box>

      {/* Reviews Section */}
      <Grid container spacing={4} justifyContent="center">
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              sx={{
                padding: "20px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
              }}
            >
              <CardContent>
                {/* Stars */}
                <Box display="flex" marginBottom="10px">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <StarRateIcon key={i} sx={{ color: "#FFC107" }} />
                  ))}
                </Box>

                {/* Review Text */}
                <Typography variant="body1" color="textSecondary" marginBottom="20px">
                  {review.review}
                </Typography>

                {/* User Info */}
                <Box display="flex" alignItems="center">
                  <Avatar src={review.avatar} alt={review.name} sx={{ marginRight: "10px" }} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {review.name}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      {review.title}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* "See All Stories" Button */}
      <Box textAlign="center" marginTop="30px">
        <Button variant="contained" color="primary" sx={{ borderRadius: "20px", padding: "10px 20px" }}>
          See All Stories
        </Button>
      </Box>
    </Box>
  );
}

export default Reviews;

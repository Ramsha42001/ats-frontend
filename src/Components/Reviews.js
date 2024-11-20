import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";

function Reviews() {
  const reviews = [
    {
      name: "Maliks January",
      title: "Product Designer",
      review:
        "The website is so easy to use! I was able to create and analyze my resume within minutes.",
      stars: 5,
      avatar: "https://via.placeholder.com/50",
    },
    {
      name: "Rentt Vivie",
      title: "Front-End Developer",
      review:
        "The ability to download my resume in different formats is a fantastic feature.",
      stars: 5,
      avatar: "https://via.placeholder.com/50",
    },
    {
      name: "Chris Doe",
      title: "Backend Engineer",
      review:
        "Fantastic platform! The AI suggestions helped me tailor my resume for specific roles.",
      stars: 4,
      avatar: "https://via.placeholder.com/50",
    },
    {
      name: "Emma White",
      title: "Data Scientist",
      review: "Great user experience and helpful insights for building resumes.",
      stars: 5,
      avatar: "https://via.placeholder.com/50",
    },
  ];

  // State for managing popup visibility
  const [open, setOpen] = useState(false);

  // Open popup
  const handleOpen = () => setOpen(true);

  // Close popup
  const handleClose = () => setOpen(false);

  // Limit reviews to display only 2 initially
  const limitedReviews = reviews.slice(0, 2);

  return (
    <Box padding="50px" bgcolor="#f9f9f9" borderBottom="1px solid #B7B7B7">
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
        {(open ? reviews : limitedReviews).map((review, index) => (
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
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: "20px", padding: "10px 20px" }}
          onClick={handleOpen}
        >
          See All Stories
        </Button>
      </Box>

      {/* Popup Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>All Reviews</DialogTitle>
        <DialogContent>
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
                      <Avatar
                        src={review.avatar}
                        alt={review.name}
                        sx={{ marginRight: "10px" }}
                      />
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
          <Box textAlign="center" marginTop="30px">
            <Button
              variant="contained"
              color="secondary"
              sx={{ borderRadius: "20px", padding: "10px 20px" }}
              onClick={handleClose}
            >
              Close
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default Reviews;

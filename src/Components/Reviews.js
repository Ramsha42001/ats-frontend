import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";

function Reviews() {
  // State for reviews data
  const [reviews, setReviews] = useState([]);
  const [open, setOpen] = useState(false); // Popup visibility

  // Fetch reviews from the API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          "https://resume-analysis-service-166527752013.us-central1.run.app/get-feedback"
        );
        // Assuming the actual reviews are in response.data[0].feedback
        if (response.data && Array.isArray(response.data[0]?.feedback)) {
          setReviews(response.data[0].feedback);
        } else {
          console.error("Unexpected response structure:", response.data);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

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
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap="16px"
        marginTop="20px"
      >
        {(open ? reviews : limitedReviews).map((review, index) => (
          <Box
            key={index}
            width={{ xs: "100%", sm: "calc(50% - 16px)" }}
            display="flex"
            flexDirection="column"
          >
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
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarRateIcon key={i} sx={{ color: i < 4 ? "#FFC107" : "#E0E0E0" }} />
                  ))}
                </Box>

                {/* Review Text */}
                <Typography variant="body1" color="textSecondary" marginBottom="20px">
                  {review.feedback}
                </Typography>

                {/* Placeholder User Info */}
                <Box display="flex" alignItems="center">
                  <Avatar
                    src={"https://via.placeholder.com/50"}
                    alt={"Anonymous"}
                    sx={{ marginRight: "10px" }}
                  />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Anonymous User
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      Reviewer
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

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
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gap="16px"
            marginTop="20px"
          >
            {reviews.map((review, index) => (
              <Box
                key={index}
                width={{ xs: "100%", sm: "calc(50% - 16px)" }}
                display="flex"
                flexDirection="column"
              >
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
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarRateIcon key={i} sx={{ color: i < 4 ? "#FFC107" : "#E0E0E0" }} />
                      ))}
                    </Box>

                    {/* Review Text */}
                    <Typography variant="body1" color="textSecondary" marginBottom="20px">
                      {review.feedback}
                    </Typography>

                    {/* Placeholder User Info */}
                    <Box display="flex" alignItems="center">
                      <Avatar
                        src={"https://via.placeholder.com/50"}
                        alt={"Anonymous"}
                        sx={{ marginRight: "10px" }}
                      />
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          Anonymous User
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                          Reviewer
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
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

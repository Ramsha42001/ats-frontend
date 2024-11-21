import React from "react";
import { Box, Typography, Button, Grid, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "2rem",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Grid container spacing={4}>
        {/* Logo and Description */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
           Resume Analyzer
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {/* Join over 35,307,000 users worldwide */}
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#007bff",
              color: "#fff",
              textTransform: "none",
              fontWeight: "bold",
              ":hover": { backgroundColor: "#0056b3" },
            }}
          >
            Create Free Account
          </Button>
        </Grid>

        {/* Links Section */}
        <Grid item xs={12} md={2}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            AI Writer
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="none" color="inherit">
              Resume Builder
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="none" color="inherit">
              Cover Letter
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="none" color="inherit">
              Summary
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="none" color="inherit">
              Resignation Letter
            </Link>
          </Typography>
        </Grid>

        <Grid item xs={12} md={2}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Company
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="none" color="inherit">
              About Us
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="none" color="inherit">
              Careers
            </Link>{" "}
            <Typography
              component="span"
              sx={{
                backgroundColor: "red",
                color: "#fff",
                padding: "0 6px",
                fontSize: "0.75rem",
                borderRadius: "4px",
                ml: 1,
              }}
            >
              Hiring
            </Typography>
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="none" color="inherit">
              Contact Us
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="none" color="inherit">
              User Reviews
            </Link>
          </Typography>
        </Grid>

        {/* <Grid item xs={12} md={2}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Follow Us
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="none" color="inherit">
              Podcast Spotify
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="none" color="inherit">
              Instagram
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="none" color="inherit">
              LinkedIn
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="none" color="inherit">
              YouTube
            </Link>
          </Typography>
        </Grid> */}
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          mt: 4,
          pt: 2,
          borderTop: "1px solid #e0e0e0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © 2024 LNMIIT. All rights reserved.
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Link href="#" underline="none" color="text.secondary">
            Privacy Policy
          </Link>
          <Link href="#" underline="none" color="text.secondary">
            Terms of Service
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

import React from "react";
import { Box, Typography, Button } from "@mui/material";

function Blue() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        bgcolor: "#f5f5f5",
         borderBottom:"1px solid #B7B7B7"
      }}
    >
      <Box
        sx={{
          width: "80%",
          height:'370px',
          backgroundColor: "#007bff",
          color: "#fff",
          borderRadius: "8px",
          padding: "2rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        {/* Background pattern */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://via.placeholder.com/400')",
            opacity: 0.1,
          }}
        />

        {/* Content */}
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
          Supercharge Your Job Search With Cadenz.ai
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#007bff",
              fontWeight: "bold",
              ":hover": { backgroundColor: "#e6e6e6" },
            }}
          >
            Try for Free
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#fff",
              color: "#fff",
              fontWeight: "bold",
              ":hover": { backgroundColor: "#0056b3" },
            }}
          >
            Contact Sales
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Blue;

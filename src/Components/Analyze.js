import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  CircularProgress,
} from "@mui/material";

function ResumeAnalysisPage() {
  const [score, setScore] = useState(85); // Mock score
  const [insights, setInsights] = useState({
    skills: 80,
    experience: 75,
    formatting: 90,
  });
  const [jobDescription, setJobDescription] = useState("");
  const [fileOption, setFileOption] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loading indicator

  const rows = [
    { id: 1, customer: "John Doe", transactionId: "#TR12345", date: "20 Nov 2024", insights: "Strong formatting" },
    { id: 2, customer: "Jane Smith", transactionId: "#TR98765", date: "18 Nov 2024", insights: "Improved keywords" },
  ];

  const columns = [
    { field: "customer", headerName: "Customer", width: 150 },
    { field: "transactionId", headerName: "Transaction ID", width: 150 },
    { field: "date", headerName: "Date", width: 120 },
    { field: "insights", headerName: "Insights", width: 250 },
  ];

  const handleGenerateAnalysis = () => {
    setLoading(true); // Start loading
    // Simulate analysis by setting insights after a delay
    setTimeout(() => {
      setScore(92); // Mock updated score
      setInsights({
        skills: 85,
        experience: 78,
        formatting: 95,
      });
      setLoading(false); // Stop loading
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <Box
      sx={{
        padding: 4,
        maxWidth: 1200,
        margin: "0 auto",
        backgroundColor: "#f7f8fa",
        borderRadius: 4,
        boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: "bold",
          textAlign: "center",
          background: "linear-gradient(90deg, #0569E3, #FF6229)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Resume Analysis Dashboard
      </Typography>

      {/* Job Description Input and File Dropdown */}
      <Box sx={{ mb: 4 }}>
        {/* Job Description Input */}
        <TextField
          fullWidth
          label="Enter Job Description"
          multiline
          rows={4}
          variant="outlined"
          sx={{ mb: 3 }}
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />

        {/* File Dropdown */}
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Select Resume File</InputLabel>
          <Select
            value={fileOption}
            onChange={(e) => setFileOption(e.target.value)}
            label="Select Resume File"
          >
            <MenuItem value="resume1.pdf">Resume 1 (PDF)</MenuItem>
            <MenuItem value="resume2.docx">Resume 2 (DOCX)</MenuItem>
            <MenuItem value="resume3.pdf">Resume 3 (PDF)</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Generate Analysis Button */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Button
          variant="contained"
          sx={{
            background: "#007BFF", // Blue color
            color: "white",
            fontWeight: "bold",
            borderRadius: 20,
            paddingX: 4,
            paddingY: 1.5,
            "&:hover": { opacity: 0.9 },
          }}
          onClick={handleGenerateAnalysis} // Trigger analysis on button click
          disabled={loading} // Disable button while loading
        >
          {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Generate Analysis"}
        </Button>
      </Box>

      {/* Summary Cards */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "space-between",
          flexWrap: "wrap",
          mb: 4,
        }}
      >
        <Paper
          sx={{
            flex: "1",
            padding: 3,
            textAlign: "center",
            borderRadius: 4,
            backgroundColor: "#f3f6fd",
          }}
        >
          <Typography variant="h6" sx={{ color: "#7E57C2" }}>
            Resume Score
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold", color: "#4CAF50" }}>
            {score}%
          </Typography>
        </Paper>
        <Paper
          sx={{
            flex: "1",
            padding: 3,
            textAlign: "center",
            borderRadius: 4,
            backgroundColor: "#f3f6fd",
          }}
        >
          <Typography variant="h6" sx={{ color: "#FF5722" }}>
            Keywords Matched
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold", color: "#FF9800" }}>
            {insights.skills}%
          </Typography>
        </Paper>
        <Paper
          sx={{
            flex: "1",
            padding: 3,
            textAlign: "center",
            borderRadius: 4,
            backgroundColor: "#f3f6fd",
          }}
        >
          <Typography variant="h6" sx={{ color: "#2196F3" }}>
            Formatting Score
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold", color: "#3F51B5" }}>
            {insights.formatting}%
          </Typography>
        </Paper>
      </Box>

      {/* Circular Score Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          mb: 4,
        }}
      >
        {Object.entries(insights).map(([key, value]) => (
          <Paper
            key={key}
            sx={{
              padding: 3,
              textAlign: "center",
              borderRadius: 4,
              width: "200px",
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textTransform: "capitalize",
                mb: 2,
                color: "#666",
                fontWeight: "medium",
              }}
            >
              {key} Score
            </Typography>
            <Box
              sx={{
                position: "relative",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress
                variant="determinate"
                value={value}
                size={80}
                sx={{ color: "#4CAF50" }}
              />
              <Typography
                variant="h6"
                sx={{
                  position: "absolute",
                  fontWeight: "bold",
                  color: "#4CAF50",
                }}
              >
                {value}%
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>

      {/* Footer with Action Button */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #0569E3, #FF6229)",
            color: "white",
            fontWeight: "bold",
            borderRadius: 20,
            paddingX: 4,
            paddingY: 1.5,
            "&:hover": { opacity: 0.9 },
          }}
        >
          Download Full Analysis Report
        </Button>
      </Box>
    </Box>
  );
}

export default ResumeAnalysisPage;

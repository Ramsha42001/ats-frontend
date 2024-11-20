import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";
import axios from "axios"; // Ensure axios is imported

function ResumeAnalysisPage() {
  const [score, setScore] = useState(null); // Initially, no score
  const [Feedback,setFeedback] = useState(null);
  const [Key,setKey]=useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [insights, setInsights] = useState({});
  const [loading, setLoading] = useState(false); // State to manage loading indicator

  // Handle file change
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Submit form data
  const handleSubmit = async () => {
    if (!selectedFile || !jobDescription) {
      setResponseMessage(
        "Please select a file and provide a job description before submitting."
      );
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("resume_file", selectedFile); // Append file with 'resume_file' key
    formData.append("job_description", jobDescription); // Append job description

    try {
      const response = await axios.post(
        "https://resume-analysis-service-166527752013.us-central1.run.app/resume", // Replace with your actual backend URL
        formData
      );

      
      const data = response.data;
      console.log(response)
      setScore(data[0]["Overall Score"] || "N/A"); 
      setFeedback(data[0]["Feedback"] || "N/A");
      setKey(data[0])
      setInsights({
        skills: data.Insights?.skills || "N/A",
        experience: data.Insights?.experience || "N/A",
        formatting: data.Insights?.formatting || "N/A",
      });
      setResponseMessage("Analysis generated successfully!");
    } catch (error) {
      console.error(error);
      setResponseMessage(
        "Failed to analyze the resume. Please try again later."
      );
    } finally {
      setLoading(false); // Stop loading
    }
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

      {/* Job Description Input and File Input */}
      <Box sx={{ mb: 4 }}>
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

        <input type="file" onChange={handleFileChange} style={{ marginBottom: "16px" }} />
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
          onClick={handleSubmit} // Trigger analysis on button click
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: "white" }} />
          ) : (
            "Generate Analysis"
          )}
        </Button>
      </Box>

      {/* Response Message */}
      {responseMessage && (
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: responseMessage.includes("Failed") ? "red" : "green",
            mb: 4,
          }}
        >
          {responseMessage}
        </Typography>
      )}

      {/* Summary Cards */}
      {score && (
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
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: "#4CAF50" }}
            >
              {score}%
            </Typography>
          </Paper>
          {Object.entries(insights).map(([key, value]) => (
            <Paper
              key={key}
              sx={{
                flex: "1",
                padding: 3,
                textAlign: "center",
                borderRadius: 4,
                backgroundColor: "#f3f6fd",
              }}
            >
              <Typography variant="h6" sx={{ color: "#FF5722" }}>
                {key.charAt(0).toUpperCase() + key.slice(1)} Score
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", color: "#FF9800" }}
              >
                {value}%
              </Typography>
            </Paper>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default ResumeAnalysisPage;

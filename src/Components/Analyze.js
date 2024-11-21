import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import Header from "./Header";

function ResumeAnalysisPage({ fetchedData }) {
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [keyPoints, setKeyPoints] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [insights, setInsights] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle file selection from fetchedData (dropdown)
  const handleFileSelection = (event) => {
    const selectedFilePath = event.target.value;
    const selectedFile = fetchedData.find(file => file.filePath === selectedFilePath);
    setSelectedFile(selectedFile);
  };

  // Handle file input change (if using file input)
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
    formData.append("resume_file", selectedFile);
    formData.append("job_description", jobDescription);

    try {
      const response = await axios.post(
        "https://resume-analysis-service-166527752013.us-central1.run.app/resume",
        formData
      );

      const data = response.data[0]; // Accessing the first object in the response array
      setScore(data["Overall Score"] || "N/A");
      setFeedback(data["Feedback"] || "No feedback available.");
      setKeyPoints(data["Key Points"] || "N/A");
      setSuggestions(data["Suggestions for Improvement"] || "N/A");
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
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          padding: 4,
          maxWidth: 1200,
          minHeight: "100vh",
          margin: "30px auto",
          borderRadius: 4,
          boxShadow: "20px 30px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid #eaeaea",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Resume Analysis Dashboard
        </Typography>

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

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 3 }}>
            <Button
              variant="contained"
              component="label"
              sx={{
                backgroundColor: "#007BFF",
                color: "white",
                "&:hover": { backgroundColor: "#0056b3" },
                borderRadius: 20,
                paddingX: 3,
                paddingY: 1,
              }}
            >
              Choose File (if needed)
              <input
                type="file"
                hidden
                onChange={handleFileChange}
              />
            </Button>
            <Typography variant="body2">
              {selectedFile ? selectedFile.name : "No file selected"}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Button
            variant="contained"
            sx={{
              background: "#007BFF",
              color: "white",
              fontWeight: "bold",
              borderRadius: 20,
              paddingX: 4,
              paddingY: 1.5,
              "&:hover": { opacity: 0.9 },
            }}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : (
              "Generate Analysis"
            )}
          </Button>
        </Box>

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

        {score && (
          <>
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
            </Box>

            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bolder" }}>
              Key Points:
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: "textSecondary" }}>
              {keyPoints}
            </Typography>

            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bolder" }}>
              Suggestion:
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              {suggestions}
            </Typography>
          </>
        )}
      </Box>
    </>
  );
}

export default ResumeAnalysisPage;

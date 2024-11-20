import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  LinearProgress,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import { useLocation } from "react-router-dom";

function FileUploadPage() {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [usedStorage, setUsedStorage] = useState(13.25);
  const [fetchedData, setFetchedData] = useState([{
    _id: "",
    filename: "",
    size: 0,
    uploadDate: ""
  }]);

  const totalStorage = 15;

  useEffect(() => {
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("resume", file);

      // Post request to backend
      axios
        .post(
          "https://resume-analysis-service-166527752013.us-central1.run.app/upload-document",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          console.log("File uploaded successfully", response.data);

          // Assuming response data contains filename, size, and uploadDate
          const uploadedFile = {
            _id: response.data._id,
            filename: response.data.filename,
            size: response.data.size, // assuming the response includes size
            uploadDate: new Date().toLocaleDateString(), // using the current date as upload date
          };

          // Immediately update the fetchedData state with the new file
          setFetchedData((prevData) => [
            ...prevData,
            uploadedFile,
          ]);

          // Optionally, update the storage usage based on the file size
          setUsedStorage((prevUsedStorage) => prevUsedStorage + uploadedFile.size / (1024 * 1024)); // Assuming size is in bytes
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    } else {
      alert("Please select a file first.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://resume-analysis-service-166527752013.us-central1.run.app/get-documents?email=${email}`
        );
        console.log(response.data);
        setFetchedData(response.data.documents);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (email) {
      fetchData();
    }
  }, [email]);

  return (
    <Box
      sx={{
        padding: 4,
        maxWidth: 1200,
        margin: "2rem auto",
        backgroundColor: "#ffffff",
        borderRadius: 8,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
        border: "1px solid #eaeaea",
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: "bold",
          textAlign: "center",
          background: "linear-gradient(90deg, #0569E3, #FF6229)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Upload Your Document
      </Typography>

      {/* Storage Indicator */}
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: "500" }}>
          {usedStorage.toFixed(2)} GB used of {totalStorage} GB
        </Typography>
        <LinearProgress
          variant="determinate"
          value={(usedStorage / totalStorage) * 100}
          sx={{
            height: 10,
            borderRadius: 5,
            "& .MuiLinearProgress-bar": {
              background: "linear-gradient(90deg, #FF6229, #0569E3)",
            },
          }}
        />
        <Typography
          variant="caption"
          sx={{ display: "block", mt: 1, color: "#888888" }}
        >
          {totalStorage - usedStorage} GB remaining
        </Typography>
      </Box>

      {/* File Upload Section */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*,application/pdf,.doc,.docx,.xlsx,.xls,.txt"
          style={{ display: "none" }}
          id="file-upload"
        />
        <label htmlFor="file-upload">
          <Button
            variant="contained"
            component="span"
            startIcon={<CloudUploadIcon />}
            sx={{
              background: "linear-gradient(90deg, #0569E3, #FF6229)",
              color: "white",
              fontWeight: "bold",
              borderRadius: 30,
              paddingX: 4,
              "&:hover": {
                opacity: 0.9,
              },
            }}
          >
            Choose File
          </Button>
        </label>
      </Box>

      {/* Upload Button */}
      {file && (
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(90deg, #0569E3, #FF6229)",
              color: "white",
              fontWeight: "bold",
              borderRadius: 30,
              paddingX: 4,
            }}
            onClick={handleUpload}
          >
            Upload File
          </Button>
        </Box>
      )}

      {/* Document Table */}
      {fetchedData.length > 0 && (
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
            borderRadius: 2,
          }}
        >
          <Table>
            <TableHead sx={{ backgroundColor: "#6B7280" }}>
              <TableRow>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  File Name
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">
                  Size (MB)
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">
                  Upload Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fetchedData.map((file, index) => (
                <TableRow key={index} hover>
                  <TableCell>{file.filename}</TableCell>
                  <TableCell align="right">
                    {(file.size / 1024 / 1024).toFixed(2)}
                  </TableCell>
                  <TableCell align="right">{file.uploadDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {fetchedData.length === 0 && (
        <Typography
          variant="body2"
          sx={{ textAlign: "center", color: "#999999", mt: 4 }}
        >
          No files uploaded yet.
        </Typography>
      )}
    </Box>
  );
}

export default FileUploadPage;

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
import { useDropzone } from "react-dropzone";
import Header from "./Header";
import Analyze from './Analyze.js'
function FileUploadPage(props) {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [fetchedData, setFetchedData] = useState(props.fetchedData);

  useEffect(() => {
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("resume", file);

      await axios
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
          const uploadedFile = {
            _id: response.data._id,
            filename: response.data.filename,
            size: response.data.size,
            uploadDate: new Date().toLocaleDateString(),
          };

          setFetchedData((prevData) => [...prevData, uploadedFile]);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    } else {
      alert("Please select a file first.");
    }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://resume-analysis-service-166527752013.us-central1.run.app/get-documents?email=${email}`
  //       );
  //       setFetchedData(response.data.documents);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   if (email) {
  //     fetchData();
  //   }
  // }, [email]);

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "application/pdf,.doc,.docx,.xlsx,.xls,.txt",
  });

  return (
    <>
     <Header />
    <Box
      sx={{
        padding: 4,
        maxWidth: 1200,
        minHeight: 600,
        margin: "2rem auto",
        backgroundColor: "#ffffff",
        borderRadius: 2,
        boxShadow: "20px 30px 30px rgba(0, 0, 0, 0.1)",
        border: "1px solid #eaeaea",
      }}
    >
      {/* Header */}
      <Typography
        variant="h2"
        sx={{
          mb: 4,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Upload Your Document
      </Typography>

      {/* Drag and Drop Section */}
      <Box
        {...getRootProps()}
        sx={{
          border: "2px dashed #0569E3",
          padding: 9,
          textAlign: "center",
          borderRadius: 2,
          backgroundColor: isDragActive ? "#f7f7f7" : "#ffffff",
          mb: 4,
          cursor: "pointer",
          color:'#6B7280'
        }}
      >
        <CloudUploadIcon />
        <input {...getInputProps()} />
        {isDragActive ? (
          <Typography variant="body1">Drop the file here...</Typography>
        ) : (
          <Typography variant="body1">
            Drag and drop a file here, or click to select a file
          </Typography>
        )}
      </Box>

      {/* Upload Button */}
      {file && (
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Selected File: {file.name}
          </Typography>
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
                {/* <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">
                  Size (MB)
                </TableCell> */}
                {/* <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">
                  Upload Date
                </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {fetchedData.map((file, index) => (
                <TableRow key={index} hover>
                  <TableCell>{file.filename}</TableCell>
                  {/* <TableCell align="right">
                    {(file.size / 1024 / 1024).toFixed(2)}
                  </TableCell>
                  <TableCell align="right">{file.uploadDate}</TableCell> */}
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
    </>
  );
}

export default FileUploadPage;

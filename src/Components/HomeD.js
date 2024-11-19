import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  Box,
  Typography,
  LinearProgress,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function FileUploadPage() {
  const [files, setFiles] = useState([]);
  const [usedStorage, setUsedStorage] = useState(13.25); // GB
  const totalStorage = 15; // GB

  // Handle file uploads via dropzone or input field
  const onDrop = useCallback(
    (acceptedFiles) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);

      // Simulate storage update (based on file size, here assumed for demo)
      const newUsedStorage = usedStorage + acceptedFiles.length * 0.1; // Mock file size
      setUsedStorage(newUsedStorage);
    },
    [usedStorage]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*,application/pdf,.doc,.docx,.xlsx,.xls,.txt",
    multiple: true,
  });

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
        Upload Your Documents
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
        <Typography variant="caption" sx={{ display: "block", mt: 1, color: "#888888" }}>
          {totalStorage - usedStorage} GB remaining
        </Typography>
      </Box>

      {/* File Upload Section */}
      <Box
        {...getRootProps()}
        sx={{
          border: "2px dashed #ccc",
          borderRadius: 8,
          padding: 4,
          textAlign: "center",
          backgroundColor: isDragActive ? "#e6f7ff" : "#f9f9f9",
          "&:hover": {
            backgroundColor: "#f4f8ff",
          },
          transition: "background-color 0.3s",
          mb: 4,
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} />
        <Typography variant="body1" sx={{ mb: 2 }}>
          {isDragActive ? "Drop the files here..." : "Drag and drop your files here or"}
        </Typography>
        <Button
          variant="contained"
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
          Browse Files
        </Button>
      </Box>

      {/* Document Table */}
      {files.length > 0 && (
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
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>File Name</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">
                  Size (MB)
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">
                  Upload Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {files.map((file, index) => (
                <TableRow key={index} hover>
                  <TableCell>{file.name}</TableCell>
                  <TableCell align="right">
                    {(file.size / 1024 / 1024).toFixed(2)}
                  </TableCell>
                  <TableCell align="right">{new Date().toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {files.length === 0 && (
        <Typography variant="body2" sx={{ textAlign: "center", color: "#999999", mt: 4 }}>
          No files uploaded yet.
        </Typography>
      )}
    </Box>
  );
}

export default FileUploadPage;

import React, { useState } from 'react';
import { Box, Button, Input, TextField } from '@mui/material';
import axios from 'axios';

function Dashboard() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [jobDescription, setJobDescription] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    // Handle file change
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    // Handle job description change
    const handleJobDescriptionChange = (event) => {
        setJobDescription(event.target.value);
    };

    // Submit form data
    const handleSubmit = async () => {
        if (!selectedFile || !jobDescription) {
            setResponseMessage('Please select a file and provide a job description before submitting.');
            return;
        }

        const formData = new FormData();
        formData.append('resume_file', selectedFile);  // Append file with 'resume_file' key
        formData.append('job_description', jobDescription);  // Append job description

        try {
            const response = await axios.post(
                'https://resume-analysis-service-166527752013.us-central1.run.app/resume-parser',  // Replace with your actual backend URL
                formData // Send FormData, which automatically sets 'Content-Type'
            );
            setResponseMessage(`File uploaded successfully! Response: ${JSON.stringify(response.data)}`);
        } catch (error) {
            console.error(error);
            setResponseMessage('Failed to upload file. Please try again.');
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                gap: 2,
            }}
        >
            {/* File input */}
            <Input
                type="file"
                onChange={handleFileChange}
                inputProps={{ accept: '.pdf,.doc,.docx' }}
            />

            {/* Job description input */}
            <TextField
                label="Job Description"
                variant="outlined"
                value={jobDescription}
                onChange={handleJobDescriptionChange}
                fullWidth
                multiline
                rows={4}
            />

            {/* Submit button */}
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
            </Button>

            {/* Response message */}
            {responseMessage && <Box mt={2}>{responseMessage}</Box>}
        </Box>
    );
}

export default Dashboard;

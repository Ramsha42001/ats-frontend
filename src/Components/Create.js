import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Box, TextField, Paper, Stack } from '@mui/material';
import jsPDF from 'jspdf'; // jsPDF to generate the PDF

function CreateResume() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    experience: '',
  });

  const templates = [
    { id: 1, name: 'Template 1', description: 'A simple professional template' },
    { id: 2, name: 'Template 2', description: 'A modern and clean design' },
    { id: 3, name: 'Template 3', description: 'A creative layout for tech professionals' },
    { id: 4, name: 'Template 4', description: 'A basic resume template' },
  ];

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
    // Clear form data when template changes
    setFormData({
      name: '',
      email: '',
      phone: '',
      skills: '',
      experience: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateResume = () => {
    const { name, email, phone, skills, experience } = formData;
    const doc = new jsPDF();

    // Add content based on selected template
    if (selectedTemplate === 1) {
      doc.setFont('helvetica', 'normal');
      doc.text(`Name: ${name}`, 10, 10);
      doc.text(`Email: ${email}`, 10, 20);
      doc.text(`Phone: ${phone}`, 10, 30);
      doc.text(`Skills: ${skills}`, 10, 40);
      doc.text(`Experience: ${experience}`, 10, 50);
    } else if (selectedTemplate === 2) {
      doc.setFont('times', 'italic');
      doc.text(`Name: ${name}`, 20, 20);
      doc.text(`Email: ${email}`, 20, 30);
      doc.text(`Phone: ${phone}`, 20, 40);
      doc.text(`Skills: ${skills}`, 20, 50);
      doc.text(`Experience: ${experience}`, 20, 60);
    } else if (selectedTemplate === 3) {
      doc.setFont('courier', 'normal');
      doc.text(`*** ${name.toUpperCase()} ***`, 10, 10);
      doc.text(`Email: ${email}`, 10, 20);
      doc.text(`Phone: ${phone}`, 10, 30);
      doc.text(`Skills: ${skills}`, 10, 40);
      doc.text(`Experience: ${experience}`, 10, 50);
    } else if (selectedTemplate === 4) {
      doc.setFont('arial', 'bold');
      doc.text(`Name: ${name}`, 30, 30);
      doc.text(`Email: ${email}`, 30, 40);
      doc.text(`Phone: ${phone}`, 30, 50);
      doc.text(`Skills: ${skills}`, 30, 60);
      doc.text(`Experience: ${experience}`, 30, 70);
    }

    doc.save('resume.pdf'); // Download the resume as PDF
  };

  return (
    <Box sx={{ padding: 3 }}>
      {/* Template Selection */}
      <Stack direction="row" spacing={2} justifyContent="space-between" flexWrap="wrap">
        {templates.map((template) => (
          <Card
            key={template.id}
            onClick={() => handleTemplateSelect(template.id)}
            sx={{
              cursor: 'pointer',
              boxShadow: selectedTemplate === template.id ? 10 : 3,
              '&:hover': { boxShadow: 10 },
              width: { xs: '100%', sm: '45%', md: '22%' }, // Responsive width
            }}
          >
            <CardContent>
              <Typography variant="h6">{template.name}</Typography>
              <Typography variant="body2">{template.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>

      {/* Dynamic Form Fields */}
      {selectedTemplate && (
        <Box mt={3}>
          <Paper sx={{ padding: 3 }}>
            <Typography variant="h6">Enter Your Details</Typography>

            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              margin="normal"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <TextField
              label="Skills"
              variant="outlined"
              fullWidth
              margin="normal"
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
            />
            <TextField
              label="Experience"
              variant="outlined"
              fullWidth
              margin="normal"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
            />

            <Button
              variant="contained"
              sx={{
                marginTop: 3,
                background: 'linear-gradient(90deg, #0569E3, #FF6229)',
                color: 'white',
                fontWeight: 'bold',
              }}
              onClick={generateResume}
            >
              Generate Resume
            </Button>
          </Paper>
        </Box>
      )}
    </Box>
  );
}

export default CreateResume;

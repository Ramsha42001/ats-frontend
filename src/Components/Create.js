import React, { useState } from "react";
import DisplayComponent from "./ResumePreview";
import { TextField, Button, Box, Typography } from "@mui/material"; // Material UI components for better styling

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: [{ title: "", description: "" }], // Each education will have a title and description
    experience: [""], // Start with one empty experience field
    skills: [""], // Start with one empty skill field
    projects: [{ title: "", description: "" }], // Each project will have a title and description
    certifications: "",
    cocurricular: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

   
  const handleChange = (e, index, name) => {
    const { value, name: fieldName } = e.target; // Destructure to get the field name and value
    if (Array.isArray(formData[name])) {
      if (typeof formData[name][index] === 'string') {
        // For experience and skills (which are simple strings)
        const newData = [...formData[name]];
        newData[index] = value; // Update the string value
        setFormData({
          ...formData,
          [name]: newData,
        });
      } else {
        // For education and projects (which are objects with title and description)
        const newData = [...formData[name]];
        newData[index] = { ...newData[index], [fieldName]: value }; // Update the object property
        setFormData({
          ...formData,
          [name]: newData,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  

  const handleAddField = (fieldName) => {
    if (fieldName === "education" || fieldName === "projects") {
      setFormData({
        ...formData,
        [fieldName]: [...formData[fieldName], { title: "", description: "" }],
      });
    } else {
      setFormData({
        ...formData,
        [fieldName]: [...formData[fieldName], ""], // Add a new empty field for the specified section
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
            <Typography variant="h4" gutterBottom>
              Resume Builder
            </Typography>

            {/* Name Field */}
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              fullWidth
              required
              margin="normal"
            />

            {/* Email Field */}
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              fullWidth
              required
              margin="normal"
            />

            {/* Phone Field */}
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              fullWidth
              required
              margin="normal"
            />

            {/* Education Section */}
            <Typography variant="h6" gutterBottom>
              Education:
            </Typography>
            {formData.education.map((edu, index) => (
              <Box key={index} sx={{ marginBottom: "20px" }}>
                <TextField
                  label={`Education ${index + 1} Title`}
                  name="title"
                  value={edu.title}
                  onChange={(e) => handleChange(e, index, "education")}
                  fullWidth
                  required
                  margin="normal"
                />
                <TextField
                  label={`Education ${index + 1} Description`}
                  name="description"
                  value={edu.description}
                  onChange={(e) => handleChange(e, index, "education")}
                  fullWidth
                  required
                  margin="normal"
                  multiline
                  rows={3}
                />
              </Box>
            ))}
            <Button variant="outlined" onClick={() => handleAddField("education")}>
              Add More Education
            </Button>

            {/* Experience Section */}
            <Typography variant="h6" gutterBottom>
              Experience:
            </Typography>
            {formData.experience.map((exp, index) => (
              <TextField
                key={index}
                label={`Experience ${index + 1}`}
                name="experience"
                value={exp}
                onChange={(e) => handleChange(e, index, "experience")}
                fullWidth
                required
                margin="normal"
                multiline
                rows={2}
              />
            ))}
            <Button variant="outlined" onClick={() => handleAddField("experience")}>
              Add More Experience
            </Button>

            {/* Skills Section */}
            <Typography variant="h6" gutterBottom>
              Skills:
            </Typography>
            {formData.skills.map((skill, index) => (
              <TextField
                key={index}
                label={`Skill ${index + 1}`}
                name="skills"
                value={skill}
                onChange={(e) => handleChange(e, index, "skills")}
                fullWidth
                required
                margin="normal"
              />
            ))}
            <Button variant="outlined" onClick={() => handleAddField("skills")}>
              Add More Skills
            </Button>

            {/* Projects Section */}
            <Typography variant="h6" gutterBottom>
              Projects:
            </Typography>
            {formData.projects.map((proj, index) => (
              <Box key={index} sx={{ marginBottom: "20px" }}>
                <TextField
                  label={`Project ${index + 1} Title`}
                  name="title"
                  value={proj.title}
                  onChange={(e) => handleChange(e, index, "projects")}
                  fullWidth
                  required
                  margin="normal"
                />
                <TextField
                  label={`Project ${index + 1} Description`}
                  name="description"
                  value={proj.description}
                  onChange={(e) => handleChange(e, index, "projects")}
                  fullWidth
                  required
                  margin="normal"
                  multiline
                  rows={3}
                />
              </Box>
            ))}
            <Button variant="outlined" onClick={() => handleAddField("projects")}>
              Add More Projects
            </Button>

            {/* Certifications Section */}
            <TextField
              label="Certifications"
              name="certifications"
              value={formData.certifications}
              onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
              fullWidth
              margin="normal"
              multiline
              rows={2}
            />

            {/* Co-Curricular Section */}
            <TextField
              label="Co-Curricular Activities"
              name="cocurricular"
              value={formData.cocurricular}
              onChange={(e) => setFormData({ ...formData, cocurricular: e.target.value })}
              fullWidth
              margin="normal"
              multiline
              rows={2}
            />

            {/* Submit Button */}
            <Button variant="contained" color="primary" type="submit" sx={{ marginTop: 2 }}>
              Submit
            </Button>
          </Box>
        </form>
      ) : (
        <DisplayComponent data={formData} />
      )}
    </div>
  );
};

export default FormComponent;

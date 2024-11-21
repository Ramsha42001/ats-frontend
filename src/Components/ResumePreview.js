import React, { useRef } from "react";
import { Box, Button, Typography, Divider } from "@mui/material";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ResumePreview = ({ data }) => {
  const componentRef = useRef();

  const generatePDF = async () => {
    const resumeElement = componentRef.current;
    const canvas = await html2canvas(resumeElement, { scale: 1 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    // Scale image to fit A4 size
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Scale height proportionally
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

    // Save PDF with the name of the user
    pdf.save(`${data.name.replace(" ", "_")}_Resume.pdf`);
  };

  return (
    <Box
      sx={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "700px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        color: "#333",
      }}
    >
      <div ref={componentRef} style={{ padding: "20px" }}>
        {/* Name Section */}
        <Typography
          variant="h6" // Changed from h5 to h6 for smaller text
          sx={{
            textAlign: "center",
            color: "#333",
            borderBottom: "2px solid #4caf50",
            paddingBottom: "8px", // Reduced padding
            marginBottom: "15px", // Reduced margin
          }}
        >
          {data.name}
        </Typography>

        {/* Contact Information Section */}
        <Box sx={{ marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "8px" }}> {/* Changed to body1 for smaller text */}
            Contact Information:
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body2" sx={{ marginBottom: "5px" }}> {/* Changed to body2 for smaller text */}
              <strong>Email:</strong> {data.email}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "5px" }}> {/* Changed to body2 for smaller text */}
              <strong>Phone:</strong> {data.phone}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ margin: "15px 0" }} /> {/* Reduced margin for Divider */}

        {/* Education Section */}
        <Box sx={{ marginTop: "15px" }}> {/* Reduced margin */}
          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "8px" }}> {/* Changed to body1 for smaller text */}
            Education:
          </Typography>
          {data.education?.length > 0 ? (
            data.education.map((edu, index) => (
              <Typography variant="body2" key={index} sx={{ marginBottom: "5px" }}> {/* Changed to body2 for smaller text */}
                <strong>{edu.title}:</strong> {edu.description}
              </Typography>
            ))
          ) : (
            <Typography variant="body2" sx={{ marginBottom: "5px" }}> {/* Changed to body2 for smaller text */}
              No education details added.
            </Typography>
          )}
        </Box>

        <Divider sx={{ margin: "15px 0" }} /> {/* Reduced margin for Divider */}

        {/* Experience Section */}
        <Box sx={{ marginTop: "15px" }}> {/* Reduced margin */}
          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "8px" }}> {/* Changed to body1 for smaller text */}
            Experience:
          </Typography>
          {data.experience?.length > 0 ? (
            data.experience.map((exp, index) => (
              <Typography variant="body2" key={index} sx={{ marginBottom: "5px" }}> {/* Changed to body2 for smaller text */}
                {exp}
              </Typography>
            ))
          ) : (
            <Typography variant="body2" sx={{ marginBottom: "5px" }}> {/* Changed to body2 for smaller text */}
              No experience added.
            </Typography>
          )}
        </Box>

        <Divider sx={{ margin: "15px 0" }} /> {/* Reduced margin for Divider */}

        {/* Skills Section */}
        <Box sx={{ marginTop: "15px" }}> {/* Reduced margin */}
          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "8px" }}> {/* Changed to body1 for smaller text */}
            Skills:
          </Typography>
          <Box display="flex" flexWrap="wrap">
            {data.skills?.length > 0 ? (
              data.skills.map((skill, index) => (
                <Typography
                  key={index}
                  variant="body2" // Changed to body2 for smaller text
                  sx={{
                    padding: 1,
                    margin: "3px", // Reduced margin
                    backgroundColor: "#D1D5DB",
                    borderRadius: 2,
                  }}
                >
                  {skill}
                </Typography>
              ))
            ) : (
              <Typography variant="body2" sx={{ marginBottom: "5px" }}> {/* Changed to body2 for smaller text */}
                No skills added.
              </Typography>
            )}
          </Box>
        </Box>

        <Divider sx={{ margin: "15px 0" }} /> {/* Reduced margin for Divider */}

        {/* Projects Section */}
        <Box sx={{ marginTop: "15px" }}> {/* Reduced margin */}
          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "8px" }}> {/* Changed to body1 for smaller text */}
            Projects:
          </Typography>
          {data.projects?.length > 0 ? (
            data.projects.map((project, index) => (
              <Typography variant="body2" key={index} sx={{ marginBottom: "5px" }}> {/* Changed to body2 for smaller text */}
                {project.title}: {project.description}
              </Typography>
            ))
          ) : (
            <Typography variant="body2" sx={{ marginBottom: "5px" }}> {/* Changed to body2 for smaller text */}
              No projects added.
            </Typography>
          )}
        </Box>

        <Divider sx={{ margin: "15px 0" }} /> {/* Reduced margin for Divider */}

        {/* Certifications Section */}
        <Box sx={{ marginTop: "15px" }}> {/* Reduced margin */}
          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "8px" }}> {/* Changed to body1 for smaller text */}
            Certifications:
          </Typography>
          {data.certifications ? (
            <Typography variant="body2" sx={{ marginBottom: "5px" }}> {/* Changed to body2 for smaller text */}
              {data.certifications}
            </Typography>
          ) : (
            <Typography variant="body2" sx={{ marginBottom: "5px" }}> {/* Changed to body2 for smaller text */}
              No certifications added.
            </Typography>
          )}
        </Box>

        <Divider sx={{ margin: "15px 0" }} /> {/* Reduced margin for Divider */}

        {/* Co-Curricular Activities Section */}
        <Box sx={{ marginTop: "15px" }}> {/* Reduced margin */}
          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "8px" }}> {/* Changed to body1 for smaller text */}
            Co-Curricular Activities:
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "5px" }}> {/* Changed to body2 for smaller text */}
            {data.cocurricular}
          </Typography>
        </Box>
      </div>

      <Button
        variant="contained"
        color="primary"
        sx={{ display: "block", margin: "20px auto" }}
        onClick={generatePDF}
      >
        Download Resume
      </Button>
    </Box>
  );
};

export default ResumePreview;

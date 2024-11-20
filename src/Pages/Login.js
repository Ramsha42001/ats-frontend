import React, { useState } from "react";
import axios from "axios";
import login from '../images/login3.jpeg';
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const App = () => {
  const initialFormData = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    agreeToTerms: false,
  };

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle input change for both forms
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission for login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://resume-analysis-service-166527752013.us-central1.run.app/login",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response.data);
      // Redirect to dashboard upon successful login
      navigate("/dashboard", { state: { email: formData.email }});
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      setErrorMessage(error.response?.data?.message || "Login failed.");
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://resume-analysis-service-166527752013.us-central1.run.app/signup",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Signup successful:", response.data);
      setFormData(initialFormData); // Reset form data
      setErrorMessage(""); // Clear any previous error
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      setErrorMessage(error.response?.data?.message || "Signup failed.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          boxShadow: 3,
          borderRadius: 2,
          overflow: "hidden",
          backgroundColor: "#fff",
          width: "80%",
          height: "80vh",
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            bgcolor: 'black',
            borderRight: '2px solid #B7B7B7'
          }}
        >
          <img src={login} width="100%" height="100%" style={{ opacity: 0.6 }} alt="Login illustration" />
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            width: "50%",
            padding: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
            {isLogin ? "Log In" : "Create an Account"}
          </Typography>

          {errorMessage && (
            <Typography variant="body2" sx={{ color: "error.main", mb: 2 }}>
              {errorMessage}
            </Typography>
          )}

          {/* Login Form */}
          {isLogin ? (
            <form onSubmit={handleLoginSubmit} style={{ width: "100%" }}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                sx={{ mb: 2 }}
                required
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                name="password"
                value={formData.password}
                onChange={handleChange}
                sx={{ mb: 3 }}
                required
              />
              <Button
                variant="contained"
                size="large"
                fullWidth
                type="submit"
                sx={{
                  mb: 2,
                  backgroundColor: "#1976d2",
                  "&:hover": { backgroundColor: "#1565c0" },
                }}
              >
                Log In
              </Button>
            </form>
          ) : (
            // Signup Form
            <form onSubmit={handleSignupSubmit} style={{ width: "100%" }}>
              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Stack>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                sx={{ mb: 2 }}
                required
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                name="password"
                value={formData.password}
                onChange={handleChange}
                sx={{ mb: 3 }}
                required
              />
              <Button
                variant="contained"
                size="large"
                fullWidth
                type="submit"
                sx={{
                  mb: 2,
                  backgroundColor: "#1976d2",
                  "&:hover": { backgroundColor: "#1565c0" },
                }}
              >
                Create Account
              </Button>
            </form>
          )}

          {/* Toggle Login/Signup */}
          <Typography variant="body2" sx={{ textAlign: "center", color: "text.secondary" }}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Link
              href="#"
              onClick={() => setIsLogin(!isLogin)}
              underline="hover"
            >
              {isLogin ? "Sign Up" : "Log In"}
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default App;

import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Typography,
} from "@mui/material";
import { Home, Info, Menu, ChevronLeft, Login } from "@mui/icons-material";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Sidebar = ({ onMenuItemClick }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { text: "Dashboard", icon: <Home /> },
    { text: "Analyze Resume", icon: <FilePresentIcon /> },
    { text: "Create Resume", icon: <DocumentScannerIcon /> },
    { text: "Feedback", icon: <Info /> },
  ];

  const handleLogout = () => {
    // Navigate to the login page
    navigate("/login");
  };

  return (
    <div style={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        open={isOpen}
        sx={{
          width: isOpen ? 280 : 70,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: isOpen ? 280 : 70,
            transition: "width 0.3s",
            overflowX: "hidden",
            boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)", // Add shadow
          },
        }}
      >
        {/* Header with toggle button */}
        <div
          style={{
            display: "flex",
            justifyContent: isOpen ? "space-between" : "center",
            alignItems: "center",
            padding: 16,
            height: 150,
            backgroundColor: "#6B7280",
            color: "white",
          }}
        >
          {isOpen && <Typography variant="h6">Welcome, Ramsha Iqbal</Typography>}
          <IconButton onClick={toggleDrawer} sx={{ color: "white" }}>
            {isOpen ? <ChevronLeft /> : <Menu />}
          </IconButton>
        </div>
        <Divider />
        
        {/* Menu Items */}
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => onMenuItemClick(item.text)} // Handle menu clicks
              sx={{
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                  "& .MuiListItemText-primary": {
                    color: "#FF6229",
                    fontWeight: "bold",
                  },
                },
              }}
            >
              <ListItemIcon sx={{ color: "#0569E3" }}>{item.icon}</ListItemIcon>
              {isOpen && <ListItemText primary={item.text} />}
            </ListItem>
          ))}
        </List>
        
        <Divider />
        
        {/* Footer Login Item */}
        <List style={{ marginTop: "auto" }}>
          <ListItem
            button
            onClick={handleLogout} // Call handleLogout on click
            sx={{
              "&:hover": {
                backgroundColor: "#f5f5f5",
                "& .MuiListItemText-primary": {
                  color: "#FF6229",
                  fontWeight: "bold",
                },
              },
            }}
          >
            <ListItemIcon sx={{ color: "#0569E3" }}>
              <Login />
            </ListItemIcon>
            {isOpen && <ListItemText primary="Logout" />}
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;

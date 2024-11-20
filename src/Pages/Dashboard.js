import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import HomeD from '../Components/HomeD'
import Analyze from '../Components/Analyze'
import Create from '../Components/Create'
import  Feedback from "../Components/Feedback";

function Dashboard() {
const [activeMenu, setActiveMenu] = useState("Home"); // Default menu item

  // Function to handle menu item click
  const handleMenuItemClick = (menu) => {
    setActiveMenu(menu);
  };

  // Render content based on the active menu
  const renderContent = () => {
    switch (activeMenu) {
      case "Home":
        return <HomeD />;
      case "Analyze Resume":
        return <Analyze />;
      case "Create Resume":
        return <Create />;
      case "Feedback":
        return <Feedback />;
      default:
        return <h1>Select a Menu Item.</h1>;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar onMenuItemClick={handleMenuItemClick} />
      <div style={{ flex: 1, padding: "20px" }}>{renderContent()}</div>
    </div>
  );
}

export default Dashboard;
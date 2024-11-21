import React, { useState,useEffect} from "react";
import Sidebar from "../Components/Sidebar";
import HomeD from '../Components/HomeD'
import Analyze from '../Components/Analyze'
import Create from '../Components/Create'
import  Feedback from "../Components/Feedback";
import Header from "../Components/Header";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const location = useLocation();
const [activeMenu, setActiveMenu] = useState("Home"); // Default menu item
const [email,setEmail]=useState("")
const [fetchedData, setFetchedData] = useState([
  {
    _id: "",
    filename: "",
  },
]);

useEffect(() => {
  if (location.state && location.state.email) {
    setEmail(location.state.email);
  }
}, [location.state]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://resume-analysis-service-166527752013.us-central1.run.app/get-documents?email=${email}`
      );
      setFetchedData(response.data.documents);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (email) {
    fetchData();
  }
}, [email]);


  // Function to handle menu item click
  const handleMenuItemClick = (menu) => {
    setActiveMenu(menu);
  };

  // Render content based on the active menu
  const renderContent = () => {
    switch (activeMenu) {
      case "Dashboard":
        return <HomeD fetchedData={fetchedData} />;
      case "Analyze Resume":
        return <Analyze fetchedData={fetchedData}/>;
      case "Create Resume":
        return <Create />;
      case "Feedback":
        return <Feedback />;
      default:
        return <h1>Select a Menu Item.</h1>;
    }
  };

  return (
    <div style={{ display: "flex",backgroundColor:'white' }}>
     
      <Sidebar onMenuItemClick={handleMenuItemClick} />
 
      <div style={{ flex: 1, padding: "20px" }}>{renderContent()}</div>
    </div>
  );
}

export default Dashboard;
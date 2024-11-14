import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from '../Components/Slide2.jsx';
import SecondPage from '../Components/Slide1.jsx';
import EngagementDashboard from '../Components/Slide3.jsx';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<SecondPage/>} />
      <Route path='/secondpage' element={<Dashboard/>} />
      <Route path='/engagementdashboard' element={<EngagementDashboard/>} />

      </Routes>
    </Router>
  )
}

export default AppRouter
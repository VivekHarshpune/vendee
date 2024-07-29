import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Pages/Welcome';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Profile from './components/Auth/Profile';
import Home from './components/Dashboard/Home';
import Overview from './components/Pages/Overview';
import FacilityManagement from './components/Pages/FacilityManagement';
import BookingManagement from './components/Pages/BookingManagement';
import ProfileManagement from './components/Pages/ProfileManagement';
import UserInteraction from './components/Pages/UserInteraction';
import ReportsAnalytics from './components/Pages/ReportsAnalytics';
import HelpCentre from './components/Pages/HelpCentre';
import Navbar from './components/Layout/Navbar';
import Footer from '/Users/vivekharsh/communitybookvendee/src/components/Layout/Footer.js';
import AuthProvider from '/Users/vivekharsh/communitybookvendee/src/components/contexts/AuthContext.js';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/home" element={<Home />} />
            <Route path="/vendor/overview" element={<Overview />} />
            <Route path="/vendor/facilities" element={<FacilityManagement />} />
            <Route path="/vendor/bookings" element={<BookingManagement />} />
            <Route path="/vendor/profile" element={<ProfileManagement />} />
            <Route path="/vendor/interactions" element={<UserInteraction />} />
            <Route path="/vendor/reports" element={<ReportsAnalytics />} />
            <Route path="/vendor/help" element={<HelpCentre />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;

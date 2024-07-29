import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/vivekharsh/communitybookvendee/src/components/Pages/Welcome.css';

const VendorDashboard = () => {
  return (
    <div className="vendor-dashboard">
      <div className="sidebar">
      <h2>COMMUNTIY BOOK</h2>
        <ul>
          <li><Link to="/vendor/overview">Overview</Link></li>
          <li><Link to="/vendor/facilities">Facility Management</Link></li>
          <li><Link to="/vendor/bookings">Booking Management</Link></li>
          <li><Link to="/vendor/profile">Profile Management</Link></li>
          <li><Link to="/vendor/interactions">User Interaction</Link></li>
          <li><Link to="/vendor/reports">Reports & Analytics</Link></li>
          <li><Link to="/vendor/help">Help Centre</Link></li>
        </ul>
        <Link to="/vendor/logout" className="btn logout-btn">Logout</Link>
      </div>
      <div className="content">
      <h1>WELCOME TO COMMUNTIY BOOK</h1>

        <h2>Welcome to Your Vendor Dashboard</h2>
        <p>Manage your facilities, bookings, and user interactions all in one place.</p>
        
        <div className="overview-section">
          <div className="metric-card">
            <h3>Facility Utilization</h3>
            <p>75%</p>
          </div>
          <div className="metric-card">
            <h3>Upcoming Bookings</h3>
            <p>10 this week</p>
          </div>
          <div className="metric-card">
            <h3>Notifications</h3>
            <p>3 new</p>
          </div>
        </div>

        <div className="facility-management-section">
          <h2>Facility Management</h2>
          <p>Update your facility details and manage availability.</p>
          {/* Add components or tools for managing facilities */}
        </div>

        <div className="booking-management-section">
          <h2>Booking Management</h2>
          <p>Review and manage all bookings for your facilities.</p>
          {/* Add components or tools for managing bookings */}
        </div>

        <div className="profile-management-section">
          <h2>Profile Management</h2>
          <p>Update your vendor information and settings.</p>
          {/* Add components or tools for managing profile */}
        </div>

        <div className="user-interaction-section">
          <h2>User Interaction</h2>
          <p>Communicate with your users and manage events.</p>
          {/* Add components or tools for user interactions */}
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;

import React from 'react';

const Overview = () => {
  return (
    <div>
      <h1>Overview</h1>
      <p>Welcome to your vendor dashboard! Here you can get a quick snapshot of your facility's performance, upcoming bookings, and recent notifications.</p>
      
      <div className="overview-metrics">
        <div className="metric-card">
          <h3>Facility Utilization</h3>
          <p>Monitor the percentage of your facility's usage and optimize availability.</p>
        </div>
        <div className="metric-card">
          <h3>Upcoming Bookings</h3>
          <p>Keep track of the number of upcoming bookings for the week.</p>
        </div>
        <div className="metric-card">
          <h3>Notifications</h3>
          <p>Stay updated with the latest notifications and alerts.</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;

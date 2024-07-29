import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [amenities, setAmenities] = useState([]);

  useEffect(() => {
    // Replace with actual data fetching
    const fetchAmenities = async () => {
      const data = [
        { id: 1, name: 'Gym', description: 'Community Gym', status: 'Available' },
        { id: 2, name: 'Pool', description: 'Swimming Pool', status: 'Under Maintenance' },
      ];
      setAmenities(data);
    };

    fetchAmenities();
  }, []);

  return (
    <div className="home">
      <h2>Dashboard</h2>
      <div className="amenities-list">
        {amenities.map(amenity => (
          <div key={amenity.id} className="amenity-card">
            <h3>{amenity.name}</h3>
            <p>{amenity.description}</p>
            <p>Status: <span className={amenity.status === 'Available' ? 'available' : 'unavailable'}>{amenity.status}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

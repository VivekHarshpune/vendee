import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '/Users/vivekharsh/communitybookvendee/src/components/contexts/AuthContext.js';
import profileService from '/Users/vivekharsh/communitybookvendee/src/components/services/profileService.js';
import './Profile.css';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        try {
          const data = await profileService.getProfile(user.id);
          setProfile(data);
        } catch (error) {
          console.error("Failed to fetch profile", error);
        }
      }
    };

    fetchProfile();
  }, [user]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="profile">
      <h2>Profile</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Address:</strong> {profile.address}</p>
      <p><strong>Phone:</strong> {profile.phone}</p>
    </div>
  );
};

export default Profile;

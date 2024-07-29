import React, { useState } from 'react';
import authService from '/Users/vivekharsh/communitybookvendee/src/components/services/authService.js';
import './Register.css';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await authService.register(user);
      alert("Registration successful");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

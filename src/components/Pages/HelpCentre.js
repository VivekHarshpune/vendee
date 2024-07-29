import React from 'react';

const HelpCentre = () => {
  return (
    <div>
      <h1>Help Centre</h1>
      <p>Find answers to common questions, access resources, and get support for using the CommunityBook platform.</p>
      
      <div className="help-resources">
        <h3>FAQs</h3>
        <p>Browse frequently asked questions to quickly find the information you need.</p>
        {/* Add FAQ component */}
        
        <h3>Contact Support</h3>
        <p>Need help? Contact our support team for assistance.</p>
        {/* Add contact form or support component */}
        
        <h3>Tutorials & Guides</h3>
        <p>Access tutorials and guides to make the most of the platform's features.</p>
        {/* Add tutorial links or guide components */}
      </div>
    </div>
  );
};

export default HelpCentre;

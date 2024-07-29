import React, { createContext, useState, useEffect } from 'react';
import authService from '/Users/vivekharsh/communitybookvendee/src/components/services/authService.js';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = await authService.getCurrentUser();
        setUser(userData);
      } catch (error) {
        console.error("Authentication check failed", error);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

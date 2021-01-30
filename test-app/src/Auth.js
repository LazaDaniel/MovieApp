import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { store } from './store'



export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    setCurrentUser(store.getState().is_logged_in) // Used to evaluate is_logged_in in a future version and redirect accordingly
    setPending(false)

  }, []);

  if (pending) {
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


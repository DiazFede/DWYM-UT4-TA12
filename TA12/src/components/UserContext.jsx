/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

// contexto del usuario
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('Usuario por defecto');

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

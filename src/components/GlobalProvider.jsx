import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  return (
    <GlobalContext.Provider value={{ lang,setLang }}>
      {children}
    </GlobalContext.Provider>
  );
};

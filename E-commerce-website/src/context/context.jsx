import React, { createContext, useContext, useState } from 'react';

// Creating a context
export const StateContext = createContext();

// A custom hook to use the context
export const useStateContext = () => useContext(StateContext);

// Provider component to wrap the app
export const StateProvider = ({ children }) => {
  const [switchh, setswitchh] = useState(false);

  return (
    <StateContext.Provider value={{ switchh , setswitchh }}>
      {children}
    </StateContext.Provider>
  );
};

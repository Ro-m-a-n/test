import { createContext, useState } from "react";

export const AppContext = createContext(null);
export const AppProvider = ({ children }) => {
  const [positions, setPositions] = useState();
  const [token, setToken] = useState();
  const value = { positions, setPositions, token, setToken };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

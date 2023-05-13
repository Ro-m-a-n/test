import { createContext, useState } from "react";

export const AppContext = createContext(null);
export const AppProvider = ({ children }) => {
  const [downloadedImage, setDownloadedImage] = useState(null);
  const value = { downloadedImage, setDownloadedImage };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

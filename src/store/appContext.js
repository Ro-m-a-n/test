import { createContext, useState } from "react";

export const AppContext = createContext(null);
export const AppProvider = ({ children }) => {
  const [positions, setPositions] = useState([]);
  const [token, setToken] = useState();
  const [urlLinks, setUrlLinks] = useState({ next_url: null });
  const [users, setUsers] = useState([]);
  const [sendedForm, setSendedForm] = useState(false);
  const [usersPageSettings, setUsersPageSettings] = useState({
    pageQuantity: 1,
    usersQuantity: 6,
  });

  const value = {
    positions,
    setPositions,
    token,
    setToken,
    users,
    setUsers,
    urlLinks,
    setUrlLinks,
    usersPageSettings,
    setUsersPageSettings,
    sendedForm,
    setSendedForm,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

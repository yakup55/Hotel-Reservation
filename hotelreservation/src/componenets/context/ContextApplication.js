import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUser] = useState([]);
  const [snacbar, SetSnacbar] = useState({
    isOpen: false,
    message: "Selam..",
    severity: "success",
  });
  const values = {
    isLogin,
    setIsLogin,
    snacbar,
    SetSnacbar,
    users,
    setUser,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
export default AppContext;

import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [loginCheck, setLoginCheck] = useState(false);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setLoginCheck(false);
  };

  const loginHandler = () => {
    
    localStorage.setItem("isLoggedIn", "1");
    setLoginCheck(true);
  };

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === '1'){
        setLoginCheck(true);
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: loginCheck,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

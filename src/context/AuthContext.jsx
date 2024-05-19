import { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, onUserStateChange } from '../api/firebase';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [userAuth, setUserAuth] = useState(null);

  useEffect(() => {
    onUserStateChange((user) => {
      setUserAuth(user);
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{ userAuth, uid: userAuth && userAuth.uid, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

import React, { useEffect } from 'react';
// import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { userObserver } from '../utils/firebase';

export const AuthContext = createContext();
//* with custom hook
// export const useAuthContext = () => {
//   return useContext(AuthContext)
// }

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    // setCurrentUser(JSON.parse(sessionStorage.getItem('user')));
    userObserver(setCurrentUser);
  }, []);

  return (
    <AuthContextProvider value={{ currentUser }}>
      {children}
    </AuthContextProvider>
  );
};

export default AuthContextProvider;
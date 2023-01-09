import {useContext,createContext} from 'react';
import {auth, googleProvider } from '../utils/firebase';

//!Create context for authentication data
const AuthContext = createContext();

//!Define a function to get data from Auth context
export function useAuth(){
    return useContext(AuthContext);
}

const AuthContextProvider = () => {
  const {currentUser, setCurrentUser} = useState()
    function signup()
  return 
    
}

export default AuthContextProvider;

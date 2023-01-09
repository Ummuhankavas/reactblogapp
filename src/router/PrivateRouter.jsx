import { Link, Route } from 'react-router-dom';
import {useAuth} from '../context/AuthContextProvider';




const PrivateRouter = (props) => {

  const {currentUser} = useAuth();
  return currentUser? (
    <Route path ={props.path} component= {props.component}/>
  ) : ( 
    <Link to ='/login' />
  );
};

export default PrivateRouter;
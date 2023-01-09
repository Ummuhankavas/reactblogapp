import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PrivateRouter from './PrivateRouter';

export const AppRouter = () => {
  return 
  <Router>
    <Navbar/>
    <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/' component={Dashboard}/>

        <PrivateRouter path='/profile' component={Profile}/>
        <PrivateRouter path='/new-blog' component={NewBlog}/>
        <PrivateRouter path='/update-blog' component={UpdateBlog}/>
        <PrivateRouter path='/detail' component={Detail}/>
    </Switch>
  </Router>
}

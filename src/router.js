import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PageNotFound from './pages/pageNotFound';
import Homepage from './pages/homepage';
import Enthusiasts from './pages/enthusiasts.jsx';
import Professionals from './pages/professionals.jsx';
import Search from './pages/search.jsx';
// import Login from './pages/login.jsx';
// import Signup from './pages/signup.jsx';
import Contact from './pages/contact.jsx';

// new Login and Signup
import Login from './components/auth/Login';
import Signup from './components/auth/Register';

// Private Routes
import PrivateRoute from './components/routing/PrivateRoute';


const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/enthusiasts' component={Enthusiasts} />
        <Route path='/professionals' component={Professionals} />
        <Route path='/search' component={Search} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/contact' component={Contact} />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </>
  );
};


export default Router;

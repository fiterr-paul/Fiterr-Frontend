import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PageNotFound from './pages/pageNotFound';
import Homepage from './pages/homepage';
import ProfileSetup from './components/profile/ProfileSetup'
import Enthusiasts from './pages/enthusiasts';
import Professionals from './pages/professionals';
import PrivatePage from './pages/private';
import Search from './pages/search';
import Login from './components/auth/Login';
import Signup from './components/auth/Register';
import Contact from './pages/contact';



// Private Routes
import PrivateRoute from './components/routing/PrivateRoute';


const Router = () => {
  return (
    <>
      <section className="body body">
        <div className="container">
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/create-profile' component={ProfileSetup}/>
            <PrivateRoute exact path = '/private' component={PrivatePage} />
            <Route path='/enthusiasts' component={Enthusiasts} />
            <Route path='/professionals' component={Professionals} />
            <Route path='/search' component={Search} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/contact' component={Contact} />
            <Route path='*' component={PageNotFound} />
          </Switch>
        </div>
      </section>
    </>
  );
};


export default Router;

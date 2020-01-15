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
import Newsfeed from './pages/newsfeed';
import Messages from './pages/messages';
import Profile from './pages/Profile';
import ProperProfile from './pages/properProfile';
// import Page from './pages/Page'

// this is the draft version of the real profile page
import draftProfile from './pages/draftProfile';

import ProfessionalCreate from './components/professional/ProfessionalCreate'
import PageCreate from './components/page/PageCreate'


// Private Routes
import PrivateRoute from './components/routing/PrivateRoute';


const Router = () => {
  return (
    <>
          <Switch>
            <Route exact path='/' component={Homepage} />
            {/* <PrivateRoute exact path = '/profile/:username' component={Profile} /> */}
            <PrivateRoute exact path = '/create-profile' component={ProfileSetup}/>
            <PrivateRoute exact path = '/newsfeed' component={Newsfeed}/>
            <PrivateRoute exact path = '/private' component={PrivatePage} />
            <PrivateRoute exact path = '/become-professional' component={ProfessionalCreate} />
            {/* <PrivateRoute exact path = '/page/:title' component={Page} /> */}
            <PrivateRoute exact path = '/page-create' component={PageCreate} />
            <Route exact path = '/messages' component={Messages} />
            <Route path='/enthusiasts' component={Enthusiasts} />

            <Route path='/draftprofile' component={draftProfile} />
            
            <Route path='/professionals' component={Professionals} />
            <Route path='/search' component={Search} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/contact' component={Contact} />
            {/* <Route path='/:username' component={Profile} /> */}
            <Route path='/:username' component={ProperProfile} />
            <Route path='*' component={PageNotFound} />
          </Switch>
    </>
  );
};


export default Router;

import React from 'react';
import './scss/app.scss';
import Router from './router';
import FooterUnauthenticated from './components/FooterUnauthenticated';

import Navbar from './components/layout/Navbar';

// Bringing in states
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import ProfileState from './context/profile/ProfileState'

function App() {
  return (
    <AlertState>
      <AuthState>
        <ProfileState>
          <div className="container-app">
            <Navbar />
            <Router />  
            <FooterUnauthenticated />
          </div>
        </ProfileState>
      </AuthState>
    </AlertState>
  )
}


export default App;

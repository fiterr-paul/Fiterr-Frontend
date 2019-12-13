import React from 'react';
import './scss/app.scss';
import Router from './router';
import FooterUnauthenticated from './components/FooterUnauthenticated';

import Navbar from './components/layout/Navbar';

// Bringing in states
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import ProfileState from './context/profile/ProfileState'
import SearchState from './context/search/SearchState'

function App() {
  return (
    <AlertState>
      <AuthState>
        <SearchState>
          <ProfileState>
            <div className="container-app">
              <Navbar />
              <Router />  
              <FooterUnauthenticated />
            </div>
          </ProfileState>
        </SearchState>
      </AuthState>
    </AlertState>
  )
}


export default App;

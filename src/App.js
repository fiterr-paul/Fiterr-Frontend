import React from 'react';
import './scss/app.scss';
import Router from './router';
import HeaderUnauthenticated from './components/headerUnauthenticated';
import HeaderAuthenticated from './components/headerAuthenticated';
import FooterUnauthenticated from './components/footerUnauthenticated';

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
            {/* <HeaderUnauthenticated /> */}
            <HeaderAuthenticated />
            <Router />  
            <FooterUnauthenticated />
          </div>
        </ProfileState>
      </AuthState>
    </AlertState>
  )
}


export default App;

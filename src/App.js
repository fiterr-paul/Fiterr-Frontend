import React from 'react';
import './scss/app.scss';
import Router from './router';
import HeaderUnauthenticated from './components/headerUnauthenticated';
import HeaderAuthenticated from './components/headerAuthenticated';
import FooterUnauthenticated from './components/footerUnauthenticated';

// Bringing in states
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';


function App() {
  return (
    <AlertState>
      <AuthState>
        <div className="container-app">
          <section className="header navbar">
            <div className="container">
              {/* <HeaderUnauthenticated /> */}
              <HeaderAuthenticated />
            </div>
          </section>
          <section className="body body">
            <div className="container">
              <Router />
            </div>
          </section>
          <section className="footer footer">
            <div className="container">
              <FooterUnauthenticated />
            </div>
          </section>
        </div>
      </AuthState>
    </AlertState>
  );
};


export default App;

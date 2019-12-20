import React from 'react';
import './scss/app.scss';
import './scss/jov.css';
import Router from './router';
import Footer from './components/layout/Footer';
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
              <Footer />
            </div>
          </ProfileState>
        </SearchState>
      </AuthState>
    </AlertState>
  )
}


export default App;

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
import PostState from './context/post/PostState';
import IsUserProfessional from './components/professional/isProfessional'

function App() {
  return (
    <AlertState>
      <AuthState>
        <SearchState>
          <ProfileState>
            <PostState>
              <div className="container-app">
                <Navbar />
                {/* <IsUserProfessional /> */}
                <Router />  
                <Footer />
              </div>
            </PostState>
          </ProfileState>
        </SearchState>
      </AuthState>
    </AlertState>
  )
}


export default App;

import React from 'react';
import './scss/app.scss';
import Router from './router';
import HeaderUnauthenticated from './components/headerUnauthenticated';
import HeaderAuthenticated from './components/headerAuthenticated';
import FooterUnauthenticated from './components/footerUnauthenticated';


function App() {
  return (
    <div className="container-app">
      {/* <HeaderUnauthenticated /> */}
      <HeaderAuthenticated />
      <Router />  
      <FooterUnauthenticated />
    </div>
  );
};


export default App;

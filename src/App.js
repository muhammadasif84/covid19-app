import React from 'react';
import './App.css';
import NavTabs from './components/InfoPanel';
import AppBarCovid19 from './components/AppBar';

function App() {
  return (
    <div>
      <AppBarCovid19 />
      <NavTabs />
      <h6 className="h6">
        <a href="http://www.piaic.org">
          Student@PIAIC.ORG
        </a>
      </h6>
    </div>
  );
}

export default App;
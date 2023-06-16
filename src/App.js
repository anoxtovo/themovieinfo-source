import React from 'react';
import './App.css';

// Components
import NavBar from './components/NavBar/NavBar';
import SearchMovies from './components/SearchMovies/SearchMovies';
import SiteFooter from './components/SiteFooter/SiteFooter';

function App() {
  return (
    <div className="App">
          <NavBar />
      <div className="container">
        <h1 className='siteTitle'>The Movie Info Site</h1>
        <SearchMovies />
      </div>
      <SiteFooter />
    </div>
  );
}

export default App;

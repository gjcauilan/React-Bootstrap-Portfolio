import React from 'react';
import './App.css';

import HeaderNavBar from './components/Header';
import HeroSection from './components/Hero';
import AboutMe from './components/About';
import MyProjects from './components/Projects';
import ContactMe from './components/Contact';
import FooterNavBar from './components/Footer';

function App () {
  return (
    <div className="App">
      <HeaderNavBar />
      <HeroSection />
      <AboutMe />
      <MyProjects />
      <ContactMe />
      <FooterNavBar />
    </div>
  );
}

export default App;

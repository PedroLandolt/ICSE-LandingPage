import React from 'react';
import './App.css';
import Navbar from './components/pages/Navbar';
import Banner from './components/pages/Banner';
import SoftwareSection from './components/pages/SoftwareSection';
import VenueSection from './components/pages/VenueSection';
import KeynotesSection from './components/pages/KeynotesSection';
import SponsorsSection from './components/pages/SponsorsSection';
import Footer from './components/pages/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Banner />
          <SoftwareSection />
          <VenueSection />
          <KeynotesSection />
          <SponsorsSection />
          <Footer />
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
    </>
  );
}

export default App;

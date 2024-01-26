import React from 'react';
import './App.css';
import Navbar from './components/pages/Navbar';
import Banner from './components/pages/Banner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Banner />
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
    </>
  );
}

export default App;

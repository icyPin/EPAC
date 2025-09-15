
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Event from './pages/event.jsx';
import ScrollTopButton from './components/ScrollTopButton.jsx';
import Home from './pages/Home.jsx'
import './App.css';

function App() {
  return ( 
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Event />} />
          </Routes>
        <ScrollTopButton /> 
    </Router>
  );
}

export default App;

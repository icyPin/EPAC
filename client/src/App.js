
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Event from './pages/event.jsx';
import Team from './components/Team.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ScrollTopButton from './components/ScrollTopButton.jsx';
import './App.css';
// import events from './pages/events.jsx';

const Home = () => (
  <>
    <Hero />
    <About />
    <Team />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="antialiased">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Event />} />
          </Routes>
        </main>
        <Footer />
        <ScrollTopButton />
      </div>
    </Router>
  );
}

export default App;

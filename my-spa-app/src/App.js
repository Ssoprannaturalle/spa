import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Blog from './pages/Blog';
import MyDogs from './pages/MyDogs';
import Zodiac from './pages/zodiac';
import DogRegistrationForm from './pages/DogRegistrationForm';
import Footer from './components/Footery';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'App dark-mode' : 'App'}>
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/mydogs" element={<MyDogs />} />
            <Route path="/zodiac" element={<Zodiac />} />
            <Route path="/dogregistrationform" element={<DogRegistrationForm />}   />
          </Routes>
        </div>
        <Footer darkMode={darkMode}  />
      </div>
    </Router>
  );
}

export default App;
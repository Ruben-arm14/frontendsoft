import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Nuevo componente de página principal
import Login from './pages/Login';
import Layout from './components/Layout';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/inicio" element={<Layout><HomePage /></Layout>} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;

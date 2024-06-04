import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register'; // Nuevo componente de página principal
import Login from './pages/Login';
import Busqueda from './pages/Busqueda';
import Layout from './components/Layout';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/busqueda" element={<Layout><Busqueda /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

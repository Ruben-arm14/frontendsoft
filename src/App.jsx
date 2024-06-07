import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Busqueda from './pages/Busqueda';
import Register from './pages/Register';
import Perfil from './components/Perfil';
import Resultados from './pages/Resultados';
import './styles/App.css';
import investigaciones from './data/db.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    area: [],
    curso: [],
  });

  const handleFilterChange = (filterType, filterValue) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(filterValue)
        ? prevFilters[filterType].filter(item => item !== filterValue)
        : [...prevFilters[filterType], filterValue]
    }));
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/busqueda" element={
            <Busqueda
              investigaciones={investigaciones.investigaciones} 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedFilters={selectedFilters}
              handleFilterChange={handleFilterChange}
            />
          } />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/resultados" element={
            <Resultados />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

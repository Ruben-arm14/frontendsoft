import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register'; // Nuevo componente de página principal
import Login from './pages/Login';
import Busqueda from './pages/Busqueda';
import Layout from './components/Layout';
import './styles/App.css';

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
            <Layout>
              <Busqueda
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedFilters={selectedFilters}
                handleFilterChange={handleFilterChange}
              />
            </Layout>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

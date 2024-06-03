import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation';
import UserPage from './pages/UserPage';
import ProfessorPage from './pages/ProfessorPage';
import SearchPage from './pages/SearchPage';
import Login from './pages/Login';
import ResultsPage from './pages/ResultsPage';
import Layout from './components/Layout';
import investigaciones from './data';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    area: [],
    period: [],
  });
  const [savedWorks, setSavedWorks] = useState([]);

  const handleFilterChange = (filterType, filterValue) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(filterValue)
        ? prevFilters[filterType].filter(item => item !== filterValue)
        : [...prevFilters[filterType], filterValue]
    }));
  };

  const handleDeleteSavedWork = (workId) => {
    setSavedWorks(prevSavedWorks => prevSavedWorks.filter(work => work.id !== workId));
  };

  const filteredInvestigaciones = investigaciones.filter(inv => {
    const titleMatch = inv.title.toLowerCase().includes(searchTerm.toLowerCase());
    const areaMatch = selectedFilters.area.length === 0 || selectedFilters.area.includes(inv.area);
    const periodMatch = selectedFilters.period.length === 0 || selectedFilters.period.includes(inv.period);
    return titleMatch && areaMatch && periodMatch;
  });

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} /> {/* Login sin header */}
          <Route path="/resultados" element={
            <Layout>
              <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
              <Navigation /> 
              <ResultsPage 
                filteredInvestigaciones={filteredInvestigaciones}
                searchTerm={searchTerm}
                selectedFilters={selectedFilters}
                handleFilterChange={handleFilterChange} 
              /> 
            </Layout>
          } />
          <Route path="/usuario" element={
            <Layout>
              <UserPage 
                savedWorks={savedWorks}
                onDeleteSavedWork={handleDeleteSavedWork}
                investigaciones={investigaciones}
                selectedFilters={selectedFilters} 
                handleFilterChange={handleFilterChange} 
              />
            </Layout>
          } />
          <Route path="/profesor" element={
            <Layout>
              <ProfessorPage
                investigaciones={investigaciones}
                onDeleteSavedWork={handleDeleteSavedWork} 
              />
            </Layout>
          } />
          <Route path="/busqueda" element={
            <Layout>
              <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
              <Navigation /> 
              <SearchPage
                filteredInvestigaciones={filteredInvestigaciones}
                searchTerm={searchTerm}
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

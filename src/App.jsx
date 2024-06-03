import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation'; 
import UserPage from './pages/UserPage';
import ProfessorPage from './pages/ProfessorPage';
import SearchPage from './pages/SearchPage';
import Login from './components/Login';
import Layout from './components/Layout';
import ResultsPage from './pages/ResultsPage';
import investigaciones from './data';
import './App.css';

function App() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    area: [],
    period: []
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
        {location.pathname !== '/' && <Header />}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route 
            path="/resultados" 
            element={
              <Layout>
                <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
                <Navigation />
                <ResultsPage
                  filteredInvestigaciones={filteredInvestigaciones}
                  searchTerm={searchTerm}
                  selectedFilters={selectedFilters}
                  handleFilterChange={handleFilterChange}
                />
              </Layout> // Etiqueta de cierre </Layout> agregada
            } 
          />
          <Route
            path="/usuario"
            element={
              <Layout> {/* Etiqueta de apertura <Layout> agregada */}
                <UserPage
                  savedWorks={savedWorks}
                  onDeleteSavedWork={handleDeleteSavedWork}
                  investigaciones={investigaciones}
                  selectedFilters={selectedFilters}
                  handleFilterChange={handleFilterChange}
                />
              </Layout> /* Etiqueta de cierre </Layout> agregada */
            }
          />
          <Route
            path="/profesor"
            element={
              <Layout> {/* Etiqueta de apertura <Layout> agregada */}
                <ProfessorPage
                  investigaciones={investigaciones}
                  onDeleteSavedWork={handleDeleteSavedWork} 
                />
              </Layout> /* Etiqueta de cierre </Layout> agregada */
            }
          />
          <Route 
            path="/busqueda" 
            element={
              <Layout>
                <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
                <Navigation /> 
                <SearchPage
                  filteredInvestigaciones={filteredInvestigaciones}
                  searchTerm={searchTerm}
                  selectedFilters={selectedFilters}
                  handleFilterChange={handleFilterChange} 
                />
              </Layout> /* Etiqueta de cierre </Layout> agregada */
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

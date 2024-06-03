import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation';
import ResultsPage from './pages/ResultsPage';
import UserPage from './pages/UserPage';
import ProfessorPage from './pages/ProfessorPage';
import SearchPage from './pages/SearchPage';
import Login from './components/Login';
import investigaciones from './data';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    area: [],
    period: []
  });

  const [savedWorks, setSavedWorks] = useState([]);

  const handleFilterChange = (filterType, filterValue) => {
    setSelectedFilters(prevFilters => {
      const updatedFilters = { ...prevFilters };
      if (filterType === 'area') {
        updatedFilters.area = updatedFilters.area.includes(filterValue)
          ? updatedFilters.area.filter(item => item !== filterValue)
          : [...updatedFilters.area, filterValue];
      } else if (filterType === 'period') {
        updatedFilters.period = updatedFilters.period.includes(filterValue)
          ? updatedFilters.period.filter(item => item !== filterValue)
          : [...updatedFilters.period, filterValue];
      }
      return updatedFilters;
    });
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
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/resultados" element={
            <div className="app-container">
              <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
              <Navigation />
              <ResultsPage 
                filteredInvestigaciones={filteredInvestigaciones}
                searchTerm={searchTerm}
                selectedFilters={selectedFilters}
                handleFilterChange={handleFilterChange} 
              /> 
            </div>
          } />
          <Route path="/usuario" element={
            <div className="app-container">
              <Header />
              <UserPage
                savedWorks={savedWorks}
                onDeleteSavedWork={handleDeleteSavedWork}
                investigaciones={investigaciones}
                selectedFilters={selectedFilters} 
                handleFilterChange={handleFilterChange} 
              />
            </div>
          } />
          <Route path="/profesor" element={
            <div className="app-container">
              <Header />
              <ProfessorPage
                investigaciones={investigaciones}
                onDeleteSavedWork={handleDeleteSavedWork} 
              />
            </div>
          } />
          <Route path="/busqueda" element={ // Nueva ruta para SearchPage
            <div className="app-container">
              <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
              <Navigation />
              <SearchPage
                filteredInvestigaciones={filteredInvestigaciones}
                searchTerm={searchTerm}
                selectedFilters={selectedFilters}
                handleFilterChange={handleFilterChange} 
              />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

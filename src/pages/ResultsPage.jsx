import React from 'react';
import FilterSection from '../components/FilterSection';
import ResultsList from '../components/ResultsList';
import './SearchPage.css';

function ResultsPage({ filteredInvestigaciones, searchTerm, selectedFilters, handleFilterChange }) { 

  return (
    <div className="content">
      <ResultsList investigaciones={filteredInvestigaciones} />
      <div>
        <FilterSection selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />
      </div>
    </div>
  );
}
export default ResultsPage;
import React, { useState, useEffect } from 'react';
import Contents from './WemapApi';
import Search from './Components/Search/Search';
import "./App.css"
import Content from './Components/Content/Content';

const App = () => {
  const [content, setContent] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const offset = (currentPage - 1) * 10;
      const paginatedContent = await Contents(searchQuery, offset, 10);
      setContent(paginatedContent);
    };
    fetchData();
  }, [searchQuery, currentPage]);

  const handlePagination = (increment) => {
    if (increment) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); 
  };

  return (
<>     
<div className="header">
        <img src="/src/assets/wemap.svg" className="svg-icon" />
        <h1 className="title">Les derniers pinpoints de Wemap</h1>
      </div>
      
      <div className="search-bar">
        <Search handleSearch={handleSearch} />
      </div>
      <Content content={content} />
      <div className="pagination">
        <button
          onClick={() => handlePagination(false)}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        <span className="page-number">{currentPage}</span>
        <button
          onClick={() => handlePagination(true)}
          disabled={content.length === 0}
        >
          {">"}
        </button>
      </div>
      </> 
  );
};

export default App;
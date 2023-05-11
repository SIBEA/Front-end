import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../header/header.js'
import ProjectContent from '../pages/project-content.js';
import Results from '../pages/search-results.js';
import Search from '../pages/search.js';

function Main() {

  return (
    <div>
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <hr></hr>
        <Routes>
          <Route index path="/" element={<Search />} />
          <Route path="/search" element={<Results />} />
          <Route path="/project-content" element={<ProjectContent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
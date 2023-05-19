import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../header/header.js'
import ProjectContent from '../pages/project-content.js';
import GroupContent from '../pages/group-content.js';
import ResearcherContent from '../pages/researcher-content.js';
import Results from '../pages/search-results.js';
import Search from '../pages/search.js';

function Main() {

  return (
    <div>
       <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossOrigin=""/>
      <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossOrigin=""></script>
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <hr></hr>
        <Routes>
          <Route index path="/" element={<Search />} />
          <Route path="/search" element={<Results />} />
          <Route path="/project-content" element={<ProjectContent />} />
          <Route path="/group-content" element={<GroupContent />} />
          <Route path="/researcher-content" element={<ResearcherContent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
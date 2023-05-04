import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../header/header.js'
import Content from '../pages/result-content.js';
import Results from '../pages/search-results.js';
import Search from '../pages/search.js';
import Profile from '../pages/profile.js';

function Main() {

    return (
        <div>
          <BrowserRouter>
            <header>
              <Header />
            </header>
            <hr></hr>
            <body>
              <Routes>
                <Route index path="/" element={<Results />} />
                <Route path="/search" element={<Results />} />
                <Route path="/content" element={<Content />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
              
            </body>
          </BrowserRouter>
        </div>
      );
}

export default Main;
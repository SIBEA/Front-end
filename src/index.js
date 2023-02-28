import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Content from './content/content';
import Search from './main_search/search';
import Profile from './profile/profile';
import Results from './results_list/results';
import Group from './investigation_group/group'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Search />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

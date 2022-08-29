import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/NavBar';
import NavBar from './components/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>
);

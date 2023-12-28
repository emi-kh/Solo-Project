import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import './css/style.css';


const root = createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
); 


// Also works, solution from Charlie:
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('line 9 index.js: ', document.querySelector('body'));
//     const root = createRoot(document.querySelector('#root'));
//     root.render(<App />,); 
// });

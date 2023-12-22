import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Components/App.jsx';


console.log('line 6 index.js: ', document.querySelector('#root'));
const root = createRoot(document.querySelector('#root'));
root.render(<App />,); 


// Also works, solution from Charlie:
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('line 9 index.js: ', document.querySelector('body'));
//     const root = createRoot(document.querySelector('#root'));
//     root.render(<App />,); 
// });

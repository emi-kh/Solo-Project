import React from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';

import App from './App.jsx';
import './css/style.css';
import Homepage from './pages/homepage.jsx';
import Create from './components/create.jsx';
import SplashPage from './pages/splash.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<SplashPage />}>
      <Route path='/home' element={< Homepage />} />
      <Route path='/upload' element={<Create />} action={uploadAction}/>
    </Route>

  )
);

const root = createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
); 


// Also works, solution from Charlie:
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('line 9 index.js: ', document.querySelector('body'));
//     const root = createRoot(document.querySelector('#root'));
//     root.render(<App />,); 
// });

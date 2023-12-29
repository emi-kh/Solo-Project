import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes} from 'react-router-dom';

import App from './App.jsx';
import './css/style.css';
import Homepage from './pages/homepage.jsx';
import Create from './components/create.jsx';
import SplashPage from './pages/splash.jsx';
import LoginPage from './components/login.jsx';
// import SplashPage from './pages/splash.jsx';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path='/' element={loggedIn ? <Homepage/> : <SplashPage />} />
//       <Route path='/login' element={<LoginPage />} />

//       {/* <Route path='/upload' element={<Create />} action={uploadAction}/> */}
//     </>
//   )
// );

// const root = createRoot(document.querySelector('#root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// ); 

const root = createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
); 

// Also works, solution from Charlie:
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('line 9 index.js: ', document.querySelector('body'));
//     const root = createRoot(document.querySelector('#root'));
//     root.render(<App />,); 
// });


//Rick's approach. need redux and custom login function

//const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Routes>
  //       <Route path='/' element={loggedIn ? <Homepage/> : <SplashPage />} />
  //       <Route path='/login' element={<LoginPage />} />
  
  //       <Route path='/home' element={
  //         <ProtectedRoute>
  //           <Homepage />
  //         </ProtectedRoute>
  //       } />
  //       {/* <Route path='/upload' element={<Create />} action={uploadAction}/> */}
  //     </Routes>
  //   )
  // );
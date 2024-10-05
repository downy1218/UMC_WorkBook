import Poster from './Components/Poster';
import React, { useState } from "react";
import Nav from './Components/Nav';
import {  Route, Link, Routes, BrowserRouter, useNavigate } from 'react-router-dom';
import LoginPage from './Pages/Login.js';
import RegisterPage from './Pages/Register.js';
import RootLayout from './layout/root-layout.js';
import SearchPage from './Pages/Search.js';
import SearchMoviePage from './Pages/SearchMovie.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route index element={<Poster />}></Route>
            <Route path='login' element={<LoginPage />}></Route>
            <Route path='register' element={<RegisterPage />}></Route>
            <Route path='search' element={<SearchPage/>}></Route>
            <Route path='searchMovie' element={<SearchMoviePage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      

    </>
  )
};

export default App;

import './App.css';
import React, {useEffect, useState} from 'react';
import Form from "./components/Form"
import {Routes, Route} from 'react-router-dom';
import SingleUserPage from './pages/SingleUserPage';
import UsersPage from './pages/UsersPage';
import Nav from './components/Nav';

export default function App() {

  return (
    <div>
      <Nav />
      <Routes>
      <Route path="/" element={<UsersPage />}>
         </Route>
      <Route path="/add-user" element={<Form />}>
       </Route>
       <Route path="/:id" element={<SingleUserPage />}>

       </Route>
    </Routes>
    </div>
    
  )
    

  }

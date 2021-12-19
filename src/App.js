import './App.css';
import React, {useEffect, useState} from 'react';
import Form from "./components/Form"
import {Link} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import SingleUserPage from './pages/SingleUserPage';
import UsersPage from './pages/UsersPage';

export default function App() {

  return (
    <div>
      <nav className="nav-bar">
        <Link className="nav-link" to="/">Users list</Link>
        <Link className="nav-link" to="/add-user">Add a new user</Link>
      </nav>
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

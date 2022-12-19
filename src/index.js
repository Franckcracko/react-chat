import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar/NavBar';
import DB from './firebase';
import Chat from './components/Chat/Chat';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Memories from './components/Memories/Memories';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <NavBar DB={DB} />
    <Routes>
      <Route path='/recuerdos' element={<Memories />} />
      <Route path='/chats' element={<Chat DB={DB} />} />
    </Routes>
  </BrowserRouter>
);

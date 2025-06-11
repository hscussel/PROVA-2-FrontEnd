import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Contatos from './components/Contatos'
import Inicio from './components/Inicio'

function App() {
  return (
    <div>
       <header>
       <h1>ConnectBook</h1>
      <nav>
        <ul>
        <li ><Link to='/inicio'>Início</Link></li>
        <li><Link to='/contatos'>Contatos</Link></li>
        </ul>
      </nav>
    </header>
      <Routes>
        <Route path='/inicio' element={<Inicio />} />
          <Route path='/contatos' element={<Contatos />} />
      </Routes>
    </div>
  );
}

export default App;
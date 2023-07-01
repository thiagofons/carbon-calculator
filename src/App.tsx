import React from 'react';
import './App.css';

import NavBar from './components/layout/NavBar';
import Home from './pages/Home';
import Container from './components/layout/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Container>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

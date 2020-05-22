import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './global.css';

//PAGES
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
    </BrowserRouter>
  );
}

export default App;

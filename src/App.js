import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './global.css';

//PAGES
import Home from './pages/Home'
import FindJob from './pages/FindJob'
import FindCompani from './pages/FindCompani'
import FindFreelancer from './pages/FindFreelancer'

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route exact path='/findjob' component={FindJob} />
      <Route exact path='/findcompani' component={FindCompani} />
      <Route exact path='/findfreelancer' component={FindFreelancer} />
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './global.css';

//PAGES
import Home from './pages/Home'
import FindJob from './pages/FindJob'
import FindCompani from './pages/FindCompani'
import FindFreelancer from './pages/FindFreelancer'
import HomeDashboard from './pages/HomeDashboard'
import Bookmarks from './pages/Bookmarks'
import Reviews from './pages/Reviews'
import ManagerJob from './pages/ManagerJob'
import ManagerCandidates from './pages/ManagerCandidates'
import PostJob from './pages/PostJob'
import MyApplications from './pages/MyApplications'
import Settings from './pages/Settings'

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route exact path='/findjob' component={FindJob} />
      <Route exact path='/findcompani' component={FindCompani} />
      <Route exact path='/findfreelancer' component={FindFreelancer} />
      <Route exact path='/homedashboard' component={HomeDashboard} />
      <Route exact path='/bookmarks' component={Bookmarks} />
      <Route exact path='/reviews' component={Reviews} />
      <Route exact path='/managerjob' component={ManagerJob} />
      <Route exact path='/managercandidates' component={ManagerCandidates} />
      <Route exact path='/postjob' component={PostJob} />
      <Route exact path='/myapplications' component={MyApplications} />
      <Route exact path='/settings' component={Settings} />
    </BrowserRouter>
  );
}

export default App;

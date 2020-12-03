import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './style.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Details from './pages/Details';
import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';

ReactDOM.render(
  <React.StrictMode>
    <Header />

    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/about' >
          <About />
        </Route>

        <Route path='/search/:search' >
          <Search />
        </Route>

        <Route path='/detail/:what/:id' >
          <Details />
        </Route>
      </Switch>
    </Router>

    <Footer />
    
  </React.StrictMode>,
  document.getElementById('root')
);

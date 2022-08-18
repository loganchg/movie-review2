import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Movies from './components/pages/Movies';
import Addmovies from './components/pages/Addmovies';
import SignUp from './components/pages/SignUp';




function App() {
  return (
    <>
      <Router>
        <Navbar />
  
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/movies' component={Movies} /> 
          <Route path='/addmovies' component={Addmovies} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    
      
    </>
    
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Movies from './components/pages/Movies';
// import Addmovies from './components/pages/Addmovies';
import SignUp from './components/pages/SignUp';
import Blackpanther from './components/pages/Blackpanther';
import Avengers from './components/pages/Avengers';
import Uncharted from './components/pages/Uncharted';
import Msmarvel from './components/pages/Msmarvel';
import Nttd from './components/pages/Nttd';
import Login from './components/pages/Login'
import Welcome from './components/pages/Welcome'


function App() {


  return (
    <>
      <Router>
        <Navbar />
  
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/welcome' component={Welcome} />
          <Route path='/login' component={Login}/>
          <Route path='/sign-up' component={SignUp} />
          <Route path='/blackpanther' component={Blackpanther} />
          <Route path='/avengers' component={Avengers} />
          <Route path='/uncharted' component={Uncharted} />
          <Route path='/msmarvel' component={Msmarvel} />
          <Route path='/nttd' component={Nttd} />

        </Switch>
      </Router>
    
      
    </>
    
  );
}

export default App;

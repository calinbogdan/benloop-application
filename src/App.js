import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Container from './components/Container';
import Navbar from './components/Navbar';

import Main from './components/pages/Main';
import Contact from './components/pages/Contact';

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div>

          <Navbar />
          
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/contact" component={Contact}/>
          </Switch>    
          
        </div>          
      </BrowserRouter>  
      
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Container from './components/Container';
import NavigationBar from './components/NavigationBar';

import Main from './components/pages/Main';
import Contact from './components/pages/Contact';

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div>
          <NavigationBar />          
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

import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Container from './components/Container';

import Main from './components/pages/Main';
import Contact from './components/pages/Contact';

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div>

          {/* navbar */}
          <div className="navbar">
            <Container>
              <div className="brand">
                CALIN BOGDAN
              </div>
              {/* links */}
              <div>
                JOB HISTORY
              </div>
              <div>
                CONTACT
              </div>
            </Container>
          </div>
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

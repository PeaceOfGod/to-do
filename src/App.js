import React, { Component } from 'react';
import { BoxComponent } from './components/BoxComponent';
import { Screen } from './components/Screen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render (){
    return (
      <div className="main-screen">
        <React.Fragment>
          <Router>
            <Switch>
              <Route path="/" component={Screen}></Route>
              <Route path="/component" component={BoxComponent}></Route>
            </Switch>
          </Router>
        </React.Fragment>
      </div>
      
    )
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from './components/HomeComponent';
import Navbar from './components/Navbar';

class App extends Component {

  homeComponent = (props) => (
    <HomeComponent {...props} />
  )

  render() {

    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" render={this.homeComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

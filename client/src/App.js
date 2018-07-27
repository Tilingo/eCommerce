import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from './components/HomeComponent';
import Navbar from './components/Navbar';
import SingleProduct from './components/SingleProduct';

class App extends Component {

  homeComponent = (props) => (
    <HomeComponent {...props} />
  )

  singleProductComponent = (props) => (
    <SingleProduct {...props} />
  )

  render() {

    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" render={this.homeComponent} />
            <Route path="/products/:id" render={this.singleProductComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

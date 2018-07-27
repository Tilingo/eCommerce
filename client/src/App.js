import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from './components/HomeComponent';
import Navbar from './components/Navbar';
import SingleProduct from './components/SingleProduct';
import axios from 'axios'

class App extends Component {

  state = {
    cart: [],
    isOpen: false
  }

  homeComponent = (props) => (
    <HomeComponent {...props} />
  )

  checkOrderStatus = async () => {
    const res = await axios.get()
  }

  // addToCart = async () => {

  //   try {
  //     // const res

  //   } catch (err) {
  //     console.error(err)
  //   }

  // }



  singleProductComponent = (props) => (
    <SingleProduct
      addToCart={this.addToCart}
      {...props} />
  )

  componentDidMount() {
    this.checkOrderStatus()
  }

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

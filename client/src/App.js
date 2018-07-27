import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from './components/HomeComponent';
import Navbar from './components/Navbar';
import SingleProduct from './components/SingleProduct';
import axios from 'axios'

class App extends Component {

  state = {
    cart: [],
    order: {
      orderId: 0,
      active: false
    }
  }

  homeComponent = (props) => (
    <HomeComponent {...props} />
  )

  checkOrderStatus = async () => {
    const res = await axios.get('/api/orders/last')

    this.setState({
      order: {
        orderId: res.data.id,
        active: res.data.active
      }
    })
  }

  addToCart = async (product_id) => {
    const order_id = this.state.order.orderId

    if (this.state.order.active) {
      try {
        const res = await axios.post(`/api/products/${product_id}/line_items?order_id=${order_id}`)
        console.log(res)
      } catch (err) {
        console.error(err)
      }
    }
    else {
      try {
        const res = await axios.post(`/api/orders?product_id=${product_id}`)
        console.log(res)
      } catch (err) {
        console.error(err)
      }
    }

  }

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
          <Navbar
            orderId={this.state.order.orderId} />
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

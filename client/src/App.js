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
    try {
      const order = await axios.get('/api/orders/last')
      const order_id = order.data.id

      const cart = await axios.get(`/api/orders/${order_id}/line_items`)

      const newState = {
        cart: cart.data,
        order: {
          orderId: order.data.id,
          active: order.data.active
        }
      }

      return newState

    } catch (err) {
      console.error(err)
    }
  }

  addToCart = async (product_id, name) => {
    const order_id = this.state.order.orderId
    const item = this.state.cart.find(obj => {
      return obj.name === name
    })

    if (this.state.order.active) {
      if (item == undefined) {
        try {
          const res = await axios.post(`/api/products/${product_id}/line_items?order_id=${order_id}`)
          console.log(res)
        } catch (err) {
          console.error(err)
        }
      }
      else {
        try {
          let qty = item.qty + 1
          const payload = { qty }

          const res = await axios.patch(`/api/orders/${order_id}/line_items/${item.id}`, payload)
          console.log(res)

          const newState = await this.checkOrderStatus()
          this.setState({ ...newState })

        } catch (err) {
          console.error(err)
        }
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

  componentDidMount = async () => {
    const newState = await this.checkOrderStatus()
    this.setState({ ...newState })
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
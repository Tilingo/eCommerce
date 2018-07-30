import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Cart from './Cart'
import StyledNavbar from './styles/StyledNavbar';
import NavButtonsWrap from './styles/NavButtonsWrap';
import ProductList from './DropDown';
import axios from 'axios'

class Navbar extends Component {

    state ={
        products: []
    }

    fetchProducts = async () => {
        try {
            const res = await axios.get(`/api/products`)
            this.setState({ products: res.data })
        } catch (err) {
            console.error(err)
        }
    }

    componentDidMount(){
        this.fetchProducts()
        console.log("NAVBAR mounted")
    }
    
    render() {
        console.log("NAVBAR updated")
        return (
            <StyledNavbar>

                <h1>Boomerang Barrier</h1>

                <NavButtonsWrap>
                    <Link to="/">HOME</Link>
                    <ProductList
                    products={this.state.products} />
                    <Cart
                        orderId={this.props.orderId} />
                </NavButtonsWrap>

            </StyledNavbar>
        )
    }
}

export default Navbar
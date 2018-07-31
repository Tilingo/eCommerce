import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Cart from './Cart'
import StyledNavbar from './styles/StyledNavbar';
import NavButtonsWrap from './styles/NavButtonsWrap';
import ProductList from './DropDown';
import axios from 'axios'
import { FontAwesomeIcon, faStore } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {

    state = {
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

    componentDidMount() {
        this.fetchProducts()

    }

    render() {

        const home = <FontAwesomeIcon icon={faHome} size="2x" />

        return (
            <StyledNavbar>

                <h1>Boomerang Barrier</h1>

                <NavButtonsWrap>
                    <Link to="/">{home}</Link>
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
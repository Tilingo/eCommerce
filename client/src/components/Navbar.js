import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Cart from './Cart'

class Navbar extends Component {
    render() {

        return (
            <div>
                <Link to="/">HOME</Link>
                <h3>Store Name</h3>
                <Cart />
            </div>
        )
    }
}

export default Navbar
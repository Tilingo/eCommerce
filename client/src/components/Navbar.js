import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
    render() {

    const cart = <FontAwesomeIcon icon={faShoppingCart} size="2x"/>

        return (
            <div>
                <Link to="/">HOME</Link>
                <h3>Store Name</h3>
                <button>{cart}</button>
            </div>
        )
    }
}

export default Navbar
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import StyledDropDown from './styles/DropDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore } from '@fortawesome/free-solid-svg-icons'

class ProductList extends Component {

    render() {

        const store = <FontAwesomeIcon icon={faStore} size="2x" />

        const products = this.props.products.map((product) => {
            return (
                <Link key={product.id} to={`/products/${product.id}`}>{product.name}</Link>
            )
        })

        console.log("DROPDOWN updated")
        return (
            <StyledDropDown>
                <button>{store}</button>
                <div>
                    {products}
                </div>
            </StyledDropDown>
        )
    }
}

export default ProductList
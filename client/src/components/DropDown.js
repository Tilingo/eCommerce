import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import StyledDropDown from './styles/DropDown';

// import { friendOptions } from '../common'

class ProductList extends Component {

    state ={
        products: []
    }


    componentDidMount() {
        // this.setState({
        //     products: this.props.products
        // })
        console.log('DROPDOWN mounted')
    }

    render() {

        const products = this.props.products.map((product) => {
            return (
                <Link key={product.id} to={`/products/${product.id}`}>{product.name}</Link>
            )
        })

        console.log("DROPDOWN updated")
        return (
            <StyledDropDown>
                <button>PRODUCTS</button>
                <div>
                    {products}
                </div>
            </StyledDropDown>
        )
    }
}

export default ProductList
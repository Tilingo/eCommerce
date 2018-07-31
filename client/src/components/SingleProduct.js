import React, { Component } from 'react'
import axios from 'axios'
import StyledSingleProduct from './styles/StyledSingleProduct';

class SingleProduct extends Component {

    state = {
        name: '',
        img: '',
        description: '',
        price: 0
    }

    fetchProduct = async () => {
        try {
            const res = await axios.get(`/api/products/${this.props.match.params.id}`)

            await this.setState({
                name: res.data.name,
                img: res.data.photo_url,
                description: res.data.description,
                price: res.data.price
            })
        }
        catch (err) {
            console.error(err)
        }
    }

    componentDidMount() {
        this.fetchProduct()
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.fetchProduct()
        }
    }

    render() {

        return (
            <StyledSingleProduct>

                <img src={this.state.img} alt={this.state.name} />

                <div>
                    <h1>{this.state.name}</h1>
                    <p>{this.state.description}</p>
                    <h2>$ {this.state.price}</h2>
                    <button onClick={() => this.props.addToCart(this.props.match.params.id, this.state.name)} className="link" >
                        Add to Cart
                    </button>
                </div>

            </StyledSingleProduct>
        );
    }
}

export default SingleProduct;
import React, { Component } from 'react'
import axios from 'axios'

class SingleProduct extends Component {

    state = {
        name: '',
        img: '',
        description: ''
    }

    fetchProduct = async () => {
        try {
            const res = await axios.get(`/api/products/${this.props.match.params.id}`)

            await this.setState({
                name: res.data.name,
                img: res.data.photo_url,
                description: res.data.description
            })
        }
        catch (err) {
            console.error(err)
        }
    }

    componentDidMount() {
        this.fetchProduct()
    }

    render() {

        return (
            <div>
                <img src={this.state.img} alt={this.state.name} />
                <div>
                    <h1>{this.state.name}</h1>
                    <p>{this.state.description}</p>
                    <button onClick={() => this.props.addToCart(this.props.match.params.id, this.state.name)} >Add to Cart</button>
                </div>
            </div>
        );
    }
}

export default SingleProduct;
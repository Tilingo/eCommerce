import React, { Component } from 'react';

class Item extends Component {
    render() {

        const price = this.props.price
        const qty = this.props.qty

        let itemTotal = price * qty

        return (
            <div>
                <img src={this.props.photo_url} alt={this.props.name}/>
                <div>
                    <h2>{this.props.name}</h2>
                    <p>${itemTotal}</p>
                    <p>qty: {qty}</p>
                    <h3></h3>
                </div>
            </div>
        )
    }
}

export default Item;
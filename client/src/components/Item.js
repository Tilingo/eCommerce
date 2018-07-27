import React, { Component } from 'react';
import axios from 'axios'

class Item extends Component {

    state = {
        qty: 0
    }

    substractOne = async () => {
        const order_id = this.props.orderId
        const id = this.props.id
        let qty = this.state.qty
        qty -= 1

        if (qty == 0) {
            const res = await axios.delete(`/api/orders/${order_id}/line_items/${id}`)
            console.log(res)
        } else {
            this.updateItemQty(qty)
        }

    }

    addOne = () => {
        let qty = this.state.qty
        qty += 1

        this.updateItemQty(qty)
    }

    updateItemQty = async (qty) => {
        const payload = { qty }
        const order_id = this.props.orderId
        const id = this.props.id

        try {
            const res = await axios.patch(`/api/orders/${order_id}/line_items/${id}`, payload)
            this.setState({ qty: res.data.qty })
        }
        catch (err) {
            console.error(err)
        }
    }



    componentDidMount() {
        this.setState({ qty: this.props.qty })
    }

    render() {

        const price = this.props.price
        const qty = this.props.qty

        let itemTotal = price * qty

        return (
            <div>
                <img src={this.props.photo_url} alt={this.props.name} />
                <div>
                    <h2>{this.props.name}</h2>
                    <p>${itemTotal}</p>
                    <div>
                        <button onClick={this.substractOne}>-</button>
                        <p>{qty}</p>
                        <button onClick={this.addOne}>+</button>
                    </div>
                    <h3></h3>
                </div>
            </div>
        )
    }
}

export default Item;
import React, { Component } from 'react';
import Item from './Item';
import axios from 'axios'

class ItemList extends Component {

    state = {
        items: []
    }

    fetchItems = async () => {
        const order_id = this.props.orderId

        try {
            const res = await axios.get(`/api/orders/${order_id}/line_items`)
            this.setState({ items: res.data })
        }
        catch (err) {
            console.error(err)
        }
    }

    componentDidMount() {
        this.fetchItems()
    }

    render() {

        let subtotal = this.state.items.map(item => item.price * item.qty).reduce((a, b) => a + b, 0)

        const items = this.state.items.map((item, i) => {
            return (
                <Item
                    key={i}
                    id={item.id}
                    orderId ={this.props.orderId}
                    name={item.name}
                    price={item.price}
                    qty={item.qty}
                    photo_url={item.photo_url} />
            )
        })

        return (
            <div>
                {items}
                <hr />
                <h1>Subtotal: ${subtotal}</h1>
            </div>
        );
    }
}

export default ItemList;
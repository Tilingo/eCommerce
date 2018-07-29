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
            await this.setState({ items: res.data })
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

        //Sort array of object function found on this link:
        //https://stackoverflow.com/questions/8900732/javascript-sort-objects-in-an-array-alphabetically-on-one-property-of-the-arra
        let sorted = this.state.items.sort((a, b) => {
            let textA = a.name.toUpperCase()
            let textB = b.name.toUpperCase()
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
        })

        const items = sorted.map((item, i) => {
            return (
                <Item
                    key={i}
                    id={item.id}
                    orderId={this.props.orderId}
                    name={item.name}
                    price={item.price}
                    qty={item.qty}
                    photo_url={item.photo_url}
                    fetchItems={this.fetchItems} />
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
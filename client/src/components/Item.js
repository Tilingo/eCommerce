import React, { Component } from 'react';
import axios from 'axios'
import CartItemCard from './styles/CartItemCard';
import ItemCardNameAndPrice from './styles/ItemCardNameAndPrice';
import ItemCardPriceAndQty from './styles/ItemCardPriceAndQty';
import CartItemQty from './styles/CartItemQty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

class Item extends Component {

    state = {
        qty: 0
    }

    substractOne = async () => {
        const order_id = this.props.orderId
        const id = this.props.id
        let qty = this.state.qty
        qty -= 1

        if (qty === 0) {
            try {
                await axios.delete(`/api/orders/${order_id}/line_items/${id}`)
                setTimeout(() => this.props.fetchItems(), 300)
                await this.props.fetchItems()
                this.setState({ qty: this.props.qty })
            } catch (err) {
                console.error(err)
            }
        } else {
            this.updateItemQty(qty)
            setTimeout(() => this.props.fetchItems(), 300)
            await this.props.fetchItems()
        }
    }

    addOne = () => {
        let qty = this.state.qty
        qty += 1

        this.updateItemQty(qty)
        setTimeout(() => this.props.fetchItems(), 300)
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

        const minus = <FontAwesomeIcon icon={faMinus} size="1x" />
        const plus = <FontAwesomeIcon icon={faPlus} size="1x" />

        return (
            <CartItemCard>

                <img src={this.props.photo_url} alt={this.props.name} />

                <ItemCardNameAndPrice>

                    <h3>{this.props.name}</h3>

                    <ItemCardPriceAndQty>

                        <CartItemQty>
                            <button onClick={this.substractOne}>{minus}</button>
                            <p>{qty}</p>
                            <button onClick={this.addOne}>{plus}</button>
                        </CartItemQty>

                        <h4>${itemTotal}</h4>
                    </ItemCardPriceAndQty>

                </ItemCardNameAndPrice>

            </CartItemCard>
        )
    }
}

export default Item;
import React, { Component } from 'react';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ItemList from './ItemList';
import CheckoutForm from './CheckoutForm'
import axios from 'axios'

class Cart extends Component {

    state = {
        isPaneOpen: false
    }

    componentDidMount() {
        Modal.setAppElement(this.el)
    }

    render() {

        const cartIcon = <FontAwesomeIcon icon={faShoppingCart} size="2x" />

        return <div ref={ref => this.el = ref}>
            <button onClick={() => this.setState({ isPaneOpen: true })}>
                {cartIcon}
            </button>
            <SlidingPane
                className='some-custom-class'
                overlayClassName='some-custom-overlay-class'
                isOpen={this.state.isPaneOpen}
                title="Cart"
                width='30vw'
                onRequestClose={() => {
                    // triggered on "<" on left top click or on outside click
                    this.setState({ isPaneOpen: false });
                }}>
                <div>
                    <ItemList
                        updateCart={this.updateCart}
                        orderId={this.props.orderId} />

                    <CheckoutForm />

                </div>
            </SlidingPane>
        </div>
    }
}

export default Cart
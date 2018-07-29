import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class CheckoutModal extends Component {
    state = { open: false }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open, dimmer } = this.state

        return (
            <div>
                <Button
                    onClick={this.show('blurring')}
                    icon='cart'
                    labelPosition='right'
                    color='blue'
                    content="CHECK OUT"/>

                <Modal dimmer={dimmer} open={open} onClose={this.close}>
                    <Modal.Header>Make Your Payment</Modal.Header>
                    <Modal.Content>
                        {/* <Image wrapped size='medium' src='/images/avatar/large/rachel.png' /> */}
                        <Modal.Description>
                            <StripeProvider apiKey="pk_test_LwL4RUtinpP3PXzYirX2jNfR">
                                <div className="example">
                                    <Elements>
                                        <CheckoutForm />
                                    </Elements>
                                </div>
                            </StripeProvider>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={this.close}>
                            CANCEL
            </Button>
                        <Button
                            positive
                            icon='payment'
                            labelPosition='right'
                            content="MAKE PAYMENT"
                            onClick={this.close}
                        />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default CheckoutModal
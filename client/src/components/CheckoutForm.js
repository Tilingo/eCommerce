import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

export default class TakeMoney extends React.Component {

  onToken = async (token) => {
    try {
      await axios.post('/api/charges', token)
    } catch (err) {
      console.error(err)
    }
  }


  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_6azTM09fXPXVqOW90G0LgCOy"
      />
    )
  }
}










// import React, { Component } from 'react';
// import { CardElement, injectStripe } from 'react-stripe-elements';
// import axios from 'axios'

// class CheckoutForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { complete: false };
//         this.submit = this.submit.bind(this);
//     }

//     async submit(ev) {
//         ev.preventDefault()
//         try {
//             let { token } = await this.props.stripe.createToken({ name: "Name" });
//             console.log(token)
//             // let response = await axios.post(`/api/charges`, token)
//             let response = await fetch("/api/charges", {
//                 method: "POST",
//                 headers: { "Content-Type": "text/plain" },
//                 body: token.id
//             });

//             if (response.ok) this.setState({ complete: true });
//         } catch (err) {
//             console.error(err)
//         }
//     }

//     render() {
//         return (
//             <div className="checkout">
//                 <CardElement />
//                 <button onClick={this.submit}>Send</button>
//             </div>
//         );
//     }
// }

// export default injectStripe(CheckoutForm);
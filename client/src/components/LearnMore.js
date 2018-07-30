import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class LearnMore extends Component {
    render() {
        return (
            <Link to={`/products/${this.props.id}`}>
                LEARN MORE
            </Link>
        );
    }
}

export default LearnMore;
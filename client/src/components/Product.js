import React, { Component } from 'react';
import { Image, Reveal } from 'semantic-ui-react'
import StyledProduct from './styles/StyledProduct';

class Product extends Component {
    render() {
        return (
            <StyledProduct>
                <Reveal animated={this.props.move} instant>
                    <Reveal.Content visible>
                        <Image src={this.props.src} fill/>
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        {this.props.child}
                    </Reveal.Content>
                </Reveal>
            </StyledProduct>
        );
    }
}

export default Product;
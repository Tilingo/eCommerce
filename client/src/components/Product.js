import React, { Component } from 'react';
import StyledProduct from './styles/StyledProduct';
import { Image, Reveal } from 'semantic-ui-react'

class Product extends Component {
    render() {
        return (
            <StyledProduct>

                <Reveal animated={this.props.move} >

                    <Reveal.Content visible>
                        <Image src={this.props.src} fill="true"/>
                    </Reveal.Content>

                    <Reveal.Content className="hidden">
                        {this.props.child}
                    </Reveal.Content>

                </Reveal>

            </StyledProduct>
        )
    }
}

export default Product
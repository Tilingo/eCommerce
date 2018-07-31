import React, { Component } from 'react';
import StyledFeaturedProduct from './styles/StyledFeaturedProduct';
import LearnMore from './LearnMore';

class FeaturedProduct extends Component {
    render() {
        return (
            <StyledFeaturedProduct>
                <div>
                    <h2>The Hipster Bicycle</h2>
                    <h1>Our newest and nicer product.</h1>
                    <LearnMore id='3' />
                </div>
            </StyledFeaturedProduct>
        );
    }
}

export default FeaturedProduct;
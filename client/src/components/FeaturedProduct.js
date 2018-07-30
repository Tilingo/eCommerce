import React, { Component } from 'react';
import StyledFeaturedProduct from './styles/StyledFeaturedProduct';
import LearnMore from './LearnMore';

class FeaturedProduct extends Component {
    render() {
        return (
            <StyledFeaturedProduct>
                <h1>Featured Product</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non molestiae tempore ea alias iste magni repudiandae? Quidem, nihil! Nulla, rem.</p>
                <LearnMore id='3' />
            </StyledFeaturedProduct>
        );
    }
}

export default FeaturedProduct;
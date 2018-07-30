import React, { Component } from 'react';
import StyledBanner from './styles/StyledBanner';
import logos from '../images/logos.png'

class Banner extends Component {
    render() {
        return (
            <StyledBanner>
                <img src={logos} alt="" />
            </StyledBanner>
        );
    }
}

export default Banner;
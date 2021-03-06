import React, { Component } from 'react'
import SlideShow from './SlideShow';
import Product from './Product';
import HomeProductsWrap from './styles/HomeProductsWrap';
import Banner from './Banner';
import FeaturedProduct from './FeaturedProduct';
import LearnMore from './LearnMore';
import FirstProduct from './styles/FristProduct';
import SecondProduct from './styles/SecondProduct';

class HomeComponent extends Component {

    render() {
        return (
            <div>
                <SlideShow />
                <HomeProductsWrap>

                    <Product move="move"
                        child={
                            <FirstProduct>
                                <div>
                                    <h2>Diana Instant Square</h2>
                                    <LearnMore id='1' />
                                </div>
                            </FirstProduct>}
                        src="https://images.unsplash.com/photo-1522100077728-4fae00f560c8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8701578bec61bcb857957c601df59fc0&auto=format&fit=crop&w=981&q=80" />

                    <Product move="move right"
                        child={
                            <SecondProduct>
                                <div>
                                    <h2>The Keyboard Waffle Iron</h2>
                                    <LearnMore id='2' />
                                </div>
                            </SecondProduct>}
                        src="https://images.unsplash.com/photo-1528979180541-5ad1423e5852?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f0584581f121c30fb7559d2b0b44d4d&auto=format&fit=crop&w=1500&q=80" />


                </HomeProductsWrap>
                <Banner />
                <FeaturedProduct />
            </div>
        )
    }
}

export default HomeComponent
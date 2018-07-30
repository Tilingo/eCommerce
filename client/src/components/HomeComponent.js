import React, { Component } from 'react'
import SlideShow from './SlideShow';
import Product from './Product';
import HomeProductsWrap from './styles/HomeProductsWrap';

class HomeComponent extends Component {

    render() {
        return (
            <div>
                <SlideShow />
                <HomeProductsWrap>

                    <Product move="move"
                        child={
                            <div>
                                <h1>This is first cool</h1>
                                <button>Learn More</button>
                            </div>}
                    src="https://images.unsplash.com/photo-1522100077728-4fae00f560c8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8701578bec61bcb857957c601df59fc0&auto=format&fit=crop&w=981&q=80"/>

                    <Product move="move right"
                        child={
                            <div>
                                <h1>This is second cool</h1>
                                <button>Learn More</button>
                            </div>}
                    src="https://images.unsplash.com/photo-1528979180541-5ad1423e5852?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f0584581f121c30fb7559d2b0b44d4d&auto=format&fit=crop&w=1500&q=80"/>

                </HomeProductsWrap>
            </div>
        )
    }
}

export default HomeComponent
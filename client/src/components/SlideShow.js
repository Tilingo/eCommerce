import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slide from './styles/SlideOne';
import LearnMore from './LearnMore';

class SlideShow extends Component {
    render() {
        return (
            <Carousel showArrows={false} emulateTouch infiniteLoop autoPlay showThumbs={false} showStatus={false} interval={10000} stopOnHover>
                <Slide>
                    <h1>Amazing product</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At voluptatem illo tenetur quia adipisci quibusdam illum molestias, nihil dolorem iure repellendus labore unde temporibus excepturi alias reprehenderit ipsa ad officia.</p>
                    <LearnMore id="#"/>
                </Slide>
                <Slide>
                    <h1>Amazing product</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At voluptatem illo tenetur quia adipisci quibusdam illum molestias, nihil dolorem iure repellendus labore unde temporibus excepturi alias reprehenderit ipsa ad officia.</p>
                    <LearnMore id="#"/>
                </Slide>
            </Carousel>
        );
    }
}

export default SlideShow
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slide from './styles/SlideOne';
import LearnMore from './LearnMore';
import SlideTwo from './styles/SlideTwo';
import SlideThree from './styles/SlideThree';

class SlideShow extends Component {
    render() {
        return (
            <Carousel showArrows={false} emulateTouch infiniteLoop autoPlay showThumbs={false} showStatus={false} interval={10000} stopOnHover>
                <Slide>
                    <div>
                        <h1>
                            Welcome to <span>Boomerang Barrier.</span>
                        </h1>
                        <p>
                            Our store is finally open and we're very excited about it.
                        </p>
                    </div>
                </Slide>
                <SlideTwo>
                    <div>
                        <h1>
                            Open <span>24 HOURS.</span>
                        </h1>
                        <p>
                            One great thing about eShops? You can buy 24 hours! This is nothing new of course, but still, is very cool.

                        </p>
                    </div>
                </SlideTwo>
                <SlideThree>
                    <div>
                        <h1>
                            The whole world <span>is a couch.</span>
                        </h1>
                        <p>
                            Another cool thing you ask? Well, you don't need to deal with finding that perfect parking spot. You are already there.
                        </p>
                    </div>
                </SlideThree>
            </Carousel>
        )
    }
}

export default SlideShow
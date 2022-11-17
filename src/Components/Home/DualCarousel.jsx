import React from 'react';
import img1 from "../../Assets/CarouselImage/img1.jpg";
import img2 from "../../Assets/CarouselImage/img2.jpg";
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'

const DualCarousel = () => {
    return (
            <Carousel.Item className="carousel-control">
                <div className="d-flex gap-2">

                    <div className="contain w-75">
                        <div className="carousel-image">
                            <img
                                className="d-block w-100"
                                src={img1}
                                alt="First slide"
                            />
                        </div>
                        <div className="d-block carousel-text">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>

                    </div>

                    <div className="contain w-75">
                        <div className="carousel-image">
                            <img
                                className="d-block w-100"
                                src={img2}
                                alt="First slide"
                            />
                        </div>
                        <div className="d-block carousel-text">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>

                    </div>

                </div>
            </Carousel.Item>
    );
};

export default DualCarousel;

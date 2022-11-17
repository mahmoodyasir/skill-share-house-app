import React, {useEffect, useState} from 'react';
import './Home.css'
import DualCarousel from "./DualCarousel";
import img1 from '../../Assets/CarouselImage/img1.jpg'
import img2 from '../../Assets/CarouselImage/img2.jpg'
import img3 from '../../Assets/CarouselImage/img3.jpg'
import img4 from '../../Assets/CarouselImage/img4.jpg'
import img5 from '../../Assets/CarouselImage/img5.jpg'
import img6 from '../../Assets/CarouselImage/img6.jpg'
import {Carousel, Col} from "react-bootstrap";
import useTitle from "../../Hooks/useTitle";
import Axios from "axios";
import {domain} from "../../rootdomain";
import SingleService from "../Services/SingleService";
import HomeServiceCard from "./HomeServiceCard";
import {Link} from "react-router-dom";
import sideicon from '../../Assets/RootIcon/favicon.png'

const data = [
    {
        id: 1,
        f_img: img1,
        s_image: img2,
        f_text: "Share knowledge you are good at.",
        s_text: "Teach people from your experience"
    },
    {
        id: 2,
        f_img: img3,
        s_image: img4,
        f_text: "Great community support for all",
        s_text: "Instructors and learners both have mutual understanding"
    },
    {
        id: 3,
        f_img: img5,
        s_image: img6,
        f_text: "The knowledge in this site is transparent to all",
        s_text: "Anybody can see and leave a review"
    }
]

const Home = () => {
    useTitle("Home")

    const [card_data, setCard_data] = useState(null);

    useEffect(() => {
       const cardData = async () => {
           await Axios ({
               method: "get",
               url: `${domain}/limit_services`
           }).then(response => {
               console.log(response)
               setCard_data(response.data);
           })
       }
       cardData();
    }, []);


    return (
        <div className="container mt-4">
            <Carousel>
                <Carousel.Item className="carousel-control">
                    <div className="d-flex gap-2">

                        <div className="contain">
                            <div className="carousel-image">
                                <img
                                    className="d-block w-100"
                                    src={img1}
                                    alt="First slide"
                                />
                            </div>
                            <div className="d-block carousel-text">
                                <h3>Share knowledge you are good at</h3>
                            </div>

                        </div>

                        <div className="contain">
                            <div className="carousel-image">
                                <img
                                    className="d-block w-100"
                                    src={img2}
                                    alt="First slide"
                                />
                            </div>
                            <div className="d-block carousel-text">
                                <h3>Teach people from your experience</h3>
                            </div>

                        </div>


                    </div>
                </Carousel.Item>
                <Carousel.Item className="carousel-control">
                    <div className="d-flex gap-2">

                        <div className="contain">
                            <div className="carousel-image">
                                <img
                                    className="d-block w-100"
                                    src={img3}
                                    alt="First slide"
                                />
                            </div>
                            <div className="d-block carousel-text">
                                <h3>Great community support for all</h3>
                            </div>

                        </div>

                        <div className="contain">
                            <div className="carousel-image">
                                <img
                                    className="d-block w-100"
                                    src={img4}
                                    alt="First slide"
                                />
                            </div>
                            <div className="d-block carousel-text">
                                <h3>Instructors and learners both have mutual understanding</h3>
                            </div>

                        </div>


                    </div>
                </Carousel.Item>
                <Carousel.Item className="carousel-control">
                    <div className="d-flex gap-2">

                        <div className="contain">
                            <div className="carousel-image">
                                <img
                                    className="d-block w-100"
                                    src={img5}
                                    alt="First slide"
                                />
                            </div>
                            <div className="d-block carousel-text">
                                <h3>The knowledge in this site is transparent to all</h3>
                            </div>

                        </div>

                        <div className="contain">
                            <div className="carousel-image">
                                <img
                                    className="d-block w-100"
                                    src={img6}
                                    alt="First slide"
                                />
                            </div>
                            <div className="d-block carousel-text">
                                <h3>Anybody can see and leave a review</h3>
                            </div>

                        </div>


                    </div>
                </Carousel.Item>
            </Carousel>

            <div className="mt-5">
                <Col className="row">
                {
                    card_data?.map((item) => (
                        <div key={item?._id} className="col-md-6 col-lg-4">
                            <HomeServiceCard
                                data={item}
                            />
                        </div>
                    ))
                }
            </Col>
            </div>
                <div className="card border border-0 shadow text-color-control bg-control">
                        <div className="row g-0">
                            <div className="col-md-8 col-8">
                                <div className="card-body w-100">
                                    <h5 className="card-title display-6">Suggest me Topics</h5>

                                    <div className="d-lg-flex gap-lg-5 gap-4">
                                        <div className="mb-3 top-input">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Your
                                                Name</label>
                                            <input type="text" className="form-control border border-0 shadow" id="exampleFormControlInput1"
                                                   placeholder="Write your name"/>
                                        </div>

                                        <div className="mb-3 top-input">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">Your Email
                                                address</label>
                                            <input type="email" className="form-control border border-0 shadow" id="exampleFormControlInput2"
                                                   placeholder="Write your email"/>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="mb-3 bottom-input">
                                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
                                            <textarea className="form-control border border-0 shadow" id="exampleFormControlTextarea1"
                                                      rows="3" placeholder="Write your message here"/>
                                        </div>
                                    </div>

                                    <div className="mt-5">
                                        <Link to="" className="contact-btn btn btn-outline-primary">Submit</Link>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-4 col-4">
                                <img src={sideicon} className="img-fluid rounded-end h-100" alt="..."/>
                            </div>
                        </div>
                    </div>
            <div>

            </div>
        </div>
    );
};

export default Home;

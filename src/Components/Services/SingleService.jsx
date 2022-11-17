import React from 'react';
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FaClock, FaRegStar, FaMoneyBill} from "react-icons/fa";
import 'react-photo-view/dist/react-photo-view.css';
import './service.css'
import {PhotoProvider, PhotoView} from "react-photo-view";
import Axios from "axios";
import {domain} from "../../rootdomain";

const SingleService = ({data}) => {

    return (
        <div>
            <div className="pt-2 pb-5 me-2 ms-2">
                <Card className="border border-0 shadow-box card-list-bg-control main-card shadow">
                    <Card.Header className="rounded card-header">
                        <div
                            className="d-lg-flex align-items-lg-center d-md-flex align-items-md-center d-flex align-items-center">
                            <div className="profile-div">
                                <p><span><img className="img-fluid rounded profile-image-control"
                                              src={data?.profile_img} alt=""/></span></p>
                            </div>
                            <div className="service-provider-info text-white">
                                <p className="pb-0 mb-0"><span
                                    className="instructor">Service Provider: </span>{data?.service_provider}</p>
                                <p><span className="instructor">Published: </span>{data?.date}</p>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title className="text-center fs-4">{data?.service_name}</Card.Title>
                        <PhotoProvider>
                            <PhotoView src={data?.imageurl}>
                                <Card.Img className="rounded product-image-control" variant="top" src={data?.imageurl}/>
                            </PhotoView>
                        </PhotoProvider>
                        <Card.Text className="comic-sans-ms mt-2">
                            {data?.description.slice(0, 100) + "..."}
                        </Card.Text>
                        <div className="d-flex justify-content-between">

                            <div>
                                <p><span className="instructor fw-bold"><FaMoneyBill/> Price: {data?.price}$</span></p>
                            </div>

                        </div>
                    </Card.Body>
                    <Link className="details-link" to={`/services/${data?._id}`}>
                        <Card.Footer className="border border-0 text-center details">
                            See Course Details
                        </Card.Footer>
                    </Link>
                </Card>
            </div>
        </div>
    );
};

export default SingleService;

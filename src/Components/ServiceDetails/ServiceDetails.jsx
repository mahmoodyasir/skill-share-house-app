import React, {useContext, useEffect, useState} from 'react';
import {Link, useLoaderData} from "react-router-dom";
import Axios from "axios";
import {domain} from "../../rootdomain";
import {AuthContext} from "../../Contexts/AuthProvider";
import './ServiceDetails.css'
import useTitle from "../../Hooks/useTitle";
import {FaMoneyBill} from "react-icons/fa";
import {Button} from "react-bootstrap";
import {BsArrowRightCircleFill} from "react-icons/bs";

const ServiceDetails = () => {
    useTitle("Details")

    const details = useLoaderData();
    const {user, setUser} = useContext(AuthContext);
    const [review, setReview] = useState(null);
    const [state, setState] = useState("");

    const [id, setId] = useState(details?._id);

    useEffect(() => {
        const getReview = async () => {
            await Axios({
                method: "get",
                url: `${domain}/reviews/${id}`
            }).then(response => {
                console.log(response.data)
                setReview(response?.data);
            })
        }
        getReview();
    }, [state]);

    const handleComment = async (event) => {
        event.preventDefault()
        const review = event.target.comment.value;
        const today = new Date();
        // const formdata = new FormData();
        // formdata.append("service_name", details?.service_name)
        // formdata.append("provider_name", details?.service_provider)
        // formdata.append("tracking_serial", details?._id)
        // formdata.append("reviewer_img", user?.photoURL)
        // formdata.append("reviewer_name", user?.displayName)
        // formdata.append("review_text", review)
        // formdata.append("email", user?.email)
        // formdata.append("date", today)

        const review_data = {
            service_name: details?.service_name,
            provider_name: details?.service_provider,
            tracking_serial: details?._id,
            reviewer_img: user?.photoURL,
            reviewer_name: user?.displayName,
            review_text: review,
            email: user?.email,
            date: today
        }

        Axios({
            method: "post",
            url: `${domain}/reviews`,
            data: review_data
        }).then(response => {
            console.log(response);
            event.target.reset();
            setState("1")
        })
    }


    return (
        <div className="container mt-5">

            <div className="col-md-12 row">
                <div className="col-md-7 mb-3">
                    <div>
                        <div className="card border border-0 shadow">
                            <img src={details?.imageurl} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{details?.service_name}</h5>
                                <p className="card-text comic-sans-ms">{details?.description}</p>
                            </div>
                            <ul className="list-group list-group-flush shadow">
                                <li className="list-group-item"><img className="provider_img" src={details?.profile_img}
                                                                     alt=""/><span
                                    className="ms-3 comic-sans-ms">{details?.service_provider}</span></li>
                                <li className="list-group-item comic-sans-ms"><FaMoneyBill/> {details?.price}$</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="col-md-5">
                    {
                        user?.uid ?
                            <>
                                <div>
                                    <form onSubmit={handleComment}>
                                        <div className="form-floating mb-3">
                                            <input name="comment" type="text" className="form-control"
                                                   id="floatingInput"
                                                   placeholder="something"/>
                                            <label htmlFor="floatingInput">Write a review....</label>
                                        </div>
                                        <input type="submit" className="btn btn-success fs-5" value="POST"/>
                                    </form>
                                </div>
                            </>
                            :
                            <>
                                <span className="display-6">Please <Link to="/signin" className="btn btn-success">SignIn</Link> to post a review.</span>
                            </>
                    }

                    <div className="mt-3">
                        <h2 className="display-6 mb-5">All Reviews of this service</h2>
                        {
                            review?.map((item) => (

                                <div className="card mb-3" key={item._id}>
                                    <div>
                                        <img className="provider_img rounded" src={item?.reviewer_img} alt=""/>
                                        <span className="ms-2">{item?.reviewer_name}</span>
                                    </div>

                                    <div>
                                        <h4>{item?.review_text}</h4>
                                        <p>{item?.date}</p>
                                    </div>
                                </div>

                            ))
                        }
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;

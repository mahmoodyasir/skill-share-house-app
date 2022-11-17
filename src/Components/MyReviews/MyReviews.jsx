import React, {useContext, useEffect, useState} from 'react';
import Axios from "axios";
import {domain} from "../../rootdomain";
import {AuthContext} from "../../Contexts/AuthProvider";
import Modal from 'react-bootstrap/Modal';
import './MyReviews.css'
import {Button} from "react-bootstrap";
import useTitle from "../../Hooks/useTitle";

const MyReviews = () => {
    useTitle("My Reviews")

    const {user, logOut} = useContext(AuthContext);
    const [data, setData] = useState(null);
    const [state, setState] = useState("");
    const [rtr_review, setRtr_review] = useState("");

    const [show, setShow] = useState(false);
    const [serial, setSerial] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (rev, id) => {
        setSerial(id);
        setRtr_review(rev);
        setShow(true);
    }

    useEffect(() => {
        const getPersonalReview = async () => {
            await Axios({
                method: "get",
                url: `${domain}/reviews?email=${user?.email}`
            }).then(response => {
                setData(response.data)
                // console.log(response)
            })
        }
        getPersonalReview()
    }, [data]);

    const reviewDelete = async (id) => {
        await Axios({
            method: "delete",
            url: `${domain}/review/${id}`
        }).then(result => {
            setState("1")
        })
    }

    const reviewUpdate = async (event) => {
        event.preventDefault();
        handleClose();
        console.log(serial, rtr_review);
        await Axios({
            method: "patch",
            url: `${domain}/review/${serial}`,
            data: { rtr_review: rtr_review}
        }).then(response => {
            setState("2")
            console.log(response)
        })
    }


    return (
        <div className="container mt-5">

            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>update your Review</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>

                            <div className="form-floating mb-3">
                                <input onChange={(e) => setRtr_review(e.target.value)} defaultValue={rtr_review} name="comment" type="text" className="form-control"
                                       id="floatingInput"
                                       placeholder="something"/>
                                <label htmlFor="floatingInput">Update your review....</label>
                            </div>
                            <button onClick={reviewUpdate} className="btn btn-success">Update</button>

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>

            <h2>My Reviews</h2>
            <div className="col-md-12 card text-black bg-white scrollable">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Service Provider's Name</th>
                        <th>Service Name</th>
                        <th>Your Review</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data?.length !== 0 ?
                            data?.map((item, i) =>
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{item?.provider_name}</td>
                                    <td>{item?.service_name}</td>
                                    <td>{item?.review_text}</td>
                                    <td>
                                        <div className="d-md-flex text-center ">
                                            <button onClick={() => handleShow(item?.review_text, item?._id)}
                                                    className="btn btn-outline-primary mb-lg-0 mb-md-0 mb-sm-3 mb-3">Edit
                                            </button>

                                            <button onClick={() => reviewDelete(item?._id)}
                                                    className="btn btn-outline-danger mx-2">Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ) :
                            <div>
                                <h1 className="beside display-6">NO Review Information FOUND</h1>
                            </div>
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;

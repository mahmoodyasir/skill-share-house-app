import React, {useContext, useState} from 'react';
import useTitle from "../../Hooks/useTitle";
import './SignUp.css'
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import toast from 'react-hot-toast';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../Contexts/AuthProvider";

const SignUp = () => {
    useTitle("SignUp")

    const {createUser, updateUserProfile} = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                toast.success("You are successfully registered");
                navigate(from, {replace: true});
            }).catch(e => {
            console.error(e);
            setError(e.message)
        })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => {
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="container mt-3 mb-3">
            <div className="">
                <Container>
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col md={8} lg={6} xs={12}>
                            <div className="border border-4 rounded-top border-success"></div>
                            <Card className="shadow border border-0 radius-top register-bg-control">
                                <Card.Body>
                                    <div className="mb-3 mt-md-4">
                                        <h2 className="fw-bold mb-2 text-uppercase ">Register</h2>
                                        <p className=" mb-5">Please enter your Email and password!</p>
                                        <div className="mb-3">
                                            <Form onSubmit={handleRegister}>
                                                <Form.Group className="mb-3" controlId="formBasicName">
                                                    <Form.Label className="text-center">
                                                        Name
                                                    </Form.Label>
                                                    <Form.Control name="name" type="text"
                                                                  placeholder="Enter Your Name" required/>
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicImage">
                                                    <Form.Label className="text-center">
                                                        Image URL
                                                    </Form.Label>
                                                    <Form.Control name="photoURL" type="text"
                                                                  placeholder="Enter Image URL"/>
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label className="text-center">
                                                        Email address
                                                    </Form.Label>
                                                    <Form.Control name="email" type="email" placeholder="Enter email"
                                                                  required/>
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control name="password" type="password" placeholder="Password"
                                                                  required/>
                                                </Form.Group>

                                                <div className="d-grid">
                                                    <Button className="submit-btn border border-0" type="submit">
                                                        Register
                                                    </Button>
                                                </div>

                                                <Form.Text className="text-danger">
                                                    {error}
                                                </Form.Text>

                                            </Form>
                                            <div className="mt-3">
                                                <p className="mb-0  text-center">
                                                    Already have an account?{" "}
                                                    <Link to="/signin" className="text-primary fw-bold">
                                                        Sign In
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <div className="border border-5 rounded-bottom border-success"></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default SignUp;

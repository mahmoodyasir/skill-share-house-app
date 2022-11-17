import React, {useContext, useState} from 'react';
import {Col, Button, Row, Container, Card, Form} from "react-bootstrap";
import {FaGithub, FaGoogle} from 'react-icons/fa';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {GoogleAuthProvider, GithubAuthProvider} from 'firebase/auth';
import {AuthContext} from "../../Contexts/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import './SitgnIn.css'

const SignIn = () => {
    useTitle("SignIn")

    const [error, setError] = useState('');
    const {signIn, setLoading} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const {providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, {replace: true});
            }).catch(e => {
            console.error(e);
            setError(e.message);
        }).finally(() => {
            setLoading(false);
        })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    return (
        <div className="container mt-5 mb-3">
            <div className="">
                <Container>
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col md={8} lg={6} xs={12}>
                            <div className="border border-4 rounded-top border-success"></div>
                            <Card className="shadow border border-0 radius-top login-bg-control">
                                <Card.Body>

                                    <div className="social-login d-flex gap-5">
                                        <p onClick={handleGoogleSignIn} className="google"><FaGoogle/></p>
                                        <p onClick={handleGithubSignIn} className="git"><FaGithub/></p>
                                    </div>

                                    <div className="mb-3 mt-md-4">
                                        <h2 className="fw-bold mb-2 text-uppercase ">Sign In</h2>
                                        <p className=" mb-5">Please enter your login credentials!</p>
                                        <div className="mb-3">
                                            <Form onSubmit={handleLogin}>
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
                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formBasicCheckbox"
                                                >
                                                    <p className="small">
                                                        <Link className="text-primary" to="">
                                                            Forgot password?
                                                        </Link>
                                                    </p>
                                                </Form.Group>
                                                <div className="d-grid">
                                                    <Button className="submit-btn border border-0" type="submit">
                                                        Login
                                                    </Button>
                                                </div>
                                                <Form.Text className="text-danger">
                                                    {error}
                                                </Form.Text>

                                            </Form>
                                            <div className="mt-3">
                                                <p className="mb-0  text-center">
                                                    Don't have an account?{" "}
                                                    <Link to="/signup" className="text-primary fw-bold">
                                                        Sign Up
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

export default SignIn;

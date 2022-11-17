import React, {useContext, useEffect} from 'react';
import {Button, Container, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";
import './Header.css'
import useTitle from "../../Hooks/useTitle";
import {AuthContext} from "../../Contexts/AuthProvider";
import {FaUser} from "react-icons/fa";
import icon from '../../Assets/RootIcon/icon.png'

const Header = () => {
    useTitle("SignIn");

    const {user, logOut, setUser} = useContext(AuthContext);
    const location = useLocation();
    const {pathname} = location;
    const splitLocation = pathname.split("/");

    useEffect(() => {
        setUser(user);
    }, []);


    const handleLogOut = () => {
        logOut()
            .then(() => {
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="container mt-5">
            <Navbar className="nav-style" collapseOnSelect expand="lg" variant="light">
                <Container>
                    <div className="header h-common">
                        <Navbar.Brand><Link className="text-decoration-none text-white ps-3" to="/"><span><img className="nav-icon" src=""
                                                                                                               alt=""/></span>Skill
                            Share House</Link></Navbar.Brand>
                    </div>

                    <div className="d-flex">
                        {
                            user?.uid ?
                                <>
                                    <img
                                        className="profile-image rounded d-lg-none"
                                        src={user?.photoURL} alt=""
                                    />
                                    <Nav className="link-style d-lg-none mt-1">
                                        <Link className="bg-danger rounded" onClick={handleLogOut} to="">Logout</Link>
                                    </Nav>
                                </> : <></>
                        }

                        <Navbar.Toggle className="burger ms-3" aria-controls="responsive-navbar-nav"/>
                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto link-style mt-2">
                            <Link to="/">Home</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/blog">Blog</Link>
                            {
                                user?.uid ?
                                    <>
                                        <Link to="/myreviews">My Reviews</Link>
                                        <Link to="/addservices">Add Services</Link>
                                    </>:<></>
                            }
                        </Nav>
                        <Nav className="link-style">
                            {
                                user?.uid ?
                                    <>
                                        {
                                            user?.photoURL ?
                                                <>
                                                    <img
                                                        className="profile-image rounded d-none d-lg-block"
                                                        src={user?.photoURL} alt=""
                                                    />
                                                    <Link className="d-none d-lg-block bg-danger rounded" onClick={handleLogOut}
                                                          to="">Logout</Link>
                                                </>
                                                :
                                                <>
                                                    <FaUser
                                                        data-tip={user?.displayName ? user?.displayName : user?.email}
                                                    />
                                                </>
                                        }
                                    </>
                                    :
                                    <>
                                        <Link to="/signin">SignIn</Link>
                                        <Link to="/signup">SignUp</Link>
                                    </>
                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;

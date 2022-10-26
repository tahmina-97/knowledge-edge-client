import React, { useContext } from 'react';
import { FaUser, FaUserGraduate } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Image } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const style = { fontSize: "180%" };

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('error', error);
            })
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>

                <Navbar.Brand href="#home">
                    <FaUserGraduate style={style}></FaUserGraduate>
                    <span className='fw-bold ms-2'>Knowledge Dot</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/' className='text-white text-decoration-none fs-5 me-3'>Courses</NavLink>
                        <NavLink to='/faq' className='text-white text-decoration-none fs-5 me-3'>FAQs</NavLink>
                        <NavLink to='/blog' className='text-white text-decoration-none fs-5'>Blog</NavLink>
                    </Nav>
                    <Nav>
                        <div className='mx-auto'>
                            {
                                user?.uid ?
                                    <>
                                        <Button onClick={handleLogOut} variant="outline-light" className='mx-2'>Log Out</Button>
                                    </>
                                    :
                                    <>
                                        <Button className='me-3' variant="light"><Link className='text-decoration-none' to='/login'>Login</Link></Button>
                                        <Button variant="light"><Link className='text-decoration-none' to='/register'>Register</Link></Button>
                                    </>
                            }

                        </div>
                        <Nav.Link className='ms-auto' href="#deets">
                            {user?.photoURL ?
                                <Image roundedCircle src={user?.photoURL} title={user.displayName} style={{ height: '30px' }} ></Image>
                                :
                                <FaUser style={style} />
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
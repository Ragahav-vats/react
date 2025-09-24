import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/images/ws-cube-white-logo.svg'
import { Link } from 'react-router';
import { Links } from 'react-router';
import context from 'react-bootstrap/esm/AccordionContext';
import { Context } from './ContextAPI';
import { ToastContainer } from 'react-toastify';

export default function Heading() {

    const {cartItems,isLogin} = useContext(Context);

    console.log(isLogin)
    const totalItems = cartItems ? cartItems.length : 0;
    return (
        <>
        <ToastContainer/>
            <div className='container-flood position-sticky top-0 z-1'>
                    <Navbar expand="lg" className="bg-primary">
                        <Container>
                            <Navbar.Brand  >
                                <Link to='/'>
                                <img src={logo}/>
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link>
                                      <Link to='/' className='text-decoration-none text-black'>Home</Link>  
                                    </Nav.Link>
                                    <Nav.Link>
                                        
                                        <Link to='/about-us' className='text-decoration-none text-black'>AboutUs</Link>

                                    </Nav.Link>
                                    <Nav.Link>
                                        
                                        <Link to='/product-shoping' className='text-decoration-none text-black'>ProductShoping</Link>

                                    </Nav.Link>
                            
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        {/* <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>                                    */}
                                     
                                    </NavDropdown>
                                    <Nav.Link>
                                        
                                        <Link to='/contact-us' className='text-decoration-none text-black'>ContactUs</Link>

                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                            <Link to={`view-cart`}>
                              <Button variant="warning me-3" text='center'>view cart({totalItems})</Button>
                            </Link>
                              {
                                isLogin
                                ?
                                 <Button variant="warning" >My Account</Button>
                                :
                                <Button variant="warning" >Login</Button>
                              }
                        </Container>
                    </Navbar>
                </div>
            
        </>
    )
}

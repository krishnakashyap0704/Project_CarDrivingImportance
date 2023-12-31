import { Button, Col, Container, Form, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import logo from "./Image/Logo.png";
import { LinkContainer } from "react-router-bootstrap";
import './style.css';
import { logout } from "../utils/TokenUtil";
import { Navigate } from "react-router-dom";

export function NavigationBar() {

    const handleLogout=()=>
    {
      logout();
      Navigate(`/`);
    }

    return (
        
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary navbar1">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="90"
                        height="60"
                        className="d-inline-block align-top class3"
                    />{'   '}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/AboutUs" >About Us</Nav.Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/RTORegistrationForm">Driving License</NavDropdown.Item>
                            <NavDropdown.Item href="/RTORegistrationForm">Licence Renewal</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.5">Choice Number</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.6">Green Tax </NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.7">International Driving license </NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.8">PUC</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.9">e-Challan</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.10">Vehicle Transfer</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.11">Vechile Fitness Testing</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Informational Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/LicenceDetails">Know Your License Details</NavDropdown.Item>
                            <NavDropdown.Item href="/VehicleDetails">Know Your Vechile Details</NavDropdown.Item>
                            <NavDropdown.Item href="/AboutLicencing">About Licencing</NavDropdown.Item>
                            <NavDropdown.Item href="/AboutPermit">About Permits</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.6">Act, Rules and Policies</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.7">Fees & User Charges</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Courses" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Analytics</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Vahan Report</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Sarathi Report</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">VLTD Dashboard</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Homologation Dashboard</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">SLD Dashboard</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.7">eChallan Dashboard</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.8">Trade Certificate Report</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.9">PUCC Dashboard</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Mock LLR test" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/4.1">Maharashtra Traffic Police (Notice)</NavDropdown.Item>
                            <NavDropdown.Item href="#action/4.2">MoRTH</NavDropdown.Item>
                            <NavDropdown.Item href="#action/4.3">National Informatics Centre</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="https://rb.gy/7xpr7u">School Locator</Nav.Link>
                        <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
                        <NavDropdown title="Login" id="basic-nav-dropdown">
                            <LinkContainer to="/Login"><NavDropdown.Item >Sign In</NavDropdown.Item></LinkContainer>
                            <NavDropdown.Item href="/Register">Register</NavDropdown.Item>
                            <NavDropdown.Item href="/SupportForm">Support</NavDropdown.Item>
                        </NavDropdown>
                        <Form >
                            <Row>
                                <Col xs="auto">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className=" mr-sm-2"
                                    />
                                </Col>
                            </Row>
                        </Form>
                        <Button onClick={handleLogout}>{' '}Log Out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
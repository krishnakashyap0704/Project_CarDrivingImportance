import { Col, Container, Form, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";

import logo from "./Image/logo.png";
import { LinkContainer } from "react-router-bootstrap";

export function NavigationBar() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="45"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">About Us</Nav.Link>
                        <NavDropdown title="Online Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/1.1">Vechile Related Service</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.2">Permit Related Service</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.3">Driving Licence</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.4">Check Post Tax</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.5">Fancy Number Booking</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.6">NR Services</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.7">National Permit Authorization</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.8">PUCC</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.9">eChallan</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.10">Vehicle Scrapping</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.11">Vechile Fitness Testing</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Informational Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/2.1">Know Your License Details</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.2">Know Your Vechile Details</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.3">About Licencing</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.4">About Registration</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.5">About Permits</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.6">Act, Rules and Policies</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.7">Fees & User Charges</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.8">Notification And Advisories</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.9">Downloadable Forms</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Dashboard & Report" id="basic-nav-dropdown">
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
                        <NavDropdown title="External Links" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/4.1">Delhi Traffic Police (Notice)</NavDropdown.Item>
                            <NavDropdown.Item href="#action/4.2">MoRTH</NavDropdown.Item>
                            <NavDropdown.Item href="#action/4.3">National Informatics Centre</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#Sitemap">Sitemap</Nav.Link>
                        <Nav.Link href="#Contactus">Contact Us</Nav.Link>
                        <NavDropdown title="Login" id="basic-nav-dropdown">
                            <LinkContainer to="/Login"><NavDropdown.Item >Sign In</NavDropdown.Item></LinkContainer>
                            <NavDropdown.Item href="/RTORegistrationForm">Registration</NavDropdown.Item>
                            <NavDropdown.Item href="#action/5.3">Support</NavDropdown.Item>
                        </NavDropdown>
                        <Form inline>
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
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
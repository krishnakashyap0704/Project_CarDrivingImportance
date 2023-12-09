import { Col, Container, Form, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";

import DS from "./Image/DS.png";
import { LinkContainer } from "react-router-bootstrap";

export function NavigationBar() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={DS}
                        width="70"
                        height="60"
                        className="d-inline-block align-top"
                    />{' '}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">About Us</Nav.Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/1.1">Learner License</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.2">Driving License</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.3">Licence Renewal</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.4">duplicate License</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.5">choice Number</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.6">Green Tax </NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.7">International Driving license </NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.8">PUC</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.9">e-Challan</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.10">Vehicle Transfer</NavDropdown.Item>
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
                        <Nav.Link href="#Schoollocator">School Locater</Nav.Link>
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
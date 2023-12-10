import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { saveRegister } from "../Services/RegistrationApi";
import { useNavigate } from "react-router-dom";

export function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        gender: "",
        contactNumber: "",
        password: "",
        confirmPassword: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await saveRegister(formData);
            setFormData({
                name: "",
                email: "",
                gender: "",
                contactNumber: "",
                password: "",
                confirmPassword: ""
            });
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                navigate("/Login");
            }, 2000);
            console.log(result.message);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Container>
                <h1>Sign Up</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your full name" name="name" onKeyUp={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email address" name="email" onKeyUp={handleChange} />
                    </Form.Group>

                    <Form.Group controlId='gender' className="mb-2">
                        <Form.Label>Gender</Form.Label>
                        <Form.Check
                            type="radio"
                            label="Male"
                            name="gender"
                            value="male"
                            onChange={handleChange}
                        />
                        <Form.Check
                            type="radio"
                            label="Female"
                            name="gender"
                            value="female"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter your contact Number" name="contactNumber" onKeyUp={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Create Password" name="password" onKeyUp={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" name="currentPassword" onKeyUp={handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Register</Button>
                </Form>
                <Row className="mt-3">
                    <Col lg={4}>
                        {isSubmitted ? <Alert variant="success">Student Registered</Alert> : null}
                    </Col>
                </Row>
            </Container>
        </>
    );
}
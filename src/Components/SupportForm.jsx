
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { saveStudent } from '../Services/DrivingSchoolServices';

export const SupportForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    message : ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await saveStudent(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container style={{ marginTop: '40px', marginBottom: '40px' }}>
      <div>
        <h2>Support Form</h2>
        <Form onSubmit={handleSubmit} >

          <Form.Group controlId="firstName" className="mb-2">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="lastName" className="mb-2">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              name="lastName"
              required
            />
          </Form.Group>




          <Form.Group controlId="contact" className="mb-2">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your contact number"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </Form.Group>


          <Form.Group controlId="email" className="mb-2">
            <Form.Label>Email ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Email ID"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>


          <Form.Group controlId="message" className="mb-2">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter your message here"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};



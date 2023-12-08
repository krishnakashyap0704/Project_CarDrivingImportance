import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const RTORegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    licenseNumber: '',
    vehicleNumber: '',
    phoneNumber: '',
    email: '',
    city: '',
    state: '',

    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <Container className="mt-5 mb-5">
      <h2>RTO Registration Form</h2>
      <Form onSubmit={handleSubmit} >
        <h4 className="mt-4">Personal Information</h4>
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
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="dateOfBirth" className="mb-2">
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your date Of birth (dd/mm/yyyy)"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
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

        <h4 className="mt-4">Contact Information</h4>
        <Form.Group controlId="phone" className="mb-2">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your mobile number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="address" className="mb-2">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your permanent address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="email" className="mb-2">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <h4 className="mt-4">Vechicle Details</h4>
        <Form.Group controlId="vehicleNumber" className="mb-2">
          <Form.Label>Vehicle Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your vehicle number"
            name="vehicleNumber"
            value={formData.vehicleNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="model" className="mb-2">
          <Form.Label>Model of the Vehicle</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your vehicle model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="vehicleType" className="mb-2">
          <Form.Label>Type of Vehicle</Form.Label>
          <Form.Check
            type="radio"
            label="2-wheeler"
            name="vehicleType"
            value="2wheeler"
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            label="4-wheeler"
            name="vehicleType"
            value="4wheeler"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="declaration" className="mt-5">
          <Form.Check
            type="checkbox"
            label="I hereby declare and affirm that the information provided in this RTO Registration Form is true, correct, and complete to the best of my knowledge and belief. I understand that any false, misleading, or incomplete information may result in the rejection of my application."
            required
          />
        </Form.Group>

        {/* Add more Form.Group for additional fields */}
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default RTORegistrationForm;

import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export function DrivingSchoolRegistraction(){
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth :'',
        gender :'',
        contact :'',
        email :'',
        license :'',
        course :'',
        drivingexperience :''

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
    
    return(
        <Container className="mt-5 mb-5">
        <h2>Driving School Registration</h2>
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

        <Form.Group controlId="contact" className="mb-2">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter conntact number"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </Form.Group>

        
        <Form.Group controlId="email" className="mb-2">
          <Form.Label>Email ID</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your Email ID"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="license" className="mb-2">
          <Form.Label>License Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your License Number"
            name="license"
            value={formData.license}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId='course' className="mb-2">
          <Form.Label>Gender</Form.Label>
          <Form.Check
            type="radio"
            label="Basic"
            name="course"
            value="basic"
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            label="Advanced"
            name="course"
            value="advanced"
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            label="Defensive Driving"
            name="course"
            value="defensivedriving"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="drivingexperience" className="mb-2">
          <Form.Label>Previous Driving Experience</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Your Previous Driving Experience in Years"
            name="drivingexperience"
            value={formData.drivingexperience}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="declaration" className="mt-5">
          <Form.Check
            type="checkbox"
            label="I, hereby apply for enrollment in the driving school program. I confirm that all the information provided is accurate, and I am committed to following the rules and regulations of the Driving Name."
            required
          />
        </Form.Group>


        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    );
}
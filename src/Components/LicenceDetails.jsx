import { Button, Col, Container, Form, Table } from "react-bootstrap";
import { useState } from "react";
import { DetailsOfLicence } from '../Services/DrivingSchoolServices';

export function LicenceDetails() {
    const [formData, setFormData] = useState({contact:""});
    const [data, setData] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await DetailsOfLicence(formData.contact);
            console.log(result);
            setData(result.data.user);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ height: '56vh' }}>
            <Col lg-6>
                <Form onSubmit={handleSubmit} style={{ width: '300px' }}>
                    <h2 className="mb-3">Know your Licence Details</h2>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" name="contact" placeholder="Enter your Phone Number" onChange={handleChange} />
                    </Form.Group><br/>

                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
            </Col>
            <Col lg-6>
                {data && (          //conditional Rendering 
                    <Table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Date Of Birth</th>
                                <th>Phone</th>
                                <th>Licence Number</th>
                                <th>Driving Experince</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.dateOfBirth}</td>
                                <td>{data.contact}</td>
                                <td>{data.license}</td>
                                <td>{data.drivingexperience}</td>
                                <td>{data.email}</td>
                            </tr>
                        </tbody>
                    </Table>
                )}
            </Col>
        </Container>
    );
}
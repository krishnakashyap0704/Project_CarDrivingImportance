import { Button, Col, Container, Form, Table } from "react-bootstrap";
import { useState } from "react";
import { fetchDetails } from '../Services/LicenceService';

export function VehicleDetails() {
    const [formData, setFormData] = useState({vehicleNumber: "" });
    const [data, setData] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await fetchDetails(formData.vehicleNumber);
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
                    <h2 className="mb-3">Know your Vehicle Details</h2>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Vehicle Number</Form.Label>
                        <Form.Control type="text" name="vehicleNumber" placeholder="Enter your Vechile Number" onChange={handleChange} />
                    </Form.Group><br />

                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
            </Col>
            <Col lg-6>
                {data && (
                    <Table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Vehicle Number</th>
                                <th>Model</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.phoneNumber}</td>
                                <td>{data.vehicleNumber}</td>
                                <td>{data.model}</td>
                                <td>{data.vehicleType}</td>
                            </tr>
                        </tbody>
                    </Table>
                )}
            </Col>
        </Container>
    );
}
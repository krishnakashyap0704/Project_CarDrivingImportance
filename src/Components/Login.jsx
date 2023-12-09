import { Button, Container, Form } from "react-bootstrap";

export function Login() {
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ height: '56vh' }}>
            <Form style={{ width: '300px' }}>
                <h2 className="mb-3">Login</h2>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group><br/>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            
        </Container>
    );
}
import { Card, Col, Container, Row } from "react-bootstrap";

export function AboutUs(){
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={4}>
                    <Card>
                            {/* <Card.Img src={} width="100" height="180"/> */}
                            <Card.Body>
                                <Card.Title>IT'S TIME TO ERASE COMMON DRIVING MISTAKES</Card.Title>
                                <Card.Text>
                                Mistakes that most people make while driving
                                </Card.Text>
                                <p>We must admit that each and every one of us is guilty of making errors while driving.</p>
                                {/* <Button variant="primary">More</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                    <Card >
                            {/* <Card.Img src={} width="100" height="180"/> */}
                            <Card.Body>
                                <Card.Title>IT'S TIME TO ERASE COMMON DRIVING MISTAKES</Card.Title>
                                <Card.Text>
                                Mistakes that most people make while driving
                                </Card.Text>
                                <p>We must admit that each and every one of us is guilty of making errors while driving.</p>
                                {/* <Button variant="primary">More</Button> */}
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col lg={4}>
                        <Card >
                            {/* <Card.Img src={} width="100" height="180"/> */}
                            <Card.Body>
                                <Card.Title>IT'S TIME TO ERASE COMMON DRIVING MISTAKES</Card.Title>
                                <Card.Text>
                                Mistakes that most people make while driving
                                </Card.Text>
                                <p>We must admit that each and every one of us is guilty of making errors while driving.</p>
                                {/* <Button variant="primary">More</Button> */}
                            </Card.Body>
                        </Card>
                        </Col>
                </Row>
            </Container>
        </div>
    );
}
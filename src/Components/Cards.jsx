import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import drivinglesson from "./Image/drivinglesson.jpg";
import donot from "./Image/donot.jpg";
import international from "./Image/international.jpg";
import learner from "./Image/learner.jpg";

export function Cards() {
    return (

        <div>
            <h3 className="text-center">License Related Information</h3>
            <p className="text-center">Various services related to new/old driving licence or learner's licence like Appointment Booking, Duplicate driving licence, Application Status, Online test for learner's licence, etc.</p>
            <Container>
                <h1>ESSENTIAL DRIVING TIPS</h1>
                
                <Row className="justify-content-md-center">
                    <Col lg={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img  src={drivinglesson} />
                            <Card.Body>
                                <Card.Title>DON'T SKIP THESE DRIVING TIPS</Card.Title>
                                <Card.Text>
                               10 Practices that make you a safer Driver
                               </Card.Text>
                               <p>Although the 2020 lockdown resulted in a 49.47% fall in the number of lives lost in road accidents</p>
                                <Button variant="primary">More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img src={donot}/>
                            <Card.Body>
                                <Card.Title>IT'S TIME TO ERASE COMMON DRIVING MISTAKES</Card.Title>
                                <Card.Text>
                                Mistakes that most people make while driving
                                </Card.Text>
                                <p>We must admit that each and every one of us is guilty of making errors while driving. The lessons...</p>
                                <Button variant="primary">More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img src={international}/>
                            <Card.Body>
                                <Card.Title>LEARN HOW TO HOLD A INTERNATIONAL DRIVING LICENSE</Card.Title>
                                <Card.Text>
                                International Driving License: Here's What You Need to Know
                                </Card.Text>
                                <p>Whether for travelling and exploring or work purposes, there may be times when you have to get behi...</p>
                                <Button variant="primary">More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img src={learner}/>
                            <Card.Body>
                                <Card.Title>MOCK LEARNER LICENSE TEST</Card.Title>
                                <Card.Text>
                                Explore the plethora of Questions in Learner License
                                </Card.Text>
                                <p>To 'Clear' the learners license test you must know the traffic signs and traffic rules  </p>
                                <Button variant="primary">More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>

    );

}
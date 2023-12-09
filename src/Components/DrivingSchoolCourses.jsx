import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Course1 from "./Image/Course1.png";
import Course2 from "./Image/Course2.png";
import Course3 from "./Image/Course3.png";


export function DrivingSchoolCourses() {
    return (

        <div className="mt-4 mb-4">
            <h4 className="text-center class3"><i>CHOOSE YOUR COURSE TO DRIVE WITH CONFIDENCE ON THE ROAD</i></h4>
            <p className="text-center">Our meticulously designed courses help transform beginners into skilled and confident drivers. Choose your desired course from a range of driving training courses and master the skill of driving</p>
            <Container>
     
                <Row className="justify-content-md-center">
                    <Col lg={4}>
                        <Card >
                            <Card.Img variant="top" src={Course1} style={{ height: '177px' }}/>
                            <Card.Body>
                                <Card.Title>Basic Driving Course</Card.Title>
                                <Card.Text>
                                    Learn the fundamentals of driving.
                                </Card.Text>
                                <div>Number of Modules : 5</div>
                                <div>Number of Hours   : 10</div>
                               
                                    <div>Fees : Rs.5500</div>
                                    
                                <Button variant="primary" className='mt-3' href='/DrivingSchoolRegistration'>Enroll Now</Button>



                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            <Card.Img variant="top" src={Course2} style={{ height: '177px' }} />
                            <Card.Body>
                                <Card.Title>Advanced Driving Course</Card.Title>
                                <Card.Text>
                                    Take your driving skills to the next level.
                                </Card.Text>
                                <div>Number of Modules : 8</div>
                                <div>Number of Hours   : 16</div>
                                <div>Fees : Rs.9000</div>
                                
                                <Button variant="primary"  className='mt-3' href='/DrivingSchoolRegistration'>Enroll Now</Button>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            <Card.Img variant="top" src={Course3} style={{ height: '177px' }} />
                            <Card.Body>
                                <Card.Title>Defensive Driving Course</Card.Title>
                                <Card.Text>
                                    Learn defensive driving techniques for safer roads.
                                </Card.Text>
                                <div>Number of Modules : 6</div>
                                <div>Number of Hours    : 12</div>
                                <div>Fees : Rs.7500</div>

                                <Button variant="primary"  className='mt-3' href='/DrivingSchoolRegistration'>Enroll Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>

        </div>

    );

}
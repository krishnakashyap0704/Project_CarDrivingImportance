import { Card, Col, Container, Row } from "react-bootstrap";
import About1 from "./Image/About1.jpg";
import About2 from "./Image/About2.jpg";
import About3 from "./Image/About3.jpg";


export function AboutUs() {
    return (
        <Container style={{ height: '100vh' }}>

            <Row className="justify-content-md-center">
                <Col lg={3}>
                    <Card style={{ height:'34rem', marginTop:'90px' }}>
                        <Card.Img variant="top" src={About1} style={{ width:'300px', height: '400px' }} />
                        <Card.Body>
                            <Card.Title>Tejaswini Maskare</Card.Title>
                            <div>Email : tejumaskare2001@gmail.com</div>
                            <div>Phone : 9021399249</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card style={{ height:'34rem', marginTop:'90px' }}>
                        <Card.Img variant="top" src={About2} style={{ width:'300px', height: '400px'}} />
                        <Card.Body>
                            <Card.Title>Krishna Kashyap</Card.Title>
                            <div>Email : kashyapanish11@gmail.com</div>
                            <div>Phone : 7389304143</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card style={{ height:'34rem', marginTop:'90px' }}>
                        <Card.Img variant="top" src={About3} style={{ width:'300px', height: '400px' }} />
                        <Card.Body>
                            <Card.Title>Piyush Harne</Card.Title>
                            <div>Email : piyushharne26@gmail.com</div>
                            <div>Phone : 8408855958</div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    //     <div className="mt-4 mb-4">
    //     <h4 className="text-center class3"><i></i></h4>
    //     <Container>
    //     <Alert variant="primary">
    //         <h1>About Us</h1>
    //     </Alert>
    //     <Row>
    //         <Col lg={4}>
    //         <h3>Tejaswini Maskare</h3>  
    //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur ea ratione, inventore consectetur eos asperiores quos, error dolore natus possimus, vel cupiditate magnam hic? Consectetur dolor vero impedit natus!</p>
    //         </Col>

    //         <Col lg={4}>
    //         <h3>Krishna Kashyap</h3> 
    //         <p>jbhveadjbjkavhav</p>  
    //         </Col>


    //         <Col lg={4}>
    //         <h3>Piyush Harne</h3>
    //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio laboriosam architecto qui facilis maxime soluta hic nemo sed. Adipisci cumque animi maiores fugit? Molestias voluptates consequuntur iste natus quaerat.</p>
    //         </Col>
    //     </Row>
    // </Container>

    // </div >
    );
}
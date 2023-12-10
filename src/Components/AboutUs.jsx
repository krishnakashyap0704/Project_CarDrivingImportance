import { Alert, Col, Container, Row } from "react-bootstrap";

export function AboutUs(){
    return (
        <div className="mt-4 mb-4">
        <h4 className="text-center class3"><i></i></h4>
        <Container>
        <Alert variant="primary">
            <h1>About Us</h1>
        </Alert>
        <Row>
            <Col lg={4}>
            <h3>Tejaswini Maskare</h3>  
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur ea ratione, inventore consectetur eos asperiores quos, error dolore natus possimus, vel cupiditate magnam hic? Consectetur dolor vero impedit natus!</p>
            </Col>

            <Col lg={4}>
            <h3>Krishna Kashyap</h3> 
            <p>jbhveadjbjkavhav</p>  
            </Col>

            
            <Col lg={4}>
            <h3>Piyush Harne</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio laboriosam architecto qui facilis maxime soluta hic nemo sed. Adipisci cumque animi maiores fugit? Molestias voluptates consequuntur iste natus quaerat.</p>
            </Col>
        </Row>
    </Container>

    </div>
    );
}
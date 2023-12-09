import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
export function DrivingSafetyTips() {
  return (
    <Container>
      <h3 className="text-center" >Driving Safety Tips</h3>
      
      <Row className="justify-content-between" >
       

      
        <Col lg="6" className='c1'>
          <h4>Focus on driving</h4>
          Ignoring distractions while driving and maintaining focus on the road is key to driving safely. In order to keep focused while driving, you should follow these steps:
          <ul>
            <li> Keep 100% of your attention on driving at all times - no multi-tasking.</li>
            <li>Don’t use your phone or any other electronic device while driving.</li>
            <li>Slow down. Speeding gives you less time to react and increases the severity of an accident.</li>
          </ul>
        </Col>
        
        <Col lg="6" className='c1' >
          <h4>Defensive driving</h4>
          What is defensive driving? Defensive driving is when motorists use accident-preventing techniques with a focus on driving safely. You may even be eligible for a defensive driving discount. To practice defensive driving:
          <ul>
            <li>Be aware of what other drivers around you are doing, and expect the unexpected.</li>
            <li>
              Assume other motorists will do something crazy, and always be prepared to avoid it.</li>
            <li>
              Keep a 2-second cushion between you and the car in front of you.</li>
            <li>Make that 4 seconds if the weather is bad.</li>
          </ul>
        </Col>
      </Row>

      <Row className="justify-content-between">
        <Col lg="6" className='c1'>
          <h4>Make a safe driving plan</h4>
          <ul>
          <li>Build time into your trip schedule to stop for food, rest breaks, phone calls or other business.</li>
          <li>Adjust your seat, mirrors, and climate controls before putting the car in gear.</li>
          <li>Pull over to eat or drink. It takes only a few minutes.</li>
          </ul>
        </Col>
        <Col lg="6" className='c1'>
          <h4>Practice safety</h4>
          <ul>
            <li>Secure cargo that may move around while the vehicle is in motion.</li>
            <li>Don’t attempt to retrieve items that fall to the floor.</li>
            <li>Have items needed within easy reach – such as toll fees, toll cards and garage passes.</li>
            <li>Always wear your seat belt and drive sober and drug-free.</li>
          </ul>
        </Col>
      </Row>
    </Container>


  );
}
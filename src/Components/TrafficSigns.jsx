import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import Button from 'react-bootstrap/Button;
import Card from 'react-bootstrap/Card';
import sign1 from "./Image/sign1.jpg";
import sign2 from "./Image/sign2.jpg";
import sign3 from "./Image/sign3.jpg";
import sign4 from "./Image/sign4.jpg";
import sign5 from "./Image/sign5.jpg";
import sign6 from "./Image/sign6.jpg";
import sign7 from "./Image/sign7.jpg";
import sign8 from "./Image/sign8.jpg";
import sign9 from "./Image/sign9.jpg";
import sign10 from "./Image/sign10.jpg";
import sign11 from "./Image/sign11.jpg"
import sign12 from "./Image/sign12.jpg";

import './style.css'

export function TrafficSigns() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='traffic'>

            <h4 className="text-center">TRAFFIC SIGNS</h4>
            <Carousel responsive={responsive}>
                <div className='cl2'><Card >
                    <Card.Img variant="top" src={sign1} />


                </Card></div>
                <div className='cl2'>
                    <Card >
                        <Card.Img variant="top" src={sign2} />

                    </Card>
                </div>
                <div className='cl2'>
                    <Card >
                        <Card.Img variant="top" src={sign3} />

                    </Card>
                </div>
                <div className='cl2'>
                    <Card >
                        <Card.Img variant="top" src={sign4} />

                    </Card>
                </div>
                <div className='cl2'>
                    <Card >
                        <Card.Img variant="top" src={sign5} />

                    </Card>
                </div>
                <div className='cl2'>
                    <Card >
                        <Card.Img variant="top" src={sign6} />

                    </Card>
                </div>
 
                <div className='cl2'>
                    <Card >
                        <Card.Img variant="top" src={sign7} />

                    </Card>
                </div>
                <div className='cl2'>
                    <Card >
                        <Card.Img variant="top" src={sign8} />

                    </Card>
                </div>
                <div className='cl2'>
                    <Card >
                        <Card.Img variant="top" src={sign9} />

                    </Card>
                </div>

                <div className='cl2'>
                    <Card >
                        <Card.Img variant="top" src={sign10} />

                    </Card>
                </div>
                <div className='cl2'>
                    <Card >
                        <Card.Img variant="top" src={sign11} />

                    </Card>
                </div>
                <div className='cl2'>
                    <Card >
                        <Card.Img variant="top" src={sign12} />

                    </Card>
                </div>
            </Carousel>
        </div>



    );
}
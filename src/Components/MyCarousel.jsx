import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import carousel1 from "./Image/carousel1.jpg";
import carousel2 from "./Image/carousel2.jpg";

export function MyCarousel() {
    return (
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block mx-auto" // Center the image
                    style={{ maxWidth: '70%' }} // Set a maximum width for the image
                    src={carousel1}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block mx-auto" // Center the image
                    style={{ maxWidth: '70%' }} // Set a maximum width for the image
                    src={carousel2}
                    alt="Second slide"
                />

            </Carousel.Item>

            

        </Carousel>
        </div>
    );
}


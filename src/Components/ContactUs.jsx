
import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import './style.css';

export function ContactUs() {
    return (
        <Container className='mt-5 mb-5'>
            <div className="cus1 cus2">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />Email
                <div>CarDrivingAndRTOservices@gmail.com</div>
            </div>
            <div className="cus1">
                <FontAwesomeIcon icon={faPhone} className="icon" />Contact No
                <div>9856789456</div>
            </div>
            <div className="cus1 cus3">
                <FontAwesomeIcon icon={faGlobe} className="icon" />Website
                <div>CarDrivingAndRTOservices.com</div>
            </div>
        </Container>
    );
}

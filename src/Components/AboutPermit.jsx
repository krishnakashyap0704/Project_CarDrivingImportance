
import React from 'react';
import { Container } from 'react-bootstrap';

export const AboutPermit = () => {
  return (
    <Container style={{ marginTop:'40px', marginBottom: '40px'}}>
    <div>
      <h1>Driving Permit Information</h1>
      <p>
        A driving permit is often the first step towards obtaining a full driver's license. 
        Here's an overview of the process and requirements for getting a driving permit.
      </p>
      <h4>Requirements:</h4>
      <ul>
        <li>Minimum age requirement, typically 16 or 17 years old.</li>
        <li>Completion of a state-approved driver's education course.</li>
        <li>Passing a written test on basic traffic rules and regulations.</li>
        <li>Parental or guardian consent for applicants under a certain age.</li>
      </ul>
      <h4>Process:</h4>
      <ol>
        <li>Enroll in a certified driver's education program.</li>
        <li>Study the driver's handbook and prepare for the written permit test.</li>
        <li>Visit the local DMV to take the written permit test.</li>
        <li>Upon passing the test, receive a learner's permit.</li>
        <li>Practice driving with a licensed adult in the car.</li>
        <li>Complete the required practice hours as mandated by your state.</li>
        <li>Schedule and pass the practical driving test for a full license.</li>
      </ol>
      <p>
        Keep in mind that specific requirements and procedures may vary by location, so it's essential to check with your local DMV for accurate and up-to-date information.
      </p>
    </div>
    </Container>
  );
};



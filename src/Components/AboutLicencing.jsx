import React from 'react';
import { Container } from 'react-bootstrap';

export const AboutLicencing = () => {
  return (
    <Container style={{ marginTop:'40px', marginBottom: '40px'}}>
      <div>
        <h1>About Driving License</h1>
        <p>
          In order to obtain a driving license, you need to follow certain steps and meet specific requirements.
        </p>
        <h4>Requirements:</h4>
        <ul>
          <li>Be of a certain age, usually 18 or older.</li>
          <li>Pass a written test on traffic laws.</li>
          <li>Pass a practical driving test.</li>
          <li>Provide necessary documentation, such as proof of identity and residence.</li>
        </ul>
        <h4>Process:</h4>
        <ol>
          <li>Visit your local DMV (Department of Motor Vehicles).</li>
          <li>Fill out the application form for a driving license.</li>
          <li>Study for and take the written test.</li>
          <li>Schedule and pass the practical driving test.</li>
          <li>Submit required documentation and pay the necessary fees.</li>
          <li>Receive your driving license!</li>
        </ol>
        <p>
          It's important to check with your local DMV for specific requirements and procedures as they may vary.
        </p>
      </div>
    </Container>
  );
};


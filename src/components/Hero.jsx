import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import background from '../assets/pexels-lukas-574087.jpg';

function HeroSection() {
  const backgroundImg = {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '10%',
  };
  
  const translucentBox = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: '20px',
    borderRadius: '10px',
  };

  return (
    <div style={backgroundImg}>
      <div className="d-inline-flex mt-5">
        <Container style={translucentBox} className="text-start">
          <h2 className="mb-2">Welcome to My Portfolio Website!</h2>
          <h4>I hope you enjoy your stay.</h4>
          <Button variant="outline-dark">Get Started</Button>
          <Button variant="link" className="ms-2 text-decoration-none text-dark">Learn More</Button>
        </Container>
      </div>
    </div>
  );
}

export default HeroSection;
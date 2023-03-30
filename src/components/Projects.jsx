import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

import img1 from '../assets/pexels-markus-spiske-177598.jpg';
import img2 from '../assets/pexels-pixabay-270348.jpg';
import img3 from '../assets/pexels-pixabay-270373.jpg';

function MyProjects() {
  return (
    <div className="py-5 text-dark bg-info">
        <Container>
            <h3 className="text-center mb-3">My Projects</h3>
            <h5 className="text-center mb-5">Check out my projects below!</h5>
            <Carousel>
                <Carousel.Item>
                <img
                    className="d-block mx-auto"
                    style={{ height: '75vh' }}
                    src={img1}
                    alt="First Item"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block mx-auto"
                    style={{ height: '75vh' }}
                    src={img2}
                    alt="Second Item"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block mx-auto"
                    style={{ height: '75vh' }}
                    src={img3}
                    alt="Third Item"
                />
                </Carousel.Item>
            </Carousel>
        </Container>
    </div>
  )
}

export default MyProjects;
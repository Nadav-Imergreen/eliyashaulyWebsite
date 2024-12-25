import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Card } from 'react-bootstrap';
import image2021 from '../images/www.png';
import image2022 from '../images/2022.jpeg';
import image2023 from '../images/2023.jpeg';
import '../style.css';

function Gallery() {
    const years = [
        { year: 2021, imgSrc: image2021 },
        { year: 2022, imgSrc: image2022 },
        { year: 2023, imgSrc: image2023 },
        { year: 2024, imgSrc: '/path/to/image2024.jpg' },
    ];

    return (
        <Container className="my-4">
            <Row className="justify-content-center text-center">
                <Col>
                    <p className="custom-font">
                        Eliya Shauly
                    </p>
                </Col>
            </Row>
            <Row className="mt-4 d-flex justify-content-center">
                {years.map(({ year, imgSrc }) => (
                    <Col xs={6} sm={4} md={3} className="text-center" key={year}>
                        <Card className="mb-3" style={{ cursor: 'pointer' }}>
                            <Link to={`/gallery/${year}`} style={{ textDecoration: 'none' }}>
                                <Card.Img variant="top" src={imgSrc} alt={`Year ${year}`} />
                                <Card.Body>
                                    <Card.Title className="custom-font">{year}</Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Gallery;



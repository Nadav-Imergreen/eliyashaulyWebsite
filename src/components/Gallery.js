import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Card } from 'react-bootstrap';
import image2021 from '../images/www.png';

function Gallery() {
    const years = [
        { year: 2021, imgSrc: image2021 },
        { year: 2022, imgSrc: '/path/to/image2022.jpg' },
        { year: 2023, imgSrc: '/path/to/image2023.jpg' },
        { year: 2024, imgSrc: '/path/to/image2024.jpg' },
    ];

    return (
        <Container className="my-4">
            <Row className="justify-content-center text-center">
                <Col>
                    <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '50px', fontWeight: 'bold' }}>
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
                                    <Card.Title>{year}</Card.Title>
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



import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Card } from 'react-bootstrap';
import image2021 from '../images/2021.jpeg';
import image2022 from '../images/2022.jpeg';
import image2023 from '../images/2023.jpeg';
import image2024 from '../images/2024.jpeg';
import '../style.css';

function Gallery() {
    const years = [
        { year: 2021, imgSrc: image2021 },
        { year: 2022, imgSrc: image2022 },
        { year: 2023, imgSrc: image2023 },
        { year: 2024, imgSrc: image2024 },
    ];

    return (
        <Container className="mt-xl-5">
            <Row className="mt-4 d-flex justify-content-center" >
                {years.map(({ year, imgSrc }) => (
                    <Col xs={6} sm={4} md={3} className="text-center" key={year}>
                        <Card className="mb-3" style={{ cursor: 'pointer' }}>
                            <Link to={`/gallery/${year}`} style={{ textDecoration: 'none' }}>
                                <Card.Img
                                    variant="top"
                                    src={imgSrc}
                                    alt={`Year ${year}`}
                                    className="gallery-image"
                                />
                                <Card.Body>
                                    <Card.Title className="custom-font fw-bold">{year}</Card.Title>
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



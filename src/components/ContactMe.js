import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../style.css';

const ContactMe = () => {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h2 className="text-center mb-4" >Contact the Artist</h2>
                    <p className="contact-font">
                        Have questions, inquiries, or just want to say hey? Feel free to reach out using the provided contact details.
                    </p>
                    <div className="mt-4 text-center">
                        <p>Email: <a href="mailto:artist@example.com">artist@example.com</a></p>
                        <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
                        <p>Follow on Instagram: <a href="https://instagram.com/artist" target="_blank" rel="noopener noreferrer">@artist</a></p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactMe;

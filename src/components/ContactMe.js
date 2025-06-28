import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../style.css';
import FB from '../images/facebook.png';
import NSG from '../images/instagram.png';

const ContactMe = () => {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h2
                        style={{color: "black", fontFamily: "Cochin", textAlign: "center"}}
                        className="mb-5"
                    >
                        Contact the Artist
                    </h2>
                    <p className="contact-font">
                        Have questions, or just want to say hey? Feel free to reach out using the provided contact
                        details.
                    </p>
                    <div className="mt-4 text-center">
                        <p style={{color: "black", fontFamily: "Cochin"}}>
                            Email: <a href="mailto:eliyashauly@gmail.com"
                                      style={{color: "black"}}>eliyashauly@gmail.com</a>
                        </p>

                        <a
                            href="https://www.facebook.com/share/18RG6nHHGg/?mibextid=wwXIfr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="me-3" // Bootstrap: margin end (right) on larger screens
                        >
                            <img src={FB} alt="facebook logo" width="35" height="32"/>
                        </a>

                        <a
                            href="https://www.instagram.com/eliya_shauly/profilecard/?igsh=MXJmNmpxYzY5OWJkZA=="
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={NSG} alt="instagram logo" width="35" height="32"/>
                        </a>

                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactMe;

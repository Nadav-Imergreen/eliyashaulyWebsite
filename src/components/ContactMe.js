import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../style.css';
import FB from '../images/FB.png';
import NSG from '../images/NSG.png';

const ContactMe = () => {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h2 style={{color: "black", fontFamily: "Cochin", textAlign: "center"}} >Contact the Artist</h2>
                    <p className="contact-font">
                        Have questions, or just want to say hey? Feel free to reach out using the provided contact details.
                    </p>
                    <div className="mt-4 text-center">
                        <p style={{color: "darkblue", fontFamily: "Cochin"}}>
                            Email: <a href="mailto:eliyashauly@gmail.com"
                                      style={{color: "darkblue"}}>eliyashauly@gmail.com</a>
                        </p>

                        <p style={{color: "darkblue", fontFamily: "Cochin"}}>
                            WhatsApp: <a href="https://wa.me/0544497774"
                                         style={{color: "darkblue"}}>054-4497774</a>
                        </p>


                        <a href="https://www.facebook.com/share/18RG6nHHGg/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                            <img src={FB} alt="facebook logo" width="70" height="40"/>
                        </a>

                        <a href="https://www.instagram.com/eliya_shauly/profilecard/?igsh=MXJmNmpxYzY5OWJkZA==" target="_blank" rel="noopener noreferrer">
                            <img src={NSG} alt="instegram logo" width="70" height="63"/>
                        </a>

                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactMe;

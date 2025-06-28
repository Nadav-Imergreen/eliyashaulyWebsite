import React from "react";
import { Container } from "react-bootstrap";
import '../style.css';

function About() {
    return (
        <Container className="about-container">
            <h2 className="section-title">About Me</h2>
            <p className="text-content">
                Born in Israel in 2001, lived and work in Yahod. Received my BFA fine-art from Bezalel Academy of Art and Design Jerusalem (2023).
            </p>
            <h2 className="section-title">Artist Statement</h2>
            <p className="about-content">
                My works emerge from a process of staging and photography, in which I explore the connection between the body and its environment, between the human and the material. I focus on moments that exist "in between", ambiguous and emotionally charged situations where the body meets stone, metal, or another material, creating a deep and physical dialogue with its surroundings.
            </p>
            <p className="about-content">
                I concentrate on small moments of interaction, sometimes everyday but always filled with emotional tension, whether it is a body lying on cold metal, leaning on an old tractor, or surrendering to the weight of the day in a simple chair. Through my paintings, I seek to capture these moments and evoke a feeling that cannot be described in words, a raw emotion that invites the viewer to pause, feel, and reflect.
            </p>
            <p className="about-content">
                My process begins with staging moments where the body and the environment are intertwined, turning them into an open interpretive space through color, composition, and visual tension. I create scenes that place the body in unexpected contexts, provoking feelings of intimacy and detachment, fragility and strength.
            </p>
            <p className="about-content">
                Ultimately, my paintings are not only visual representations of moments but an invitation to deep emotional reflection and questions about the connections between humans, material, and sensation.
            </p>
        </Container>
    );
}

export default About;

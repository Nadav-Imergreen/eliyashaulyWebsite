import React from "react";
import { Card, Col } from "react-bootstrap";

function ImageCard({ image }) {
    return (
        <Col>
            <Card className="h-100">
                <Card.Img
                    variant="top"
                    src={image.url}
                    alt={image.name || "Image"}
                    style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain", // Ensures the entire image fits within the card
                        objectPosition: "center" // Centers the image
                    }}
                />
                <Card.Body>
                    <Card.Title>{image.name || "Untitled"}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ImageCard;

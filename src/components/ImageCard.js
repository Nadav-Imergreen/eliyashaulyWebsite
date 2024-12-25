import React from "react";
import { Card, Col ,Row} from "react-bootstrap";
import '../style.css';
function ImageCard({ image }) {
    return (
        <Col>
            <Row>
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
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="ander-card-titel-font">{image.name || "Untitled"}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="ander-card-description-font">{image.description || "Untitled"}</p>
                </Col>
            </Row>
        </Col>
    );
}

export default ImageCard;

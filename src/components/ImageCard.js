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
                            alt={"eliya shauly" + image.name || "eliya shauly Image"}
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
                    <p className="ander-card-description-font">{image.description || "Oil on canvas, 80x60 cm"}</p>
                </Col>
            </Row>
        </Col>
    );
}

export default ImageCard;

import React, {useEffect, useRef, useState} from "react";
import { Card, Col ,Row} from "react-bootstrap";
import '../style.css';

function ImageCard({ image, onLoadDimensions}) {
    const imgRef = useRef(null);
    const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

    useEffect(() => {
        if (imgRef.current) {
            const height = imgRef.current.naturalHeight;
            const width = imgRef.current.naturalWidth;
            setDimensions({ height, width });

            if (onLoadDimensions) {
                onLoadDimensions(image.id, width, height);
            }
        }
    }, []);


    return (
        <Col>
            <Row>
                <Col>
                    <Card className="h-100">
                        <Card.Img
                            ref={imgRef}
                            variant="top"
                            src={image.url}
                            alt={"eliya shauly" + image.name || "eliya shauly Image"}
                            style={{ maxWidth: '100%' }}
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

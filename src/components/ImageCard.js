import { useRef, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../style.css";

function ImageCard({ image, onLoadDimensions }) {
  const imgRef = useRef(null);
  const [size, setSize] = useState({ width: null, height: null });

  const handleImageLoad = () => {
    if (imgRef.current) {
      const naturalWidth = imgRef.current.naturalWidth;
      const naturalHeight = imgRef.current.naturalHeight;

      setSize({ width: naturalWidth, height: naturalHeight });

      if (onLoadDimensions) {
        onLoadDimensions(image.id, naturalWidth, naturalHeight);
      }
    }
  };

  return (
    <Col>
      <Row>
        <Col>
          <Card className="h-100">
            <Card.Img
              ref={imgRef}
              variant="top"
              src={image.url}
              alt={"eliya shauly" + (image.name || " Image")}
              onLoad={handleImageLoad}
              style={{ maxWidth: "100%" }}
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
          <p className="ander-card-description-font">
            {image.description || "Oil on canvas, 80x60 cm"}
          </p>
        </Col>
      </Row>
    </Col>
  );
}

export default ImageCard;

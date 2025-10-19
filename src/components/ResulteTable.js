import React, { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import ImageCard from "./ImageCard";
import CustomModal from "./CustomModal";

function ResultsTable({ searchResults }) {
  const [imageSizes, setImageSizes] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleLoadDimensions = (id, width, height) => {
    setImageSizes((prev) => ({
      ...prev,
      [id]: { width, height },
    }));
  };

  const handleSelectImage = (index) => {
    setSelectedIndex(index);
  };

  // sort results before render
  const sortedResults = [...searchResults].sort((a, b) => a.index - b.index);

  return (
    <>
      <Container>
        <Row className="g-4">
          {sortedResults.map((image, index) => {
            const dimensions = imageSizes[image.id];
            const isWide = dimensions
              ? dimensions.width > dimensions.height
              : false;

            return (
              <Col
                key={image.id}
                xs={12}
                md={dimensions ? (isWide ? 12 : 6) : 6} // fallback to md=6 while waiting
                onClick={() => handleSelectImage(index)}
                style={{ cursor: "pointer" }}
              >
                <ImageCard
                  image={image}
                  onLoadDimensions={handleLoadDimensions}
                />
              </Col>
            );
          })}
        </Row>
      </Container>

      <CustomModal
        sortedResults={sortedResults}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </>
  );
}

export default ResultsTable;

import React, { useState } from "react";
import { Row, Container } from "react-bootstrap";
import ImageCard from "./ImageCard";
import { Modal, Button } from "react-bootstrap";

function ResultsTable({ searchResults }) {
    // Sort searchResults by the "index" field
    const sortedResults = [...searchResults].sort((a, b) => a.index - b.index);

    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleSelect = (index) => {
        setSelectedIndex(index);
    };

    const handleNext = () => {
        if (selectedIndex < sortedResults.length - 1) {
            setSelectedIndex(selectedIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
        }
    };

    return (
        <React.Fragment>
            <Container>
                <Row xs={1} sm={1} md={2} lg={2} className="g-4">
                    {sortedResults.map((image, index) => (
                        <div key={image.id} onClick={() => handleSelect(index)}>
                            <ImageCard image={image} />
                        </div>
                    ))}
                </Row>
            </Container>

            {/* Modal for Detailed View */}
            {selectedIndex !== null && (
                <Modal
                    show={true}
                    onHide={() => setSelectedIndex(null)}
                    centered
                    className="custom-modal"
                >
                    <Modal.Body style={{ position: "relative", padding: 0 }}>
                        {/* Left Arrow */}
                        <Button
                            variant="secondary"
                            onClick={handlePrevious}
                            disabled={selectedIndex === 0}
                            style={{
                                position: "absolute",
                                left: "-50px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                zIndex: 999,
                                borderRadius: "50%",
                                padding: "10px",
                            }}
                        >
                            &#8592; {/* Left arrow */}
                        </Button>

                        {/* Image */}
                        <img
                            src={sortedResults[selectedIndex].url}
                            alt={sortedResults[selectedIndex].name || "Image"}
                            style={{
                                display: "block",
                                maxWidth: "100%",
                                height: "auto",
                                margin: "0 auto",
                            }}
                        />

                        {/* Right Arrow */}
                        <Button
                            variant="secondary"
                            onClick={handleNext}
                            disabled={selectedIndex === sortedResults.length - 1}
                            style={{
                                position: "absolute",
                                right: "-50px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                zIndex: 999,
                                borderRadius: "50%",
                                padding: "10px",
                            }}
                        >
                            &#8594; {/* Right arrow */}
                        </Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <div style={{ textAlign: "center", width: "100%" }}>
                            <h5>{sortedResults[selectedIndex].name}</h5>
                            <p>{sortedResults[selectedIndex].description}</p>
                        </div>
                    </Modal.Footer>
                </Modal>
            )}
        </React.Fragment>
    );
}

export default ResultsTable;

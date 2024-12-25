import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ImageCard from "./ImageCard";
import { Modal, Button } from "react-bootstrap";
import { useState } from 'react';

function ResultsTable({ searchResults }) {


    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleSelect = (index) => {
        setSelectedIndex(index);
    };

    const handleNext = () => {
        if (selectedIndex < searchResults.length - 1) {
            setSelectedIndex(selectedIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
        }
    };

    return (
       <React.Fragment >
        <Container>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {searchResults.map((image, index) => (
                        <div onClick={() => handleSelect(index)}>
                            <ImageCard key={image.id} image={image} />
                        </div>
                ))}
            </Row>
            </Container>


            {/* Modal for Detailed View */}
            {selectedIndex !== null && (
                <Modal show={true} onHide={() => setSelectedIndex(null)} centered className="custom-modal">
                    <Modal.Body>
                        <img
                            src={searchResults[selectedIndex].url}
                            alt={searchResults[selectedIndex].name || "Image"}  
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <div style={{ position: "absolute", top: "100%", left: "0", zIndex: 999 }}>
                            <Button variant="secondary" onClick={handlePrevious} disabled={selectedIndex === 0}>
                                &#8592; {/* Left arrow */}
                            </Button>
                        </div>
                        <div style={{ textAlign: "center", width: "100%" }}>
                            <h5>{searchResults[selectedIndex].name}</h5>
                            <p>{searchResults[selectedIndex].description}</p>
                        </div>
                        <div style={{ position: "absolute", top: "100%", right: "0", zIndex: 999 }}>
                            <Button variant="secondary" onClick={handleNext} disabled={selectedIndex === searchResults.length - 1}>
                                &#8594; {/* Right arrow */}
                            </Button>
                        </div>

                    </Modal.Footer>
                </Modal>
            )}



        </React.Fragment>
    );
}

export default ResultsTable;

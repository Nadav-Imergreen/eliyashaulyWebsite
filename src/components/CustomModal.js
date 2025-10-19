import { Modal as BootstrapModal, Button } from "react-bootstrap";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function CustomModal({ sortedResults, selectedIndex, setSelectedIndex }) {
  const [touchStartX, setTouchStartX] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (Math.abs(deltaX) > 50) {
      deltaX > 0 ? handlePrevious() : handleNext();
    }

    setTouchStartX(null);
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
    <>
      {selectedIndex !== null && (
        <BootstrapModal
          show={true}
          onHide={() => setSelectedIndex(null)}
          centered
          fullscreen
          className="custom-modal"
        >
          <BootstrapModal.Body
            style={{
              position: "relative",
              padding: 0,
              backgroundColor: "white", // white background
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Left Arrow */}
            <Button
              variant="light"
              onClick={handlePrevious}
              disabled={selectedIndex === 0}
              style={styles.arrowButton("left")}
            >
              <FiArrowLeft size={28} />
            </Button>

            {/* Image */}
            <img
              src={sortedResults[selectedIndex].url}
              alt={sortedResults[selectedIndex].name || "Image"}
              style={{
                display: "block",
                maxWidth: "100vw",
                maxHeight: "90vh",
                objectFit: "contain",
                borderRadius: "12px",
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
              }}
            />

            {/* Right Arrow */}
            <Button
              variant="light"
              onClick={handleNext}
              disabled={selectedIndex === sortedResults.length - 1}
              style={styles.arrowButton("right")}
            >
              <FiArrowRight size={28} />
            </Button>
          </BootstrapModal.Body>

          <BootstrapModal.Footer
            style={{
              justifyContent: "center",
              backgroundColor: "#f8f9fa",
              textAlign: "center",
              flexDirection: "column",
            }}
          >
            <h5>{sortedResults[selectedIndex].name}</h5>
            <p style={{ marginBottom: 0 }}>
              {sortedResults[selectedIndex].description}
            </p>
          </BootstrapModal.Footer>
        </BootstrapModal>
      )}
    </>
  );
}

// 🎨 סגנון אחיד לחצים
const styles = {
  arrowButton: (side) => ({
    position: "absolute",
    top: "50%",
    [side]: "10px",
    transform: "translateY(-50%)",
    zIndex: 1000,
    borderRadius: "50%",
    padding: "12px",
    backgroundColor: "rgba(255,255,255,0.8)",
    border: "none",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  }),
};

export default CustomModal;

import React, { useState } from "react";
import { uploadImageToStorage, saveImageUrls } from "../services/imagesStorage";
import { Form, Button, Container, Alert, Row, Col } from "react-bootstrap";
import Loading from "./Loading";

const UploadPhoto = () => {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageName, setImageName] = useState("");
    const [imageDescription, setImageDescription] = useState("");
    const [imageYear, setImageYear] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const uploadFile = async () => {
        if (!imageUpload) {
            setError("Please select an image");
            setSuccess("");
            return;
        }

        try {
            setLoading(true);
            setError("");
            setSuccess("");

            // Upload image to storage and get URL
            const uploadedURL = await uploadImageToStorage(imageUpload);

            // Save image details (URL, name, and description) to Firestore
            const imageDetails = {
                url: uploadedURL,
                name: imageName || "Untitled",
                description: imageDescription || "No description",
                year: imageYear || 2024
            };
            await saveImageUrls(imageDetails);

            setSuccess("Image uploaded successfully!");
            setImageUpload(null);
            setImageName("");
            setImageDescription("");
        } catch (error) {
            setError("Error uploading file: " + error.message);
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <Container className="mt-5">
            <h2 className="mb-4 text-center">Upload Photo</h2>

            <Row className="justify-content-center">
                <Col md={6}>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {success && <Alert variant="success">{success}</Alert>}

                    <Form>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Select Image</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/png, image/jpeg"
                                onChange={(e) => setImageUpload(e.target.files[0])}
                            />
                        </Form.Group>

                        <Form.Group controlId="formImageName" className="mb-3">
                            <Form.Label>Image Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter a name for the image"
                                value={imageName}
                                onChange={(e) => setImageName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formImageDescription" className="mb-3">
                            <Form.Label>Image Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter a description for the image"
                                value={imageDescription}
                                onChange={(e) => setImageDescription(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formImageDescription" className="mb-3">
                            <Form.Label>Image year</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Enter a year for the image"
                                value={imageYear}
                                onChange={(e) => setImageYear(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" onClick={uploadFile}>
                            Upload
                        </Button>
                        {loading && <Loading />}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default UploadPhoto;
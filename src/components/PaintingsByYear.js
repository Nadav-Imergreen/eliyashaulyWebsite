import React, { useState, useEffect } from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {getImages} from '../services/imagesStorage';
import ErrorLine from './ErrorLine';
import Loading from './Loading';
import ResultsTable from './ResulteTable';
import { useParams } from 'react-router-dom';
import '../style.css';
function PaintingsByYear() {
    const { year } = useParams();
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch images on component load
    useEffect(() => {
        const fetchImages = async () => {

            setLoading(true);
            setError(null);

            try {
                const images = await getImages(year);
                setSearchResults(images);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, [year]);


    return (
        <React.Fragment>
            <hr style={{ margin: '2rem 0' }} />
            <Container className="my-4">
                <Row className="justify-content-center text-center">
                    <Col>
                        <p className="custom-font">
                            {year}
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {error ? (
                            <ErrorLine message={error} />
                        ) : loading ? (
                            <Loading />
                        ) : searchResults.length > 0 ? (
                            <ResultsTable searchResults={searchResults} />
                        ) : (
                            <p>No images found.</p>
                        )}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default PaintingsByYear;

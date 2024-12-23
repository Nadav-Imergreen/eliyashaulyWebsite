import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import Gallery from "./components/Gallery";
import PaintingsByYear from "./components/PaintingsByYear";
import UploadPhoto from "./components/UploadPhoto";
import About from "./components/About";
import './style.css';


function App() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="/"className="custom-font" >
                        Eliya Shauly</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/gallery">Paintings</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/upload">Upload Image</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<Gallery/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/gallery/:year" element={<PaintingsByYear/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/upload" element={<UploadPhoto/>}/>
            </Routes>
        </Router>
    );
}

export default App;


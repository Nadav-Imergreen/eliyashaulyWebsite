import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Gallery from "./components/Gallery";
import PaintingsByYear from "./components/PaintingsByYear";
import UploadPhoto from "./components/UploadPhoto";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import "./style.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="page-container">
      <Router>
        <Navbar
          variant="black"
          bg="white"
          expand="md"
          sticky="top"
          style={{ marginTop: "30px" }}
        >
          <Container>
            <Navbar.Brand href="/" className="custom-font fs-1">
              Eliya Shauly
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/gallery" className="navbar-font">
                  Works
                </Nav.Link>
                <Nav.Link href="/about" className="navbar-font">
                  About
                </Nav.Link>
                <Nav.Link href="/contact_me" className="navbar-font">
                  Contact Me
                </Nav.Link>
                {/*<Nav.Link href="/upload" className="custom-font" >Upload Image</Nav.Link>*/}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route
              path="/gallery/:year/:display"
              element={<PaintingsByYear />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact_me" element={<ContactMe />} />
            <Route path="/upload" element={<UploadPhoto />} />
          </Routes>
        </div>
        <footer className="rights_reserved-font">
          All rights reserved © 2025
        </footer>
      </Router>
    </div>
  );
}

export default App;

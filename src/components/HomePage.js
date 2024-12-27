import React from 'react';
import homeImage from '../images/homePhoto.png';

const HomePage = () => {
    return (
        <div style={{margin: 0, padding: 0}}>
            <a href="https://www.instagram.com/eliya_shauly/profilecard/?igsh=MXJmNmpxYzY5OWJkZA==" target="_blank"
               rel="noopener noreferrer">
                <img
                    src={homeImage}
                    alt="homepage photo"
                    style={{
                        width: "100vw", // Full width of the viewport
                        height: "100vh", // Full height of the viewport
                        objectFit: "cover", // Ensures the image covers the entire area
                    }}
                />
            </a>
        </div>
    );
};

export default HomePage;

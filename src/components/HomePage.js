import React from 'react';
import homeImage from '../images/homePhoto.png';

const HomePage = () => {
    return (
        <div style={{margin: 0, padding: 0}}>
                <img
                    src={homeImage}
                    alt="homepage photo"
                    style={{
                        width: "100vw", // Full width of the viewport
                        height: "100vh", // Full height of the viewport
                        objectFit: "cover", // Ensures the image covers the entire area
                    }}
                />
        </div>
    );
};

export default HomePage;

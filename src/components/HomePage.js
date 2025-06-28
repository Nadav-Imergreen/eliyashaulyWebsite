import React from 'react';
import homeImage from '../images/homePhoto.jpeg';

const HomePage = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '70vh',
                backgroundColor: 'white',
            }}
        >
            <img
                src={homeImage}
                alt="homepage"
                style={{
                    width: '50vw',   // smaller width
                    height: 'auto',  // keep aspect ratio
                    objectFit: 'contain', // make sure image isn't cropped
                    maxHeight: '60vh', // optional: limit height
                }}
            />
        </div>
    );
};

export default HomePage;

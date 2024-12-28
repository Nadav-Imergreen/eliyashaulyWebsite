import React from "react";
import '../style.css'; // Assuming you use this file for custom styles

function Loading() {
    return (
        <div className="loading-container">
            <div className="spinner-border text-primary custom-spinner" role="status"></div>
        </div>
    );
}

export default Loading;

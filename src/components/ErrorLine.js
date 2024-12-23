import React from "react";

function ErrorLine({ message }) {
    return (
        <div className="alert alert-danger" role="alert">
            {message}
        </div>
    );
}

export default ErrorLine;
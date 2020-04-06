import React from "react";
import "./error-indicator.css";
const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <div className="boom">Whoa!</div>
      <div className="info-text">
        Wheres something wrong with loading content on this page
      </div>
      <div className="support-text">
        We are working towards fixing that page back to normal state
      </div>
    </div>
  );
};
export default ErrorIndicator;

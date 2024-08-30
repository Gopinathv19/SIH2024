
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardComponent = ({ title, content, url }) => {
  const handleCardClick = () => {
    window.location.href = url; 
  };

  return (
    <div className="card mb-4" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className="card-header">
        <h5 className="card-title">{title}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

export default CardComponent;

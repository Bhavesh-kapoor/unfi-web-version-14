// components/ImageModal.js

import React from 'react';

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>Close</button>
        <img src={imageUrl} alt="Clicked Image" />
      </div>
    </div>
  );
};

export default ImageModal;

import React, { useState } from 'react';

const ImageUploader = ({ onUpload }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleChange = (event) => {
    setSelectedImages(event.target.files);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    onUpload(selectedImages);
    setSelectedImages([]);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleChange} />
      <button onClick={handleUpload}>Upload Images</button>
    </div>
  );
};

export default ImageUploader;
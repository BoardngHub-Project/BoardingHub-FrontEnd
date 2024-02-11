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

  // const uploadButtonStyle = {
  //   backgroundColor: "#4CAF50",
  //   color: "white",
  //   padding: "10px 20px",
  //   border: "none",
  //   borderRadius: "5px",
  //   cursor: "pointer",
  //   marginTop: "5px",
  // };

  return (
    <div>
      <input type="file" multiple onChange={handleChange} />
      {/* <button style = {uploadButtonStyle} onClick={handleUpload}>Upload Images</button> */}
    </div>
  );
};

export default ImageUploader;
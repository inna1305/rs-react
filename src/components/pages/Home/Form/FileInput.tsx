import React from 'react';

const FileInput = () => {
  return (
    <div className="photo-input">
      <div className="home-create-form__label">photo</div>
      <input type="file" name="photo" id="photo" />
    </div>
  );
};

export default FileInput;

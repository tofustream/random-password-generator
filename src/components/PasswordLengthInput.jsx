import React from 'react';
import './PasswordLengthInput.css';

const PasswordLengthInput = ({ inputLength, handleLengthChange }) => {
  return (
    <div className="form-group row justify-content-center mt-4">
      <label htmlFor="length" className="col-sm-2 col-form-label">パスワードの長さ:<span className="length-range">(8-64文字)</span></label>
      <div className="col-sm-2">
        <input
          type="number"
          id="length"
          name="length"
          className="form-control"
          min="8"
          max="64"
          value={inputLength}
          onChange={handleLengthChange}
        />
      </div>
    </div>
  );
};

export default PasswordLengthInput;

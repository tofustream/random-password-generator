import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const PasswordDisplay = ({ password, copyToClipboard }) => {
  return (
    <div className="alert alert-success mt-4 text-center" role="alert">
      <h2>生成されたパスワード</h2>
      <p id="generated-password" className="d-inline">{password}</p>
      <button className="copy-btn" onClick={copyToClipboard}>
        <FontAwesomeIcon icon={faCopy} />
      </button>
    </div>
  );
};

export default PasswordDisplay;

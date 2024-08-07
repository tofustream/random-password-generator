import React from 'react';

const PasswordGenerator = ({ generatePassword, isGenerating }) => {
  return (
    <div className="text-center">
      <button type="button" className="btn btn-primary" onClick={generatePassword} disabled={isGenerating}>
        {isGenerating ? '生成中...' : '生成'}
      </button>
    </div>
  );
};

export default PasswordGenerator;

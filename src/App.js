import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PasswordLengthInput from './components/PasswordLengthInput';
import PasswordDisplay from './components/PasswordDisplay';
import PasswordGenerator from './components/PasswordGenerator';

function App() {
  const [password, setPassword] = useState('');
  const [inputLength, setInputLength] = useState(12);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleLengthChange = (e) => {
    const value = e.target.value;
    setInputLength(value ? Number(value) : '');
  };

  const generatePassword = (e) => {
    if (e) e.preventDefault();
    if (isGenerating) return;

    setIsGenerating(true);

    setTimeout(() => {
      let validLength = inputLength;
      if (inputLength < 8) {
        validLength = 8;
      } else if (inputLength > 64) {
        validLength = 64;
      }

      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
      let newPassword = '';
      for (let i = 0; i < validLength; i++) {
        newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      setPassword(newPassword);
      setInputLength(validLength); // 生成後に入力欄を更新
      setIsGenerating(false);
    }, 1000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      alert('パスワードがクリップボードにコピーされました!');
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">パスワードジェネレータ</h1>
      <form onSubmit={(e) => e.preventDefault()}> {/* フォームの送信を無効化 */}
        <PasswordLengthInput inputLength={inputLength} handleLengthChange={handleLengthChange} />
        <PasswordGenerator generatePassword={generatePassword} isGenerating={isGenerating} />
      </form>
      {password && <PasswordDisplay password={password} copyToClipboard={copyToClipboard} />}
    </div>
  );
}

export default App;

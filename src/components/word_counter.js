import React, { useState } from 'react';


export function WordCounter() {
    
  
    const [text, setText] = useState('');
  
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setText(inputValue);
  };
  
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
    }}
  >
    <h1>Responsive Paragraph Word
        <br/>Counter
    </h1>
    
    <textarea
      rows="5"
      cols="50"
      value={text}
      onChange={handleInputChange}
      placeholder="Type your paragraph here..."
    />
    <p style={{ textAlign: 'left' }}>Word Count: {wordCount}</p>
  </div>
  );
  }
  

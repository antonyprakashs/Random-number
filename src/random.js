import React, { useState } from 'react';

function RandomNumberGenerator() {
  const [number, setNumber] = useState(null);

  const generateNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
  };

  return (
    <div className="app-container">
      <div className="generator-card">
        <h1 className="title">Random Number Generator</h1>
        
        <div className="number-display">
          {number === null ? (
            <p className="placeholder-text">No number generated yet</p>
          ) : (
            <span className="random-number">{number}</span>
          )}
        </div>

        <button className="btn generate-btn" onClick={generateNumber}>
          Generate Random Number
        </button>
      </div>
    </div>
  );
}

export default RandomNumberGenerator;

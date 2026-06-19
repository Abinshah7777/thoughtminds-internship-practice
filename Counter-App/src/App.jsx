import React, { useState } from 'react';
import './App.css';

const Counter = () => {
  // 1. Initialize the state with a starting value of 0
  const [count, setCount] = useState(0);

  // 2. Event Handlers for modifying the state
  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);
  const handleIncrementByFive = () => setCount((prev) => prev + 5);
  const handleDecrementByFive = () => setCount((prev) => prev - 5);
  const handleReset = () => setCount(0);

  return (
    <div className="counter-container">
      {/* Display current count value */}
      <div className="counter-display">
        {count}
      </div>

      {/* Control Buttons matching the layout wireframe */}
      <div className="counter-grid">
        <button onClick={handleIncrement} className="counter-btn">
          Increment
        </button>
        
        <button onClick={handleDecrement} className="counter-btn">
          Decrement
        </button>

        <button onClick={handleIncrementByFive} className="counter-btn">
          Increment 5
        </button>

        <button onClick={handleDecrementByFive} className="counter-btn">
          Decrement 5
        </button>

        <button onClick={handleReset} className="counter-btn reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
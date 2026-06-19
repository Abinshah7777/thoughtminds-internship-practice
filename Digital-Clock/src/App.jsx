import React, { useState, useEffect } from 'react';
import './App.css'; // Importing the separate CSS file

const DigitalClock = () => {
  // Initialize state with the current system time string
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // Set up the interval timer to tick every 1000ms (1 second)
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Clear interval when component unmounts to prevent memory leaks
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="clock-container">
      <h2 className="clock-label">Current Time:</h2>
      <div className="clock-box">
        {time}
      </div>
    </div>
  );
};

export default DigitalClock;
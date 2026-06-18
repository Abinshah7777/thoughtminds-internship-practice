import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [cards, setCards] = useState([]);

  const addCard = () => {
    const value = parseInt(input);

    if (isNaN(value) || value <= 0) {
      alert("Please enter a valid positive number");
      return;
    }

    const newCard = {
      id: Date.now(),
      timeLeft: value,
    };

    setCards((prev) => [...prev, newCard]);
    setInput("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) =>
        prevCards
          .map((card) => ({
            ...card,
            timeLeft: card.timeLeft - 1,
          }))
          .filter((card) => card.timeLeft > 0)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>Auto Expiring Number Cards</h1>

      <div className="input-section">
        <input
          type="number"
          placeholder="Enter a number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={addCard}>Add</button>
      </div>

      <div className="cards-container">
        {cards.map((card) => (
          <div key={card.id} className="card">
            {card.timeLeft}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
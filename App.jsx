// App.jsx
import { useState } from 'react';
import './App.css';

const choices = ['Rock', 'Paper', 'Scissors'];

function App() {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const handleUserChoice = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    const gameResult = getResult(choice, compChoice);

    setUserChoice(choice);
    setComputerChoice(compChoice);
    setResult(gameResult);
  };

  const getResult = (user, comp) => {
    if (user === comp) return "It's a draw!";
    if (
      (user === 'Rock' && comp === 'Scissors') ||
      (user === 'Paper' && comp === 'Rock') ||
      (user === 'Scissors' && comp === 'Paper')
    ) {
      return 'You win!';
    }
    return 'You lose!';
  };

  const resetGame = () => {
    setUserChoice('');
    setComputerChoice('');
    setResult('');
  };

  return (
    <div className="game-container">
      <h1>Rock Paper Scissors</h1>
      <div className="buttons">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleUserChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <div className="results">
        <p><strong>Your choice:</strong> {userChoice}</p>
        <p><strong>Computer's choice:</strong> {computerChoice}</p>
        <p><strong>Result:</strong> {result}</p>
      </div>
      <button onClick={resetGame} className="reset">Reset</button>
    </div>
  );
}

export default App;

import "./styles/App.css";
import { useState, useEffect } from "react";
import Choice from "./components/Choice";
import Scoreboard from "./components/Scoreboard";
import Result from "./components/Result";

function App() {
  const [trigger, setTrigger] = useState(false);
  const [choice, setChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const options = ["Rock", "Paper", "Scissors"];

  const restartGame = () => {
    setScore(0)
    setChoice("")
    setComputerChoice("")
    setResult("")
    setTrigger(false)
    setGameOver(false);
    
  };

  function clash() {
    if (choice === "Rock") {
      if (computerChoice === "Rock") {
        setResult("draw");
      } else if (computerChoice === "Paper") {
        setResult("lose");
      } else {
        setResult("win");
      }
    }
    if (choice === "Paper") {
      if (computerChoice === "Rock") {
        setResult("win");
      } else if (computerChoice === "Paper") {
        setResult("draw");
      } else {
        setResult("lose");
      }
    }
    if (choice === "Scissors") {
      if (computerChoice === "Rock") {
        setResult("lose");
      } else if (computerChoice === "Paper") {
        setResult("win");
      } else {
        setResult("draw");
      }
    }
  }

  useEffect(() => {
    clash();
  }, [choice]);

  useEffect(() => {
    if (result === "win") {
      setScore((prevState) => (prevState += 1));
    } else if (result === "lose") {
      setScore((prevState) => (prevState -= 1));
    } else {
      setScore((prevState) => (prevState += 0));
    }
  }, [result]);

  useEffect(() => {
    if (score >= 3 || score <= -3) {
      setGameOver(true);
    }
  }, [score]);

  return (
    <div className="App">
      <Scoreboard score={score} />

      {gameOver ? (
        score > 0 ? (
          <div className="endGame">
            <h2 className="resultAnnounce">YOU WIN</h2>
            <button className="playButton" onClick={restartGame}>Restart</button>
          </div>
        ) : (
          <div className="endGame">
            <h2 className="resultAnnounce">YOU LOSE</h2>
            <button className="playButton" onClick={restartGame}>Restart</button>
          </div>
        )
      ) : trigger ? (
        <Result
          choice={choice}
          computerChoice={computerChoice}
          result={result}
          setTrigger={setTrigger}
          setChoice={setChoice}
          setComputerChoice={setComputerChoice}
          setResult={setResult}
        />
      ) : (
        <div className="choiceContainer">
          {options.map((option, idx) => {
            return (
              <Choice
                key={idx}
                name={option}
                setChoice={setChoice}
                setTrigger={setTrigger}
                setComputerChoice={setComputerChoice}
                options={options}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;

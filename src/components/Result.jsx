import React, { useState, useEffect } from "react";
import Badge from "./Badge";

const Result = ({
  choice,
  computerChoice,
  result,
  setTrigger,
  setChoice,
  setComputerChoice,
  setResult,
}) => {
  const [showComputersChoice, setShowComputersChoice] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComputersChoice(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handlePlayAgain = () => {
    setTrigger(false);
    setChoice("");
    setComputerChoice("");
    setResult("");
  };

  return (
    <div className="choiceContainer">
      <div className="choiceDiv">
        <h5 className="choiceTitle">You Picked</h5>
        {result === "win" ? (
          <Badge name={choice} win={true} />
        ) : (
          <Badge name={choice} />
        )}
      </div>

      <div className="middleDiv">
        {showComputersChoice ? (
          <span className="resultAnnounce">{result}</span>
        ) : (
          <span className="resultAnnounce"></span>
        )}
        <button className="playButton" onClick={handlePlayAgain}>
          Play Again
        </button>
      </div>
      <div className="choiceDiv">
        <h5 className="choiceTitle">House Picked</h5>
        {showComputersChoice ? (
          <>
            {result === "lose" ? (
              <Badge name={computerChoice} win={true} />
            ) : (
              <Badge name={computerChoice} />
            )}
          </>
        ) : (
          <div className="waiting choiceTitle">Wait...</div>
        )}
      </div>
    </div>
  );
};

export default Result;

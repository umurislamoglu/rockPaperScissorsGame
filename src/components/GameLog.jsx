import React from "react";

const GameLog = ({ gameList }) => {
  return (
      <div>
    <table>
      <thead>
        <tr>
          <th>You Picked</th>
          <th>Computer Picked</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        {gameList.map((game, idx) => {
          return (
            <tr key={idx}>
              <td>{game.choice}</td>
              <td>{game.computerChoice}</td>
              <td>{game.result}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
};

export default GameLog;

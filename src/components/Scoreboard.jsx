import React from 'react'
import Rules from './Rules'

const Scoreboard = ({score}) => {
    return (
        <div className="scoreboard">
        <img className="scoreboard__img" src="/images/logo.svg" alt="logo" />
        <Rules/>
        <div className="scoreboard__display">
          <p className="scoreboard__title">Score</p>
          <p className="scoreboard__score">{score}</p>
        </div>
      </div>
    )
}

export default Scoreboard

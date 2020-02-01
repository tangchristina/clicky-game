import React from "react";

function Nav(props) {
  return (
  
    <nav className="navbar navbar-dark bg-dark">
      
      <a className="navbar-brand h3" href="/">
        Clicky-Game
      </a>
      <div className="navbar-right h2 text-white">Current Score: 
                <span id="game-score">{props.score}</span>
            </div>
            <div className="navbar-right text-white h2">High Score: 
                <span id="high-score">{props.highScore}</span>
            </div>
    </nav>
    
  );
}

export default Nav;

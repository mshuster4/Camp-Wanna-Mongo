
import React from "react";
import "./style.css";

function NavBar (props){
  return(
     <nav className="memory-navbar navbar">
      <ul>
        <li className="memory-brand brand">
          <a className="memory-link" href="/">Memory Game</a>
        </li>
       
        <li className="memory-list">Score: {props.score}</li>
        <li className="memory-list">Highscore: {props.highscore}</li>
      </ul>
     </nav>
  )
}


export default NavBar;



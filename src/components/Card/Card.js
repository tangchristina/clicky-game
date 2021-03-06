import React from "react";
import "./style.css"

function Card(props) {
    return (
      <div className="col sm-4 d-flex justify-content-center">
      <div className="card" onClick={() => props.shuffleArray(props.id)}>
      <div className="img-container">
      <img alt={props.name} src={props.image}   />
      </div>
      </div>
      </div>
    );
  }
  
  export default Card;
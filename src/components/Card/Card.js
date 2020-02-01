import React from "react";
import "./style.css"

function Card(props) {
    return (
      <div className="col sm-3 d-flex justify-content-center">
      <div className="card" onClick={() => props.shuffleCards(props.id)}>
      <div className="img-container">
      <img alt={props.name} src={props.image}   />
      </div>
      </div>
      </div>
    );
  }
  
  export default Card;
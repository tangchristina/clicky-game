import React from "react";

function Card(props) {
    return (
      <div className="card"
      >
        <div className="img-container">
          <span onClick={() => props.shuffleCard(props.id)} className="shuffle"></span>
            <img alt={props.name} src={props.image}   />
        </div>
      </div>
    );
  }
  
  export default Card;
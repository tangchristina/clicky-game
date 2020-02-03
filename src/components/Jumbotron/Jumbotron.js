import React from "react";

function Jumbotron(props) {
  return (
    <div className="jumbotron">
  <h1 className="display-4 text-center">Car Clicky Game</h1>
  <p className="lead text-center">{props.message}
</p>


</div>
  );
}

export default Jumbotron;
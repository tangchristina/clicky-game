import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Wrapper from "./components/Wrapper/Wrapper";
import Nav from "./components/Nav/Nav";
import Card from "./components/Card/Card"
import cars from "./cars.json";


// class App extends Component {
//   state = {
//     books: []
//   };

class App extends Component {
  state = {
    cars
  };
  render(){
  return (
    <div>
      <Nav />
      <Jumbotron />
      <div className = "container">
      <Wrapper>
        {this.state.cars.map(car => (
          <Card
            id={car.id}
            key={car.key}
            name={car.name}
            image={car.image}
          />
        ))}
      </Wrapper>
      </div>
      
    </div>
  );
  }
}



            //  <Jumbotron>
            // <h1>Clicky Game!</h1>
            // <p>Click on an image to earn points, but don't click on any more than once!</p>
            // <Jumbotron/>;

    
  



export default App;

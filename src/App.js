import React, { Component } from "react";
import ReactDOM from 'react-dom';
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
      <Nav message={this.state.message} highScore={this.state.highScore} score={this.state.score}></Nav>
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

    
  

ReactDOM.render(<App />, document.getElementById('root'));

export default App;

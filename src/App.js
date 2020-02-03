import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Wrapper from "./components/Wrapper/Wrapper";
import Nav from "./components/Nav/Nav";
import Card from "./components/Card/Card"
import cars from "./cars.json";


class App extends Component {
  state = {
    cars,
    clickedCars:[],
    score: 0,
    highScore: 0,
    message: "Click on a car image to earn points, but don't click on any more than once."
  };

  //shuffle the cards in the browser when clicked
  shuffleArray = id => {
    let clickedCars = this.state.clickedCars;

    if(clickedCars.includes(id)){
      this.setState({ clickedCars: [], score: 0, highScore: this.state.score, message: "You lost. Try Again!"});
      return cars;
    }else{
      clickedCars.push(id)
    
      if(clickedCars.length === 12){
        this.setState({score: 12, clickedCars: [], message: "You Win!"});
        console.log('You Win');
        return cars;
      }

      this.setState({ cars, clickedCars, score: clickedCars.length });

    for (let i = cars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cars[i], cars[j]] = [cars[j], cars[i]];
    }  
}
  }

  render() {
  return (
    <div>
      <Nav highScore={this.state.highScore} score={this.state.score}></Nav>
      <Jumbotron message={this.state.message} />
      <div className = "container">
      <Wrapper>
        {this.state.cars.map(car => (
          <Card
            shuffleArray={this.shuffleArray}
            id={car.id}
            key={car.id}
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

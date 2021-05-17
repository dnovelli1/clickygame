// import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import dogs from './Dogs.json';
import DogCard from './components/DogCard';

class App extends Component {
  state = {
    dogs: dogs,
    allClicked: [],
    clicked: '',
    score: 0,
    topScore: 0
  }

  addClicked = (param) => {
    console.log(param);
    this.setState({
      allClicked: [
        ...this.state.allClicked,
        param
      ],
      clicked: param
    })
    console.log(this.state.allClicked)
    this.checkImage(this.state.clicked);
  }


  checkImage = (clicked) => {
    // event.preventDefault();
    console.log(clicked);
    for(var i = 0; i < this.state.allClicked.length; i++) {
      console.log(this.state.allClicked[i]);
      if(this.state.allClicked[i] === this.state.clicked) {
        console.log('These match');
      } else {

      }
    }
    this.shuffleArr();
  }


  
  shuffleArr = () => {
    const newArr = [...this.state.dogs];
    newArr.sort(() => Math.random() - 0.5);
    this.setState({
      dogs: newArr
    })
  };

  render() {
    return (

      <div>
        <Navbar />
        <Hero />
        <main>
          {this.state.dogs.map(dog => (
            <DogCard
              checkImage={this.checkImage}
              id={dog.id}
              key={dog.id}
              name={dog.name}
              image={dog.image}
            />
          ))}
        </main>
      </div>
    );
  }
}

export default App;
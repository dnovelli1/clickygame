import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import dogs from './Dogs.json';
import DogCard from './components/DogCard';

class App extends Component {
  state = {
    dogs: dogs,
    allClicked: [],
    score: 0,
    topScore: 0,
    count: 1,
    max: 12,
    status: 'Click an image to begin!'
  }

  // addClicked = (param) => {
  //   console.log(param);
  //   this.setState({
  //     allClicked: [
  //       ...this.state.allClicked,
  //       param
  //     ],
  //     clicked: param
  //   })
  //   console.log(this.state.allClicked)
  //   this.checkImage(this.state.clicked);
  // }
  // getScore = () => {

  // }

  checkImage = clicked => {
    // event.preventDefault();
    console.log(clicked);
    let allClicked = this.state.allClicked;

    if(allClicked.includes(clicked)) {
      if(this.state.count > this.state.topScore) {
        this.setState({
          allClicked: [],
          score: 0,
          topScore: this.state.count,
          count: 0,
          status: 'New High Score!'
        })
      } else {
          this.setState({
            allClicked: [],
            score: 0,
            count: 0,
            status: 'You lose!'
        })
      }
      return;
    } else {
        allClicked.push(clicked)
        this.setState({
          count: this.state.count + 1
        });
        if(this.state.count > this.state.topScore) {
          this.setState({
            topscore: this.state.count
          });
        }
        if(allClicked.length === 12) {
          this.setState({
            topscore: this.state.count,
            score: 0,
            count: 0,
            allClicked: [],
            status: 'Sheesh you are good'
          });
          return;
        }
        this.setState({
          allClicked,
          score: allClicked.length,
        })
    }
    console.log(this.state.score);
    // for(var i = 0; i < this.state.allClicked.length; i++) {
    //   console.log(this.state.allClicked[i]);
    //   if(this.state.allClicked[i] === clicked) {
    //     console.log('Found a match!');
    //     this.getScore();
    //   } else {
    //     this.setState({
    //       score: this.state.score + 1,
    //       allClicked: [
    //         ...this.state.allClicked,
    //         clicked
    //       ]
    //     });
    //     console.log(this.state.allClicked);
    //     console.log(this.state.score);
    //   }
    // }
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

      <div className="wrapper">
        <Navbar
          total={this.state.score}
          topscore={this.state.topScore}
          status={this.state.status}
        />
        {/* <Hero /> */}
        <main className="container">
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
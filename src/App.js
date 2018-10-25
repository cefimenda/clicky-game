import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Info from "./components/info/Info";
import Game from "./components/game";

class App extends Component {
  state = {
    score: 0,
    topScore: localStorage.getItem("topScore") || 0,
    message: "Begin by killing off your first character..."
  };
  score = async result => {

    if (result === "Correct") {
      await this.setState({ score: this.state.score + 1, message: "You Guessed Correctly!" })
      if (this.state.score > this.state.topScore) {
        this.setState({ topScore: this.state.score })
        localStorage.setItem("topScore", this.state.score)
      }
    } else {
      await this.setState({ score: 0, message: "You Guessed Incorrectly!" })
    };
  };
  render() {
    return (
      <div>
        <Navbar {...this.state}/>
        <Info />
        <Game score={this.score} />
      </div>
    );
  }
}

export default App;

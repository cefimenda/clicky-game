import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Info from "./components/info/Info";
// import Game from "./components/game";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Info />
        {/* <Game /> */}
      </div>
    );
  }
}

export default App;

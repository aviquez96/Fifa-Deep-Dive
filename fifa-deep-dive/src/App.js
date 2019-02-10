import React, { Component } from 'react';
import './App.css';
import Board from './Components/Board.jsx'
import Player from './Components/Player.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Player />
        <br/>
        <Board />
      </div>
    );
  }
}

export default App;

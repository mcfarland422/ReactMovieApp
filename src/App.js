import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import $ from 'jquery';
import Poster from './Poster';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: []
    };
  };

  componentWillMount(){
    console.log("the App component is about to mount");
  }

  componentDidMount(){
    console.log("The component mounted!");
    var url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5'
  }

  robsMethod

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

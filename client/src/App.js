import React from 'react';
import axios from "axios";
import Navbar from "./Navbar";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playerList: []
    };
  }
  componentDidMount(){
    axios.get("http://localhost:5000/api/players").then(response => {
      this.setState({
        playerList: response.data
      });
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        {this.state.playerList.map((person)=>(
          <div className='Card'>
            <div>Name: {person.name}</div>
            <div>Country: {person.country}</div>
            <div>Searches: {person.searches}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;

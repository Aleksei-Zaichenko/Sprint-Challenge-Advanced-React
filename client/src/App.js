import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      players:[]
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        // res.data.message
        //console.log(res.data);
        this.setState({
          players: res.data
        });
      })
      .catch(err => console.log(err.message));
  }

  render(){
    console.log(this.state.players)
    return (
      <div className = "App">
        <h1>Hello Players</h1>
        {this.state.players.map(player => (
            <div className="player" key={player.id} >
              <h3>Name: {player.name}</h3>
              <h3>Country: {player.country}</h3>
              <h3>Searches: {player.searches}</h3>
              <h3>Id: {player.id}</h3>
            </div>
          ))}
      </div>
    )
  }
}

export default App;

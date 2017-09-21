import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './card/CardList';
import cards from './api/mockDataApi';
import Form from './home/Form';

class App extends Component {
  state = {
    cards: cards
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>React + GitHub API</h2>
        </div>
        <br/>
        <div>
          <Form/>
          <CardList cards={this.state.cards}/>
        </div>
      </div>
    );
  }
}

export default App;

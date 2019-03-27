import React, { Component } from 'react';
import './index.css';
import ChooseAGame from './ChooseAGame';
import BananasAndShit from './bananas and shit';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isGameChosen : false,
      bananasAndShit : false,
    }
  }

  chosenGame(name){
    this.setState({
      isGameChosen : true,
      bananasAndShit : true,
    })
  }

  menu(){
    this.setState({
      isGameChosen : false,
      bananasAndShit : false,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <nav>
            <ul>
              <h1>Game Platform</h1>
              <li><a href="ChooseAGame.js">Home</a></li>
              <li><a href="">Descri\ption</a></li>
              <li><a href="banana%20description.js">Game</a></li>
            </ul>
          </nav>
        </header>
        {!this.state['isGameChosen'] && <ChooseAGame chosenGame={(name) => this.chosenGame(name)}/>}
        {this.state['bananasAndShit'] && <BananasAndShit menu={() => this.menu()} chosenGame={(name) => this.chosenGame(name)}/>}
      </div>
    );
  }
}

export default App;

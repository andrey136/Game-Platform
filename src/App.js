import React, { Component } from 'react';
import './index.css';
import ChooseAGame from './ChooseAGame';
import BananasAndShit from './banana and shit/game';
import X_and_O from './x-and-o/description';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isGameChosen : false,
      bananasAndShit : false,
      xAndO : false,
    }
  }

  chosenGame(name){
    console.log(name === 'BananasAndShit');
    if(name === 'BananasAndShit'){
      this.setState({
        isGameChosen : true,
        bananasAndShit : true,
    });
    } else if(name === 'X-and-O'){
      this.setState({
        isGameChosen: true,
        xAndO : true,
      })
    }
  }

  menu(){
    this.setState({
      isGameChosen : false,
      bananasAndShit : false,
    })
    /*<header className="header">
          <nav>
            <ul>
              <h1>Game Platform</h1>
              <li><a href="ChooseAGame.js">Home</a></li>
              <li><a href="">Description</a></li>
              <li><a href="banana%20description.js">Game</a></li>
            </ul>
          </nav>
        </header>*/
  }

  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <h1>Game Platform</h1>
          </nav>
        </header>
        {!this.state['isGameChosen'] && <ChooseAGame chosenGame={(name) => this.chosenGame(name)}/>}
        {this.state['bananasAndShit'] && <BananasAndShit menu={() => this.menu()} chosenGame={(name) => this.chosenGame(name)}/>}
        {this.state['xAndO'] && <X_and_O menu={() => this.menu()} chosenGame={(name) => this.chosenGame(name)}/>}
        <footer></footer>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './index.css';
import ChooseAGame from './ChooseAGame';
import BananasAndShit from './banana and shit/game';
import X_and_O from './x-and-o/game';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isGameChosen : false,
      bananasAndShit : false,
      xAndO : false,
      account: 1000,
    }
  }

  chosenGame(name){
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

  account(money){
    this.setState({
      account: money,
    });
  }

  menu(currentGame){
    if(currentGame === 'Xs_and_Os'){
      this.setState({
        isGameChosen : false,
        xAndO : false,
      });
    } else if(currentGame === 'bananas-and-shit'){
      this.setState({
        isGameChosen : false,
        bananasAndShit : false,
      });
    }
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
        {this.state['bananasAndShit'] && <BananasAndShit menu={(currentGame) => this.menu(currentGame)} chosenGame={(name) => this.chosenGame(name)} money={this.state.account} account={(money) => this.account(money)}/>}
        {this.state['xAndO'] && <X_and_O chosenGame={(name) => this.chosenGame(name)} menu={(currentGame) => this.menu(currentGame)} money={this.state.account} account={(money) => this.account(money)}/>}
        <footer></footer>
      </div>
    );
  }
}

export default App;

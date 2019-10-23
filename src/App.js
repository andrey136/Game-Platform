import React, {Component} from 'react';
import './index.css';
import ChooseAGame from './ChooseAGame';
import BananasAndShit from './banana and poop/game';
import X_and_O from './x-and-o/game';
import {getFromLocalStorage} from "./banana and poop/functionsForBananaApp";
import Register from "./registerForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGameChosen: false,
      bananasAndShit: false,
      xAndO: false,
      account: getFromLocalStorage(),
    }
  }

  chosenGame(name) {
    this.setState({
      isGameChosen: true,
      xAndO: name === 'X-and-O',
      bananasAndShit: name === 'BananasAndShit'
    });
  }

  account(money) {
    this.setState({
      account: money,
    });
  }

  menu(currentGame) {
    this.setState({
      isGameChosen: false,
      xAndO: false,
      bananasAndShit: false,
    });
  }

  authorized(){
    this.setState({

    });
  }

  render() {
    return (
      <div id="wrapper">
        <header>
        <nav>
          <h1>Game Platform</h1>
        </nav>
      </header>
        {localStorage.getItem('user') === 'stranger' ?
          <Register render={() => this.authorized()}/> :


        < div className="App">
          {!this.state['isGameChosen'] && <ChooseAGame chosenGame={(name) => this.chosenGame(name)}/>}
          {this.state['bananasAndShit'] &&
          <BananasAndShit menu={(currentGame) => this.menu(currentGame)} chosenGame={(name) => this.chosenGame(name)}
                          money={this.state.account} account={(money) => this.account(money)}/>}
          {this.state['xAndO'] &&
          <X_and_O chosenGame={(name) => this.chosenGame(name)} menu={(currentGame) => this.menu(currentGame)}
                   money={this.state.account} account={(money) => this.account(money)}/>}
        </div>
        }
        <footer></footer>
      </div>
    );
  }
}

export default App;
/**/
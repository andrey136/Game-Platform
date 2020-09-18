import React, {Component} from 'react';
import './index.css';
// Game Pages
import ChooseAGame from './Components/ChooseAGame';
import BananasAndShit from './Game Pages/banana and poop/game';
import X_and_O from './Game Pages/x-and-o/game';
// Components
import Header from './Components/Header'
// Register Form
import Register from "./Register Form/registerForm";
// Functions
import {getFromLocalStorage} from "./Game Pages/banana and poop/functionsForBananaApp";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGameChosen: false,
      bananasAndShit: false,
      xAndO: false,
      account: getFromLocalStorage(),
      user: JSON.parse(localStorage.getItem('user')),
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

  authorized() {
    this.setState({});
  }

  render() {
    return (
      <div id="wrapper">
        <Header/>
        {JSON.parse(localStorage.getItem('user')).status === 'stranger' ?
          <Register render={() => this.authorized()}/> :
          <div className="App">
            {!this.state['isGameChosen'] && <ChooseAGame chosenGame={(name) => this.chosenGame(name)}/>}
            {this.state['bananasAndShit'] &&
            <BananasAndShit user={this.state.user} menu={(currentGame) => this.menu(currentGame)}
                            chosenGame={(name) => this.chosenGame(name)}
                            money={this.state.account} account={(money) => this.account(money)}
                            addMoney={() => this.addMoney()}/>}
            {this.state['xAndO'] &&
            <X_and_O chosenGame={(name) => this.chosenGame(name)} menu={(currentGame) => this.menu(currentGame)}
                     money={this.state.account} account={(money) => this.account(money)}/>}
          </div>
        }
      </div>
    );
  }
}

export default App;

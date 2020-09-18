import React, {Component} from 'react';
import './index.css';
import ChooseAGame from './Components/ChooseAGame';
import BananasAndShit from './Game Pages/banana and poop/game';
import X_and_O from './Game Pages/x-and-o/game';
import {getFromLocalStorage} from "./Game Pages/banana and poop/functionsForBananaApp";
import Register from "./Register Form/registerForm";

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

  logout() {
    localStorage.setItem('user', JSON.stringify({status: 'stranger'}));
    localStorage.setItem('account', '1000');
  }

  addMoney() {
  }

  render() {
    return (
      <div id="wrapper">
        <header>
          <nav>
            {JSON.parse(localStorage.getItem('user')).status !== 'stranger' &&
            <a href="" onClick={() => this.logout()}>Log out</a>}
            <h1>Game Platform</h1>

          </nav>
        </header>
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
        <footer></footer>
      </div>
    );
  }
}

export default App;
/**/
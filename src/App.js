import React, {Component} from 'react';
// Game Pages
import ChooseAGame from './Components/ChooseAGame';
import BananasAndShit from './Game Pages/banana and poop/game';
import XAndO from './Game Pages/Tic Tac Toe/game';
// Components
import Header from './Components/Header'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGameChosen: false,
      bananasAndShit: false,
      xAndO: false,
      account: 1000,
      user: {
        name: "my friend",
        login: "abc@me.com",
        status: "user",
      }
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
        <div className="App">
          {!this.state['isGameChosen'] && <ChooseAGame chosenGame={(name) => this.chosenGame(name)}/>}
          {this.state['bananasAndShit'] &&
          <BananasAndShit user={this.state.user} menu={(currentGame) => this.menu(currentGame)}
                          chosenGame={(name) => this.chosenGame(name)}
                          money={this.state.account} account={(money) => this.account(money)}
                          addMoney={() => this.addMoney()}/>}
          {this.state['xAndO'] &&
          <XAndO chosenGame={(name) => this.chosenGame(name)} menu={(currentGame) => this.menu(currentGame)}
                 money={this.state.account} account={(money) => this.account(money)}/>}
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default App;

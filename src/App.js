import React, {Component} from 'react';
import './index.css';
import ChooseAGame from './ChooseAGame';
import BananasAndShit from './banana and poop/game';
import X_and_O from './x-and-o/game';
import {getFromLocalStorage} from "./banana and poop/functionsForBananaApp";
import Register from "./registerForm";
import axios from 'axios';
import {getUserById} from './apiFunctions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGameChosen: false,
      bananasAndShit: false,
      xAndO: false,
      user: this.findUser()
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
    const user = {...this.state.user};
    user.account = money;
    localStorage.setItem('user', JSON.stringify(user));
    this.setState({
      account: user,
    });
  }

  menu(currentGame) {
    this.setState({
      isGameChosen: false,
      xAndO: false,
      bananasAndShit: false,
    });
  }

  authorized(user) {
    console.log('Authorized!!!');
    this.setState({
      user: user
    });
    console.log(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.setState({
      user: {
        name: 'Stranger',
        status: 'unknown'
      }
    })
  }

  addMoney() {
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    //console.log('DidMount', user._id);
    if (user !== null) {
      getUserById(user._id)
        .then(res => {
          localStorage.setItem('user', JSON.stringify(res));
        }).catch(() => localStorage.clear());
    } else {
      localStorage.clear();
    }
  }

  findUser() {
    if (localStorage.getItem('user') === null) {
      console.log('NULL');
      return {name: 'Stranger', status: 'unknown'};
    } else {
      return getUserById(JSON.parse(localStorage.getItem('user'))._id);
    }
  }

  changeState(user) {
    console.log(user);
    this.setState({
      user: user
    })
  }


  render() {
    console.log(this.state.user);
    return (
      <div id="wrapper">
        <header>
          <nav>
            {this.state.user.status !== 'unknown' &&
            <a href="" onClick={() => this.logout()}>Log out</a>}
            <h1>Game Platform</h1>

          </nav>
        </header>
        {this.state.user.status === 'unknown' ?

          <Register refresh={(user) => this.authorized(user)}/> :

          <div className="App">
            {!this.state['isGameChosen'] && <ChooseAGame chosenGame={(name) => this.chosenGame(name)}/>}
            {this.state['bananasAndShit'] &&
            <BananasAndShit user={this.state.user} menu={(currentGame) => this.menu(currentGame)}
                            chosenGame={(name) => this.chosenGame(name)} account={(money) => this.account(money)}
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
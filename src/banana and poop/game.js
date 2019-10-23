import React, {Component} from 'react';
import Cherry from './cherry';
import Fruits from './Fruits';
import '../index.css';
import Description from './description';
import {game1} from './functionsForBananaApp';
import {game2} from './functionsForBananaApp';
import {game3} from './functionsForBananaApp';
import {game4} from './functionsForBananaApp';
import {counter} from './functionsForBananaApp';
import back from '../photos/banana-photos/back_big.png';
import Statistics from "./statistics";

class BananasAndShit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      notYet: true,
      fruits: [],
      didYouWin: false,
      level: 1,
      howManyTimesYouWon: 0,
      afterWards: true,
      money: this.props.money,
      areYouPlaying: false,
      description: true,
      bet: 10,
      btnContinue: false,
      user: this.props.user,
    }
  }

  tryAgain() {
    this.setState({
      notYet: true,
      fruits: [],
      didYouWin: false,
      afterWards: true,
    });
  }

  newGame(bet) {
    if(bet === 'continue'){
      this.playNow(bet);
    } else {
      this.setState({
        counter: 0,
        notYet: true,
        fruits: [],
        didYouWin: false,
        level: 1,
        howManyTimesYouWon: 0,
        afterWards: true,
        areYouPlaying: false,
        bet: bet,
        description: false,
      });
    }
  }

  takeMoney() {
    localStorage.setItem('account', `${this.state.money + this.state.counter}`);
    this.setState({
      counter: 0,
      notYet: true,
      fruits: [],
      didYouWin: false,
      level: 1,
      howManyTimesYouWon: 0,
      afterWards: true,
      money: this.state.money + this.state.counter,
      areYouPlaying: false,
    });
  }

  game(x) {
    let howManyTimesYouWon = this.state.howManyTimesYouWon;
    let level = this.state.level;
    let didYouWin = false;
    let c = this.state.counter;
    let isItCrap = false;
    let money = this.state.money;
    if (!this.state.areYouPlaying) {
      money -= this.state.bet;
      localStorage.setItem('account', `${money}`);
    }
    let arr1;
    if (level === 1) arr1 = game4(x);
    if (level === 2) arr1 = game3(x);
    if (level === 3) arr1 = game2(x);
    if (level === 4) arr1 = game1(x);
    if (!arr1[x]) {
      c = 0;
      level = 1;
      howManyTimesYouWon = 0;
    } else {
      didYouWin = true;
      c = counter(this.state.howManyTimesYouWon, this.state.bet);
      howManyTimesYouWon += 1;
    }
    if (howManyTimesYouWon === 4) level += 1;
    if (howManyTimesYouWon === 7) level += 1;
    if (howManyTimesYouWon === 9) level += 1;
    this.setState({
      notYet: false,
      fruits: arr1,
      isItCrap: isItCrap,
      counter: c,
      didYouWin: didYouWin,
      level: level,
      howManyTimesYouWon: howManyTimesYouWon,
      afterWards: false,
      money: money,
      areYouPlaying: true,
      btnContinue: true
    })
  }

  playNow(bet) {//continue playing
    if(bet === 'continue') bet = this.state.bet;
    this.setState({
      description: false,
      bet: bet
    })
  }

  stopPlaying() {
    this.setState({
      btnContinue: false,
      description: true,
    })
  }

  back(){
    if(this.state.description){

      this.props.menu('bananas-and-shit');
      this.props.account(this.state.money);
    } else {
      this.setState({
        description: true,
      })
    }
  }

  addMoney(){
    const user = JSON.parse(localStorage.getItem('user'));
    let sum = +localStorage.getItem('account');
    console.log(this.state.account);
    if(user.status === 'Best Friend' || user.status === 'admin'){
      sum += 5000;
    } else if(user.status === 'user'){
      sum += 100;
    }
    localStorage.setItem('account', `${sum}`);
    this.setState({money: sum});
  }

  render() {
    return (
      <div>
        {this.state.description ?
          <Description money={this.state.money}  menu={() => this.back()} addMoney={() => this.addMoney()} playNow={(bet) => this.newGame(bet)} areYouPlaying={this.state.areYouPlaying} btnContinue={this.state.btnContinue}/> :
          <div>
            <div className="topNav">
              <button className="stopPlaying returnBack"  onClick={() => this.back()}>Back</button>
              <p><a href="">+</a>Account {this.state.money}$</p>
            </div>
            <main className="game_process">
              <h2>Level
                № {this.state.afterWards ? this.state.level :
                  this.state.howManyTimesYouWon === 4 || this.state.howManyTimesYouWon === 7 ||
                  this.state.howManyTimesYouWon === 9 ? this.state.level - 1 : this.state.level}</h2>
              <br/>
              <h3>Counter: {this.state.counter}</h3>
              <br/>
              {this.state.notYet ?
                <Cherry level={this.state.level} bet={this.state.bet}
                        counter={counter(this.state.howManyTimesYouWon, this.state.bet)}
                        howManyTimesYouWon={this.state.howManyTimesYouWon}
                        game4={(index) => this.game(index)}/> :
                <Fruits bet={this.state.bet} level={this.state.level} counter={this.state.counter}
                        howManyTimesYouWon={this.state.howManyTimesYouWon} fruits={this.state.fruits}/>}
              <br/>
              {this.state.didYouWin ?
                <div>
                  <h4>You Won!!!</h4>
                  <div className="options">
                      <button className="btn btn-primary" onClick={() => this.tryAgain()}>Try again</button>
                      <button className="btn btn-danger" onClick={() => this.takeMoney()}>Take Money</button>
                  </div>
                </div> : !this.state.notYet ?
                <div>
                  <h4 color='blue'>You Lost :(</h4>
                  <div className="options">
                    <button className="btn btn-primary" onClick={this.state.bet <= this.state.money ? () => this.newGame() : () => this.stopPlaying()}>
                      {this.state.bet <= this.state.money ? "New game" : "Come Back"}</button>
                  </div>

                </div> : ''}
              <Statistics bet={this.state.bet} howManyTimesYouWon={this.state.howManyTimesYouWon} level={this.state.level} counter={this.state.counter}/>
            </main>
          </div>
        }
      </div>
    );
  }
}

export default BananasAndShit;

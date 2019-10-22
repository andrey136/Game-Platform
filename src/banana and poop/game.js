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

  newGame() {
    this.setState({
      counter: 0,
      notYet: true,
      fruits: [],
      didYouWin: false,
      level: 1,
      howManyTimesYouWon: 0,
      afterWards: true,
      areYouPlaying: false,
    });
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
    })
  }

  playNow(bet) {
    this.setState({
      description: false,
      bet: bet
    })
  }

  stopPlaying() {
    this.setState({
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

  render() {
    return (
      <div>
        {this.state.description ?
          <Description money={this.state.money} menu={() => this.back()} playNow={(bet) => this.playNow(bet)}/> :
          <div>
            <div className="topNav">
              <button className="stopPlaying returnBack"  onClick={() => this.back()}>Back</button>
              <p>Account {this.state.money}$</p>
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
                  {this.state.bet <= this.state.money &&
                  <div className="options">
                      <button className="btn btn-primary" onClick={() => this.newGame()}>New game</button>
                  </div>}
                </div> : ''}
            </main>
          </div>
        }
      </div>
    );
  }
}

export default BananasAndShit;

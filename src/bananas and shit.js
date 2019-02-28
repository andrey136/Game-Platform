import React, { Component } from 'react';
import Cherry from './cherry';
import Fruits from './Fruits';
import './index.css';
import Description from './banana description';

class BananasAndShit extends Component {
  constructor(props){
    super(props);

    this.state = {
      counter: 0,
      notYet: true,
      fruits: [],
      didYouWin : false,
      level : 1,
      howManyTimesYouWon : 0,
      afterWards: true,
      money : 2000,
      areYouPlaying : false,
      description : true,
      bet : 10,
    }
  }

  plus(){
    this.setState({
      money : this.state.money + 100,
    })
  }

  tryAgain(){
    this.setState({
      notYet: true,
      fruits: [],
      didYouWin : false,
      afterWards : true,
    });
  }
  newGame(){
    this.setState({
      counter: 0,
      notYet: true,
      fruits: [],
      didYouWin : false,
      level : 1,
      howManyTimesYouWon : 0,
      afterWards: true,
      areYouPlaying : false,
    });
  }

  takeMoney(){
    this.setState({
      counter: 0,
      notYet: true,
      fruits: [],
      didYouWin : false,
      level : 1,
      howManyTimesYouWon : 0,
      afterWards: true,
      money : this.state.money + this.state.counter,
      areYouPlaying : false,
    });
  }

  counter(){
    if(this.state.howManyTimesYouWon === 0)return Math.round(this.state.bet * 1.238);
    if(this.state.howManyTimesYouWon === 1)return Math.round(this.state.bet * 1.547);
    if(this.state.howManyTimesYouWon === 2)return Math.round(this.state.bet * 1.934);
    if(this.state.howManyTimesYouWon === 3)return Math.round(this.state.bet * 2.417);
    if(this.state.howManyTimesYouWon === 4)return Math.round(this.state.bet * 4.028);
    if(this.state.howManyTimesYouWon === 5)return Math.round(this.state.bet * 6.714);
    if(this.state.howManyTimesYouWon === 6)return Math.round(this.state.bet * 11.19);
    if(this.state.howManyTimesYouWon === 7)return Math.round(this.state.bet * 27.974);
    if(this.state.howManyTimesYouWon === 8)return Math.round(this.state.bet * 69.936);
    if(this.state.howManyTimesYouWon === 9)return Math.round(this.state.bet * 349.681);
  }

  game(x){
    let howManyTimesYouWon = this.state.howManyTimesYouWon;
    let level = this.state.level;
    let didYouWin = false;
    let counter = this.state.counter;
    let isItCrap = false;
    let money = this.state.money;
    if (!this.state.areYouPlaying) money -= this.state.bet;
    let arr1;
    if(level === 1)arr1 = this.game4(x);
    if(level === 2)arr1 = this.game3(x);
    if(level === 3)arr1 = this.game2(x);
    if(level === 4)arr1 = this.game1(x);
    if(!arr1[x]){
      counter = 0;
      level = 1;
      howManyTimesYouWon = 0;
    } else {
      console.log(this.counter());
      didYouWin = true;
      counter = this.counter();
      howManyTimesYouWon += 1;
    }
    if(howManyTimesYouWon === 4)level += 1;
    if(howManyTimesYouWon === 7)level += 1;
    if(howManyTimesYouWon === 9)level += 1;
    this.setState({
      notYet : false,
      fruits : arr1,
      isItCrap : isItCrap,
      counter : counter,
      didYouWin: didYouWin,
      level : level,
      howManyTimesYouWon : howManyTimesYouWon,
      afterWards : false,
      money : money,
      areYouPlaying : true,
    })
  }

  game4(x){
    let c = +Math.floor(Math.random() * 5);
    let arr = [];
    for(let i = 0; i < 5; i++){
      i === c ? arr.push(0) : arr.push(1);
    }
    return arr;
  }

  game3(x){
    let c1 = +Math.floor(Math.random() * 5);
    let c2 = +Math.floor(Math.random() * 5);
    for(let i = c1; i === c2; i += 0){
      c2 = +Math.floor(Math.random() * 5);
    }
    let arr = [];
    for(let i = 0; i < 5; i++){
      i === c1 || i === c2 ? arr.push(0) : arr.push(1);
    }
    return arr;
  }

  game2(x){
    let c1 = +Math.floor(Math.random() * 5);
    let c2 = +Math.floor(Math.random() * 5);
    for(let i = c1; i === c2; i += 0){
      c2 = +Math.floor(Math.random() * 5);
    }
    let arr = [];
    for(let i = 0; i < 5; i++){
      i === c1 || i === c2 ? arr.push(1) : arr.push(0);
    }
    return arr;
  }

  game1(x){
    let c = +Math.floor(Math.random() * 5);
    let arr = [];
    for(let i = 0; i < 5; i++){
      i === c ? arr.push(1) : arr.push(0);
    }
    return arr;
  }

  playNow(bet){
    this.setState({
      description : false,
      bet : bet
    })
  }
  stopPlaying(){
    this.setState({
      description : true,
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.description ? <Description money={this.state.money} menu={() => this.props.menu()} playNow={(bet) => this.playNow(bet)}/> :
          <div>

            <h2>
              <button className="stopPlaying returnBack"  onClick={() => this.stopPlaying()}>Return back</button>
              Account {this.state.money}$
            </h2>
            <h1 className="display-2">Level № {this.state.afterWards ? this.state.level : this.state.howManyTimesYouWon === 4 || this.state.howManyTimesYouWon === 7 || this.state.howManyTimesYouWon === 9 ? this.state.level - 1 : this.state.level}</h1>
            <br/>
            <h2>Counter: {this.state.counter}</h2>
            <br/>
            {this.state.notYet ? <Cherry level={this.state.level} bet={this.state.bet} counter={this.counter()} howManyTimesYouWon={this.state.howManyTimesYouWon} game4={(index) => this.game(index)}/> : <Fruits bet={this.state.bet} level={this.state.level} counter={this.counter()} howManyTimesYouWon={this.state.howManyTimesYouWon} fruits={this.state.fruits}/>}
            <br/>
            {this.state.didYouWin ? <div><h1>You Won!!!</h1><button className="btn btn-primary" onClick={() => this.tryAgain()}>Try again</button><button className="btn btn-danger" onClick={() => this.takeMoney()}>Take Money</button></div> : !this.state.notYet ? <div><h1 color='blue'>You Lost :(</h1>{this.state.bet <= this.state.money && <button className="btn btn-primary" onClick={() => this.newGame()}>New game</button>}</div> : ''}
          </div>
        }
      </div>
    );
  }
}

export default BananasAndShit;

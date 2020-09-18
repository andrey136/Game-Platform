import React, {Component} from 'react';
import '../../index.css';
// Components
import TopNav from "./Components/TopNav";
import Level from "./Components/Level";
import Cherry from './Components/cherry';
import Fruits from './Components/Fruits';
import YouWon from "./Components/YouWon";
import YouLost from "./Components/YouLost";
import Description from './Components/description';
import Statistics from "./Components/statistics";
// Functions
import {game1} from '../../Functions/App_js_Functions/Banana_and_Poop_functions';
import {game2} from '../../Functions/App_js_Functions/Banana_and_Poop_functions';
import {game3} from '../../Functions/App_js_Functions/Banana_and_Poop_functions';
import {game4} from '../../Functions/App_js_Functions/Banana_and_Poop_functions';
import {counter} from '../../Functions/App_js_Functions/Banana_and_Poop_functions';

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
    if(bet === undefined) bet = this.state.bet;
    if(bet === 'continue'){
      this.playNow(bet);
    }  else {
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
      btnContinue: false
    });
  }

  game(x) {
    let howManyTimesYouWon = this.state.howManyTimesYouWon;
    let level = this.state.level;
    let didYouWin = false;
    let c = this.state.counter;
    let isItCrap = false;
    let money = this.state.money;
    let btnContinue = false;
    console.log(money);
    if (!this.state.areYouPlaying) {
      money -= this.state.bet;
      localStorage.setItem('account', `${money}`);
      // btnContinue = false;
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
      btnContinue = false;
    } else {
      didYouWin = true;
      c = counter(this.state.howManyTimesYouWon, this.state.bet);
      howManyTimesYouWon += 1;
      btnContinue = true;
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
      btnContinue: btnContinue
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
            <TopNav money={this.state.money} back={() => this.back()}/>
            <main className="game_process">
              <Level counter={this.state.counter} howManyTimesYouWon={this.state.howManyTimesYouWon} level={this.state.level} afterWards={this.state.afterWards}/>
              {this.state.notYet ?
                <Cherry level={this.state.level} bet={this.state.bet}
                        counter={counter(this.state.howManyTimesYouWon, this.state.bet)}
                        howManyTimesYouWon={this.state.howManyTimesYouWon}
                        game4={(index) => this.game(index)}/> :
                <Fruits bet={this.state.bet} level={this.state.level} counter={this.state.counter}
                        howManyTimesYouWon={this.state.howManyTimesYouWon} fruits={this.state.fruits}/>}
              <br/>
              {this.state.didYouWin ?
                <YouWon tryAgain={() => this.tryAgain()} takeMoney={() => this.takeMoney()}/>
                : !this.state.notYet ?
                <YouLost bet={this.state.bet} money={this.state.money} newGame={() => this.newGame()} stopPlaying={() => this.stopPlaying()}/>
                  : ''}
              <Statistics bet={this.state.bet} howManyTimesYouWon={this.state.howManyTimesYouWon} level={this.state.level} counter={counter(this.state.howManyTimesYouWon + 1, this.state.bet)}/>
            </main>
          </div>
        }
      </div>
    );
  }
}

export default BananasAndShit;

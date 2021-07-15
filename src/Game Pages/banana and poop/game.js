import React, {Component} from 'react';
// Components
import Description from './Components/Description/Description';
import TopNav from "./Components/TopNav";
import Level from "./Components/Level";
import Cherry from './Components/cherry';
import Fruits from './Components/Fruits';
import YouWon from "./Components/YouWon";
import YouLost from "./Components/YouLost";
import Statistics from "./Components/statistics";
// Functions
import {tryAgain} from "../../Functions/App_js_Functions/Banana_and_Poop_change_state_functions";
import {stopPlaying} from "../../Functions/App_js_Functions/Banana_and_Poop_change_state_functions";
import {takeMoney} from "../../Functions/App_js_Functions/Banana_and_Poop_change_state_functions";
import {addMoney} from "../../Functions/App_js_Functions/Banana_and_Poop_change_state_functions";
import {newGame} from "../../Functions/App_js_Functions/Banana_and_Poop_change_state_functions";
import {game} from "../../Functions/App_js_Functions/Banana_and_Poop_change_state_functions";
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

  changeState(obj){
    this.setState(obj);
  }

  render() {
    return (
      <div>
        {this.state.description ?
          <Description money={this.state.money}  menu={() => this.back()} addMoney={() => this.changeState(addMoney(this.state.account))} playNow={(bet) => this.changeState(newGame(bet, this.state.bet))} areYouPlaying={this.state.areYouPlaying} btnContinue={this.state.btnContinue}/> :
          <div>
            <TopNav money={this.state.money} back={() => this.back()} addMoney={() => this.changeState(addMoney(this.state.account))}/>
            <main className="game_process">
              <Level counter={this.state.counter} howManyTimesYouWon={this.state.howManyTimesYouWon} level={this.state.level} afterWards={this.state.afterWards}/>
              {this.state.notYet ?
                <Cherry level={this.state.level} bet={this.state.bet}
                        counter={counter(this.state.howManyTimesYouWon, this.state.bet)}
                        howManyTimesYouWon={this.state.howManyTimesYouWon}
                        game4={(index) => this.changeState(game(index, this.state))}/> :

                <Fruits bet={this.state.bet} level={this.state.level} counter={this.state.counter}
                        howManyTimesYouWon={this.state.howManyTimesYouWon} fruits={this.state.fruits}/>}
              <br/>
              {this.state.didYouWin ?
                <YouWon tryAgain={() => this.changeState(tryAgain())} takeMoney={() => this.changeState(takeMoney(this.state.money, this.state.counter))}/>
                : !this.state.notYet ?
                  <YouLost bet={this.state.bet} money={this.state.money} newGame={() => this.changeState(newGame(undefined, this.state.bet))} stopPlaying={() => this.changeState(stopPlaying())}/>
                  : ''}
              <Statistics bet={this.state.bet} howManyTimesYouWon={this.state.howManyTimesYouWon} level={this.state.level} counter={counter(this.state.howManyTimesYouWon, this.state.bet)}/>
            </main>
          </div>
        }
      </div>
    );
  }
}

export default BananasAndShit;
